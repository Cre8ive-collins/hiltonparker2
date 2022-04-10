import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import { Database } from "./models";
import { API, API_KEY } from "../config"
import axios from "axios";
import NProgress from 'nprogress'
import { flash } from '../main'
import { router } from '../router'



axios.interceptors.request.use((conf) => {
  NProgress.start()
  flash.clear()
  return conf
})

axios.interceptors.response.use((res) => {
  NProgress.done()
  if(res.data.message){
    flash.success(res.data.message, {
      position : 'top'
    })
  }
  return res
}, (err) => {
  NProgress.done()
  let ms = err.response?.data?.message ? err.response.data.message : err.message
  if(ms.includes("User not found")){
    router.push('/')
  }else{
    flash.error(ms, {
     position : 'top'
   })
  }
  // return err
}

)


VuexORM.use(VuexORMAxios, {
  axios,
  // headers: { "Content-Type": "application/x-www-form-urlencoded" },
  headers: { 
    "Content-Type": "application/json", 
    "API_KEY": API_KEY,
    "user_token" : localStorage.getItem('user_token')
   },
  // headers: { "Content-Type": "application/json" },
  baseURL: API,
});

let setup = VuexORM.install(Database);
export default Vuex.createStore({
  plugins: [setup],
  modules:{

  }
});

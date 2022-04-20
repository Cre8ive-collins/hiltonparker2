import { Model } from "@vuex-orm/core";
import { router } from "../../router";
import { officerDT, clientDT } from "./transformers/index"


export default class AdmissionOfficer extends Model {
    static entity = "admissionOfficers";

    static fields() {
        return {
          id: this.attr(null),
          first_name: this.string(""),
          last_name: this.string(""),
          email: this.string(""),
          role : this.attr("")
        };
      }


    static info() {
        return this.exists() ?
          this.query().first()
          :
          { id: 0, first_name: "", last_name: ""};
      }


    static apiConfig = {
        actions : {
            async setup(token){
                let res = await this.get(`/officer?id=${token}`, officerDT)
            },

            async setPassword(data){
                data.role = 4
                let res = await this.post('/officer/setpassword', data, { save : false })
                console.log(res.response.data)
                if(res.response.data.data) router.push('/officer/dashboard')
            },

          async getAdmin(){
            this.get('/officers' , officerDT)
          },

          async login(values){
            let res = await this.post('/officer/login', values, officerDT)
            console.log(res.response.data.token)
            if(res?.response?.data){
              window.localStorage.setItem('officer_token',  res.response.data.token)
              router.push('/officer/dashboard')
            }
          },

          async allclients(){
            let res = await this.get('/officer/clients', clientDT)
            console.log(res)
            return res.response.data
          }
        }
      }
    }
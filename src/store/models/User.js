import { Model } from "@vuex-orm/core";
import { userDT } from "./transformers/index"



export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.attr(null),
      first_name: this.string(""),
      last_name: this.string(""),
      other_name : this.attr(""),
      email: this.string(""),
      phone : this.attr(""),
      applications_status : this.number(),
      address : this.attr(""),
      courses : this.attr(""),
      program : this.attr(""),
      marital_status : this.attr(""),
      gender : this.attr(""),
      place_of_birth : this.attr(""),
      date_of_birth : this.attr(""),
      agent_id : this.attr(""),
      admission_officer : this.attr(""),
      nationality : this.attr(""),
      international_passport : this.attr(""),
      passport_photo : this.attr(""),
      supporting_docs : this.attr(""),
    };
  }


  static info() {
    return this.exists() ?
      this.query().first()
      :
      { id: 0, first_name: "", last_name: ""};
  }

  static changeStatus(id, status){
    User.update({
      data : { id , applications_status : status}
    })
  }

  static apiConfig = {
    actions: {
      async resetPassword(v){
        this.post('/auth/reset', v, { save : false  })
      },
      async list(){
        this.get('/', { save: false })
      },
      async submit (values, router){ 
       let res = await this.post('apply', values, userDT)
       console.log(res, "From store response ")
       if(res.response){
         let link = res.response.data.data.link
         router.push(`/verify?code=${link}`)
       }

      },

      async login (values){
        let res = await this.post('auth/login', values, {save : false})
        return res
      },
      async verifyCode (code){
        let res = await this.post('/verify-code', { code }, userDT)
        return res
      },
      async resendEmail (email){
        let res = await this.post('/resend-verification', { email }, { save : false})
        return res
      },

      async update(val , status){
        let data = val
        status ? data.applications_status = status : null
        let body = {
          data,
          id : User.info().id
        }
        let res = await this.put('/apply', body, userDT)
        return res
      },

      async fileUpload(filename, ent){
        let data = {}
        data[ent] = filename
        User.api().update(data)
        console.log(data)
      }
    },
  };
}

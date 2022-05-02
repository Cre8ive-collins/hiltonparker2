import { Model } from "@vuex-orm/core";
import { router } from "../../router";
import { adminDT } from "./transformers/index"


export default class Admin extends Model {
    static entity = "admins";

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
            async login(values){
                let res = await this.post('/auth/admin/login', values)
                return res
            },

            async getAdmin(){
                let res = await this.get('/admin', adminDT)
                console.log(res)
            },

            async newAdmissionOfficer(val){
                let res = await this.post('/admin/newAdmissionOfficer', val, {save : false} )
                console.log(res)
                if(res.response){
                  router.back()
                }
            },

            async resetPassword(values){
              await this.post('/admin/resetPassword', values, { save : false })
            }
        }
      }
    }
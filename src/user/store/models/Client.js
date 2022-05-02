import { Model } from "@vuex-orm/core";




export default class Client extends Model {
  static entity = "clients";

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



  static apiConfig = {
    actions : {
      
    }
  };
}

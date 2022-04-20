import { User, Admin, AdmissionOfficer, Client } from '../'


export const userDT = {
    dataTransformer : (res) => {
      console.log(res.data.data, "TIEM")
      if(res && res.data && res.data.data){
        User.create({
            data : res.data.data.user
        })
      }
    }
  }

export const clientDT = {
    dataTransformer : (res) => {
      console.log(res.data.data.length, "TIEM")
      if(res && res.data && res.data.data){
        Client.create({
            data : res.data.data
        })
      }
    }
  }

export const adminDT = {
    dataTransformer : (res) => {
      if(res && res.data){
        console.log(res.data, "IDENTTTT")
        Admin.create({
            data : res.data.data
        })
      }
    }
  }

export const officerDT = {
    dataTransformer : (res) => {
      if(res && res.data){
        AdmissionOfficer.create({
            data : res.data.admission_officer
        })
      }
    }
  }
import { Admin, AdmissionOfficer } from "../store/models";
import { router } from ".";


export const adminAuth = async (to, from , next) => {
    let admin_token = window.localStorage.getItem('admin_token')
    if(!admin_token) { router.push('/admin/login') }
    else {
        await Admin.api().getAdmin()
        next()
    }
}

export const admissionOfficerAuth = async (to, from , next) => {
    let officer_token = window.localStorage.getItem('officer_token')
    if(!officer_token) { router.push('/officer/login') }
    else {
        await AdmissionOfficer.api().getAdmin()
        next()
    }
}
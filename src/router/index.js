
import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Apply from '../views/Apply.vue'
import Staff from '../views/Staff.vue'
import Verify from '../views/Verify.vue'
import Setup from '../views/Setup.vue'
import Application from '../views/Applications.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserApply from '../views/user/UserApply.vue'
import Admin from '../views/admin/index.vue'
import AdminLogin from '../views/admin/Login.vue'
import NewAdmissionOfficer from '../views/admin/NewAdmissionOfficer.vue'
import officerDashboard from '../views/officer/Dashboard.vue'
import officerUser from '../views/officer/User.vue'
import officerLogin from '../views/officer/Login.vue'
import UserDocuments from '../views/user/UserApply.vue'
// import UserAdmissionofficer from '../views/user/UserAdmissionofficer.vue'
import NotFound from '../views/NotFound.vue'
import Successful from '../views/Successful.vue'
import { adminAuth, admissionOfficerAuth } from './auth'






export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name :  'home', component : Home},
        {path : '/about', name :  'about', component : Home},
        {path : '/sign-in', name :  'sign-in', component : SignIn},
        {path : '/apply', name :  'apply', component : Apply},
        {path : '/staff', name :  'staff', component : Staff},
        {path : '/admin', name :  'staff', beforeEnter : adminAuth,  component : Admin},
        {path : '/verify', name :  'vefify', component : Verify},
        {path : '/setup', name :  'setup', component : Setup},
        {path : '/successful', name :  'successfull', component : Successful},
        {path : '/user/dashboard', name :  'user_dashboard', component : UserDashboard},
        {path : '/admin/login', name :  'admin_login', component : AdminLogin},
        {path : '/admin/new/admission_officer', name :  'new_admission_officer', component : NewAdmissionOfficer},
        {path : '/user/application', name :  'user_application', component : UserApply},
        {path : '/application', name :  'application', component : Application},
        {path : '/user/documents', name :  'user_documents', component : UserDocuments},
        {path : '/officer/dashboard', name :  'officer_dashboard', beforeEnter : admissionOfficerAuth, component : officerDashboard},
        {path : '/officer/user/:id', name :  'officer_user', beforeEnter : admissionOfficerAuth, component : officerUser},
        {path : '/officer/login', name :  'officer_login', component : officerLogin },
        // {path : '/user/admissionofficer', name :  'user_admission officer', component : UserAdmissionofficer},
        {path : '/:catchAll(.*)', name : 'NotFound', component : NotFound}
    ]
})


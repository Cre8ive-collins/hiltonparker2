
import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Apply from '../views/Apply.vue'
import Verify from '../views/Verify.vue'
import Application from '../views/Applications.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserApply from '../views/user/UserApply.vue'
import UserDocuments from '../views/user/UserApply.vue'
import UserAdmissionofficer from '../views/user/UserAdmissionofficer.vue'
import NotFound from '../views/NotFound.vue'
import Successful from '../views/Successful.vue'



export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name :  'home', component : Home},
        {path : '/about', name :  'about', component : Home},
        {path : '/sign-in', name :  'sign-in', component : SignIn},
        {path : '/apply', name :  'apply', component : Apply},
        {path : '/verify', name :  'vefify', component : Verify},
        {path : '/successful', name :  'successfull', component : Successful},
        {path : '/user/dashboard', name :  'user_dashboard', component : UserDashboard},
        {path : '/user/application', name :  'user_application', component : UserApply},
        {path : '/application', name :  'application', component : Application},
        {path : '/user/documents', name :  'user_documents', component : UserDocuments},
        {path : '/user/admissionofficer', name :  'user_admission officer', component : UserAdmissionofficer},
        {path : '/:catchAll(.*)', name : 'NotFound', component : NotFound}
    ]
})


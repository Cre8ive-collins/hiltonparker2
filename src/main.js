import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router'
import Toaster from "@meforma/vue-toaster";
import App from './App.vue'
import './assets/css/main.scss'
import {router} from './router/index'
import 'nprogress/nprogress.css'
import { required, email, min, digits } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';
import store  from "./store";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { FIREBASE_CONFIG } from './config';




// defineRule('required', required);
defineRule('required', value => {
    if (!value || !value.length) {
      return 'This field is required';
    }
    return true;
  });
defineRule('digits', digits);
defineRule('email', email);
defineRule('email', value => {
    if (!value || !value.length) {
      return 'Enter a valid email';
    }
    return true;
  });
defineRule('min', min);








export const  app = createApp(App)
// createApp(App)
const firebaseApp = initializeApp(FIREBASE_CONFIG);
export const firebaseStorage = getStorage(firebaseApp);

app
.use(router)
.use(store)
.use(Toaster)
.mount('#app')

export const flash = app.$toast

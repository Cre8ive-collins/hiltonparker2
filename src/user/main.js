import { createApp } from "vue";
// import { sentry_env } from "../config"
import App from "./App.vue";
import {router} from "./router";
import store from "./store";
import Toaster from "@meforma/vue-toaster";
import 'nprogress/nprogress.css'
import { email, min, digits } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';


// import { useRouter } from "vue-router";
// import * as Sentry from "@sentry/vue";
// import { Integrations } from "@sentry/tracing";

// Utils
import { register } from "./utils/globals";
import assets from "./utils/assets";
assets.import.all();

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






const app = createApp(App);
register(app); 

app
  .use(router)
  .use(store)
  .use(Toaster)
  .mount("#app");


export const flash = app.$toast


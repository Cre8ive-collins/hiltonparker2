import { createRouter, createWebHistory } from "vue-router";
import routes from "./auto";
import { logout } from "./firebase";
import login from "@/user/views/pages/login";



routes.push({ path: "/logout", beforeEnter: logout, component: login });


console.log("RR", routes);

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// export  default router; 

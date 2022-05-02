// import { verify, guest, loggedOut, register } from "./firebase";

const layout = require.context("@/user/views/layouts", false, /\.vue$/);
let routes = [],
  routez = [];

layout.keys().forEach((file) => {
  let filex = file.replace(".", "");
  let path = "/layout" + filex.replace(/index.vue|.vue/, "");
  let name = filex.replace("/", "").replace(".vue", "");

  let module = require(`../views/layouts${filex}`);
  if (module.default.layout) {
    routez.push({
      path,
      name: name + "_layout", // _layout included for name clash issues
      layout: module.default.layout,
      component: () => import(`../views/layouts${filex}`),
      children: [],
    });
  } else {
    routes.push({
      path,
      name,
      component: () => import(`../views/layouts${filex}`),
      children: [],
    });
  }
});

// For Layouts inside other layouts (one level's deep only)
for (let k = 0; k < routez.length; k++) {
  for (let j = 0; j < routes.length; j++) {
    if (routes[j].name == routez[k].layout) {
      routes[j].children.push(routez[k]);
    }
  }
}

const pages = require.context("@/user/views/pages", true, /\.vue$/);
//
pages.keys().forEach((file) => {
  let filex = file.replace(".", "");
  let path = filex.replace(/index.vue|.vue/, "").replace(/\/$/, "") || "/";
  let name = path.replace("/", "").replace(/\//g, "_") || "home";

  path = path.replace(/_/g, ":");

  let module = require(`../views/pages${filex}`);
  let layout = module.default.layout ? module.default.layout : "default";
  // let requiresAuth = module.default.auth ? true : false;
  // let loggedOutx = module.default.loggedOut ? true : false;
  let loggedOutx = module.default.loggedOut || module.loggedOut ? true : false;
  let requiresAuth = loggedOutx ? false : true;

  let rr = {
    path,
    name,
    component: () => import(`../views/pages${filex}`),
    meta: { requiresAuth, loggedOutx },
  };

  if (requiresAuth) {
    // rr.beforeEnter = verify;
  }

  if (module.default.guest) {
    // rr.beforeEnter = guest;
  }

  if (module.default.register) {
    // rr.beforeEnter = register;
  }

  if (module.default.loggedOut) {
    // rr.beforeEnter = loggedOut;
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].name == layout) {
      routes[i].children.push(rr);
      continue;
    }
    if (routes[i].children.length) {
      // For Pages inside layout which are inside other layouts
      for (let h = 0; h < routes[i].children.length; h++) {
        if (routes[i].children[h].name == layout + "_layout") {
          // _layout included for name clash issues
          routes[i].children[h].children.push(rr);
          continue;
        }
      }
    }
  }
});

export default routes;

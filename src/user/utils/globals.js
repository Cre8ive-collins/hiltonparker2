export const register = (app) => {
  // Require in a base component context
  const requireComponent = require.context("../views/components", true, /[\w-]+\.vue$/);

  let short = { buttonx: "Btnx", tabulate: "Tab" };

  requireComponent.keys().forEach((fileName) => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    let file = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
    // Only form elements and tabulate (table)

    if (file.split("/")[0] == "form") {
      file = file.split("/")[1] + "x";
    }

    let componentName = file.charAt(0).toUpperCase() + file.slice(1);
    // console.log("Component", componentName);

    if ((file.split("/")[1] || file.split("-")[1]) && file.split("/")[0] != "form") {
      // file = file.split("/")[0] + "-" + file.split("/")[1];
      file = file.replace(/\//g, "-");
      let f_ = "";
      let fa = file.split("-");
      for (let i = 0; i < fa.length; i++) {
        f_ += fa[i].charAt(0).toUpperCase() + fa[i].slice(1);
      }
      componentName = f_.split("Inde")[1] == "x" ? f_.split("Inde")[0] : f_;
    }

    // register component globally
    app.component(componentName, componentConfig.default || componentConfig);

    // hardcoded to simplify / shorten button comp
    if (file == "buttonx" || file == "tabulate") {
      app.component(short[file], componentConfig.default || componentConfig);
    }
  });
};

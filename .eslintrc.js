module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // "linebreak-style": "off",
    // "object-curly-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

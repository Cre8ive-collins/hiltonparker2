let glob = require('glob-all');
let PurgecssPlugin = require('purgecss-webpack-plugin');
let path = require('path');
// const SentryCliPlugin = require('@sentry/webpack-plugin');


// const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  }
}

// console.log("MODE", process.env);
console.log('MODE', process.env.npm_lifecycle_event); // build:okta

let publicPath = '/';
// let baseUrl = "/";
let pub_path = 'public/index.html';
let patterns = [
  { from: 'public_app/favicon.ico', to: 'favicon.ico' },
  // { from: "public_app/cordovadist", to: "cordovadist" },
];

if (process.env.npm_lifecycle_event === 'build:ios') {
  publicPath = '/ios/';
  pub_path = 'public_ios/index.html';
  // patterns.pop();
}

if (process.env.npm_lifecycle_event === 'build:android') {
  publicPath = '/android/';
  pub_path = 'public_android/index.html';
  patterns.pop();
  console.log('PATH', pub_path);
}

if (process.env.npm_lifecycle_event === 'build:app' || process.env.npm_lifecycle_event === 'build:app__') {
  publicPath = '';
  // baseUrl = "";
  pub_path = 'public_app_build/index.html';
  // console.log("PATH", pub_path);
}

if (process.env.npm_lifecycle_event === 'serve:app') {
  // publicPath = "/ios/";
  pub_path = 'public_app/index.html';
  // patterns.pop();
}

// if (process.env.npm_lifecycle_event === "build:live") {
//   pub_path = "public_app/index.html";
// }

module.exports = {
  productionSourceMap: false,

  publicPath,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = path.join(__dirname, pub_path);
      return args;
    });
  },

  configureWebpack: {
    performance: {
      maxAssetSize: 500000,
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      // new SentryCliPlugin({
      //   include: '.',
      //   org : "payedin-rx",
      //   // sourceMapReference : true,
      //   project : "payedin-web",
      //   authToken : "de4439e9b2ff42bd9cc5472fb18cbaa1b968e17135c3463594f66091d49e384f",
      //   ignoreFile: '.sentrycliignore',
      //   ignore: ['node_modules', 'webpack.config.js'],
      //   configFile: 'sentry.properties',
      // }),
      new PurgecssPlugin({
        // Specify the locations of any files you want to scan for class names.
        paths: glob.sync([path.join(__dirname, './public/*.html'), path.join(__dirname, './src/**/*.vue'), path.join(__dirname, './src/**/*.js')]),
        extractors: [
          {
            extractor: TailwindExtractor,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ['html', 'js', 'vue'],
          },
        ],
      }),
      // new CopyWebpackPlugin({
      //   patterns
      // }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
  },
};

// "postinstall": "FILE=./node_modules/vue-template-compiler/index.js; sed \"s/var vueVersion = .*/var vueVersion = undefined/\" $FILE > $FILE.tmp && mv $FILE.tmp $FILE",

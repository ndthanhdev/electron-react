const merge = require("webpack-merge");
const baseConfigs = require("./webpack.base");
const { outDir } = require("../src/utils/env");

module.exports = merge(baseConfigs, {
  mode: process.env.NODE_ENV,
  entry: "../src/main.js",
  output: {
    path: outDir,
    filename: "main.js"
  },
  target: "electron-main",

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
});

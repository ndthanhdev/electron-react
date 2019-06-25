const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfigs = require("./webpack.base");
const rendererConfigs = require("./webpack.renderer");
const { dllDir } = require("../src/utils/env");

module.exports = merge(baseConfigs, {
  mode: "development",
  target: "electron-renderer",
  output: {
    path: dllDir,
    filename: "[name].dll.js",
    library: "[name]"
  },
  module: rendererConfigs.module,
  entry: {
    libraries: Object.keys(require("../package.json").dependencies || {})
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: `${dllDir}/[name].json`
    })
  ]
});

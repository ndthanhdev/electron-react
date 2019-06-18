const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfigs = require("./webpack.base");
const { outDir, isProduction, port, dllDir } = require("../src/utils/env");

const getDllConfig = () => {
  const manifestPath = path.resolve(dllDir, "./libraries.json");
  const manifest = require(manifestPath);
  return merge({
    entry: ["../dll/libraries.dll.js"],
    plugins: [
      new webpack.DllReferencePlugin({
        context: dllDir,
        manifest
      })
    ]
  });
};
const dllConfigs = !isProduction && getDllConfig();

module.exports = merge(baseConfigs, dllConfigs, {
  mode: process.env.NODE_ENV,
  target: "electron-renderer",
  entry: ["../src/renderer.js"],
  output: {
    path: isProduction ? outDir : undefined,
    filename: "renderer.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../src/templates/app.html",
      filename: "app.html"
    })
  ],
  devServer: {
    port,
    contentBase: outDir
  }
});

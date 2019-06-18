const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { outDir, isProduction, port } = require("../src/utils/env");
const baseConfigs = require("./webpack.base");

module.exports = merge(baseConfigs, {
  mode: process.env.NODE_ENV,
  entry: "../src/renderer.js",
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

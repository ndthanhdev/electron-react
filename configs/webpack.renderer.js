const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const baseConfigs = require("./webpack.base");
const { outDir, isProduction, port, dllDir } = require("../src/utils/env");

const getDllConfig = () => {
  const manifestPath = path.resolve(dllDir, "./libraries.json");
  const manifest = require(manifestPath);
  return merge({
    plugins: [
      new webpack.DllReferencePlugin({
        context: dllDir,
        manifest
      }),
      new HtmlWebpackTagsPlugin({ append: false, tags: ["./libraries.dll.js"] })
    ],
    devServer: {
      contentBase: [dllDir]
    }
  });
};
const dllConfigs = !isProduction && getDllConfig();

module.exports = merge(
  baseConfigs,
  {
    mode: process.env.NODE_ENV,
    target: "electron-renderer",
    entry: { renderer: "../src/renderer.js" },
    output: {
      path: isProduction ? outDir : undefined,
      filename: "[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "../src/templates/app.html",
        filename: "app.html"
      })
    ],
    devServer: {
      port,
      contentBase: [outDir]
    }
  },
  dllConfigs
);

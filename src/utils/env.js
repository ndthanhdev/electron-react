const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const rootDir = path.resolve(__dirname, "../../");

module.exports = {
  isProduction,
  port: process.env.PORT || 1212,
  outDir: path.resolve(__dirname, "../../dist"),
  dllDir: path.resolve(rootDir, "dll")
};

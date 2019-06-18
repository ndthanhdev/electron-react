const path = require("path");

module.exports = {
  isProduction: process.env.NODE_ENV === "production",
  port: process.env.PORT || 1212,
  outDir: path.resolve(__dirname, "../../dist")
};

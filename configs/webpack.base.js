const merge = require("webpack-merge");

module.exports = merge({
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }
});

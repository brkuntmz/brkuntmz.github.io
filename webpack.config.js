const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    })
  ]
};

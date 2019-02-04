const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
  resolve: {
    alias: {
      "@material-ui/core": "@material-ui/core/es"
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ],
  output: {
    filename: "[name].[contenthash].js"
  }
};

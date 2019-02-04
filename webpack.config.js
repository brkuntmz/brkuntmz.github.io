const externals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const commonConfig = {
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
  // plugins: [new CleanWebpackPlugin(["dist", "public"])],
  resolve: {
    alias: {
      "@materal-ui/core": "@material-ui/core/es"
    }
  }
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/client",
    output: {
      path: `${__dirname}/public`
    }
  },
  {
    ...commonConfig,
    target: "node",
    entry: "./src/server",
    externals: [
      externals({
        whitelist: [/@material-ui\/core\/*./]
      })
    ]
  }
];

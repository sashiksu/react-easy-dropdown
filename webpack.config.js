/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./dev/index.js",
  mode: "development",
  //loader: "babel-loader",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "raw-loader",
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".tsx", ".ts"] },
  output: {
    path: path.resolve(__dirname, "dist/dev/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dev/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/dev/",
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

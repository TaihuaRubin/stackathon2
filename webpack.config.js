"use strict";

const { resolve } = require("path");

module.exports = {
  entry: ["./server.js"],
  output: {
    path: __dirname,
    filename: "./src/bundle.js",
  },
  node: {
    fs: "empty",
    net: "empty",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

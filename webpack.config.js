const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ["babel-polyfill", "./app/index.js"],
  output: {
    path: path.join(__dirname + "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ],
  },
  devServer: {
    contentBase: [path.join(__dirname, "build")],
    port: 3000,
    host: '0.0.0.0',
    inline: true,
  },
}

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  devServer: {
    static: {
      directory: path.join(__dirname, "lib"),
    },
    compress: true,
    port: 9527,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./lib/index.html" })],
};

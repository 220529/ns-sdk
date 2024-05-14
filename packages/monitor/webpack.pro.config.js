const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: __dirname + "/dist",
    filename: "[contenthash].bundle.js",
    hashDigestLength: 8,
    clean: true, // Clean the output directory before emit.
  },
  plugins: [new HtmlWebpackPlugin({ template: "./lib/index.html" })],
};

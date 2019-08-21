const path = require("path");
const env = process.env.NODE_ENV;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: env === "dev" ? "development" : "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {},
        },
      }
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  watch: env === "dev" ? true : false,
};

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.config.common");

const isDevMod = process.env.NODE_ENV === "development";

module.exports = merge(common, {
  name: "client",
  target: "web",

  entry: [isDevMod && "webpack-hot-middleware/client", "./src/index.js"].filter(
    Boolean
  ),

  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: /src/,
        use: [
          isDevMod ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `${path.join(__dirname, "../src")}/postcss.config.js`
              }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: { name: "[name].[ext]" }
      }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    !isDevMod &&
      new CleanWebpackPlugin("./public", {
        root: path.resolve(__dirname, "../")
      }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${path.join(__dirname, "../src")}/index.html`,
      filename: "./index.html"
    })
  ].filter(Boolean)
});

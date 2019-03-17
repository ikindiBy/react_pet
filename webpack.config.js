const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, options) => {
  let isProdMode = options.mode === "production";

  console.log("isProdMode=", isProdMode, options.mode);

  let plugins = [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
      // chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://api-for-project.com")
    })
  ];

  let optimazation = {};

  if (isProdMode) {
    plugins.push();
    optimazation = Object.assign(optimazation, {
      minimizer: [
        new UglifyJsPlugin({
          cache: true
        })
      ]
    });
  }

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: isProdMode ? "none" : "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node-modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: "src/postcss.config.js"
                }
              }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        }
      ]
    },
    plugins: plugins,
    optimization: optimazation,
    devServer: {
      overlay: true
    }
  };
};

// react-hot-loader
/*

https://www.youtube.com/watch?v=qqTIqwQX8nc

*/

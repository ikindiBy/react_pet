const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
    // path: path.resolve(__dirname, "./dist"),
    // filename: "index_bundle.js"
    // publicPath: "/dist"
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
      // chunkFilename: "[id].css"
    })
  ],
  devServer: {
    overlay: true
  },
  devtool: "#sourcemap"
};

// react-hot-loader
/*

https://www.youtube.com/watch?v=qqTIqwQX8nc

*/

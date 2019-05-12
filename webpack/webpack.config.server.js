const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  name: "server",
  target: "node",
  entry: "./src/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "js/serverRenderer.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: /src/,
        use: [
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
      }
    ]
  }
});

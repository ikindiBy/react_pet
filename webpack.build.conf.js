const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
      }),
    ],
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});

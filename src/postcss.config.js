module.exports = {
  plugins: [
    require("autoprefixer"),
    require("css-mqpacker"), // now deprecated
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};

const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/abstracts/_index.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          {
            family: "Open Sans",
            variants: ["400", "400i", "600", "600i"],
          },
        ],
        /* ...options */
      }),
    ],
  },
};

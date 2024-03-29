const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/abstracts/_index.scss";`,
      },
    },
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    config.plugin("html").tap((args) => {
      args[0].minify = false;
      return args;
    });
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
        apiUrl: "https://gwfh.mranftl.com/api/fonts",
        /* ...options */
      }),
    ],
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};

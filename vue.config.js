const {
  defineConfig
} = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // path.join(__dirname, "./src/assets/styles/common.less"),
        path.join(__dirname, "./src/assets/styles/variable.less"),
      ],
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve("./src"))
  },

});
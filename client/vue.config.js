const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const appsConfigFile = require("../config/apps");
const appsConfig = appsConfigFile[process.env.NODE_ENV || "dev"];

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: { port: appsConfig.fe_port },
  pluginOptions: {
    sourceDir: "client/src",
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, '../dist'),
        toType: "dir",
        ignore: [ "index.html", ".DS_Store" ]
      }])
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        return [{
          ...args[0],
          template: path.resolve(__dirname, 'public', 'index.html'),
        }]
      })
  }
};

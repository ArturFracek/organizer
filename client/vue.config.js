const appsConfigFile = require('../config/apps')
const appsConfig = appsConfigFile[process.env.NODE_ENV || "dev"] 

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: { port: appsConfig.fe_port },
};

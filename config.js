const appsConfigFile = require("./config/apps.js")
const dbConfigFile = require("./config/keys.js")

const appsConfig = appsConfigFile[process.env.NODE_ENV || "dev"] 
const dbConfig = dbConfigFile[process.env.NODE_ENV || "dev"]

module.exports = {
    apps: appsConfig,
    db: dbConfig,
}
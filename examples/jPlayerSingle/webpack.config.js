var path = require("path");
var sharedConfig = require("../shared.config");

Object.assign(sharedConfig, {
    context: __dirname,
    entry: {
        jPlayerSingle: "./src/index.js"
    }
})

module.exports = sharedConfig;
var path = require("path");
var sharedConfig = require("../shared.config");

Object.assign(sharedConfig, {
    context: __dirname,
    entry: {
        jPlayerMultiple: "./src/index.js"
    }
})

module.exports = sharedConfig;
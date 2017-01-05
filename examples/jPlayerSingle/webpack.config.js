var path = require("path");
var exampleConfig = require("../example.config");

Object.assign(exampleConfig, {
    context: __dirname,
    entry: {
        jPlayerSingle: "./src/index.js"
    }
})

module.exports = exampleConfig;
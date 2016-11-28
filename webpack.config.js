var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        example: ["./examples/jPlaylistDemo.js", "./examples/jPlaylistDemo2.js"]
    },
    output: {
        path: "./examples/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["transform-class-properties", "transform-decorators-legacy"]
                }
            }
        ]
    }
};
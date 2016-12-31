var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        "examples/jPlayerSingle/dist/jPlayerSingle": "./examples/jPlayerSingle/src/index.js"
    },
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["transform-class-properties", "transform-decorators-legacy"]
                }
            },
            { 
                test: /(\.css$|\.less$)/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader")
            }
        ],
       
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    postcss: function () {
        return [require("autoprefixer")];
    }
};
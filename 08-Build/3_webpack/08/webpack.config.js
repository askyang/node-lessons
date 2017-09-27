"use strict";

const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let module_base = path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        'main': './app/main.jsx',
        'vendor': ['react', 'react-dom']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [
        new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    }
};

"use strict";

const path = require('path');
let CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

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
        new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    }
};

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
var webpackWeb = require('./webpack.dev.conf');
var loaders = require('./loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('../config');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/../dist/'),
  },
  module: loaders,
  plugins: [ 
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../static"),
                to: config.dev.assetsSubDirectory,
                ignore: [".*"]
            }
        ])
    ]
};

module.exports = [

  // Config 1: For browser environment
  merge(commonConfig, webpackWeb)
];
const merge = require('webpack-merge');
const common = require('./webpack.common');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = merge(common, {
    plugins: [ new MinifyPlugin() ],
    devtool: false
});
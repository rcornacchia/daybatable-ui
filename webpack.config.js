const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader?sourceMap"]
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?name=assets/[name]-[hash:6].[ext]&limit=100000'
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
    ],
    devtool: 'source-map'
}
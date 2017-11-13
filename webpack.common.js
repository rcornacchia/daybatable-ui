const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?name=assets/[name]-[hash:6].[ext]&limit=100000'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: 'assets/favicon.png'
        })    
    ],
    devtool: 'source-map'
}

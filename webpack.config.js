const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
    filename: '/dist/css/app.css'
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js'
    },
    module : {
        rules: [
            {
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        extractPlugin
        //new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
        /*new HtmlWebpackPlugin({
            template: 'index.html',
            filename: '../index.html',
            inject: 'body'
        })*/
    ]
};

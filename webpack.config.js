const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
    filename: '/dist/css/app.css'
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js',
        publicPath: "/dist/",
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
        contentBase: './dist/',
        port: 3000,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: '../index.html',
            inject: 'body'
        })
    ]
};

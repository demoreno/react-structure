const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = '/dist/';
const extractSass = new ExtractTextPlugin({
    filename: "../css/app.css",
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js',
        publicPath: publicPath,
    },
    module : {
        rules: [
            {
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    devServer: {
        host: 'localhost',
        contentBase: '.' + publicPath,
        port: 3000,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: '../index.html',
            inject: 'body'
        })
    ]
};

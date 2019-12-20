const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname + '../../../src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
        ]
    },

    //sourcemaps
    devtool: 'source-map',
};



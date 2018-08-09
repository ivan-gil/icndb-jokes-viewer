const path = require('path');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    devServer: {
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|scss)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|eot|svg|woff|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name][hash].[ext]',
                },
            },
        ],
    },

    plugins: [
        new CaseSensitivePlugin(),
        new HtmlWebpackPlugin({
            title: 'ICNDb random joke viewer',
            hash: true,
            template: './index.html',
        }),
    ],
};

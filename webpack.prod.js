const path = require('path');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'prod'),
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
                // use: ['style-loader', 'css-loader'],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
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

    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                },
                vendors: {
                    test: /node_modules/,
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                },
            },
        },
    },

    plugins: [
        new CaseSensitivePlugin(),
        new HtmlWebpackPlugin({
            title: 'ICNDb random joke viewer',
            hash: true,
            template: './index.html',
        }),
        new ExtractTextPlugin('[name].css'),
    ],
};

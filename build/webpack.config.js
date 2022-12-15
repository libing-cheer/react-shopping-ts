const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: '[name].[fullhash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: 3220,
        hot: true,
        static: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: path.resolve('src'),
                exclude: /node_modules/
            }
        ]
    }
};
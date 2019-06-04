const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularPlugin = require('circular-dependency-plugin');
require('dotenv').config();

const projectPath = (...args) => path.join(process.cwd(), ...args);

const getStyleLoaders = (withSass = false, optimize = false) => {
    const loaders = [
        'style-loader',
        'css-loader'
    ];
    if (optimize) {
        loaders.push() // TODO
    }
    if (withSass) {
        loaders.push('sass-loader')
    }
    return loaders
}

module.exports = {
    entry: {
        app: projectPath('src')
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
        ]
    },
    devtool: 'eval',
    output: {
        publicPath: '',
        path: projectPath('build'),
        filename: '[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: projectPath('src'),
                use: getStyleLoaders(false)
            },
            {
                test: /\.scss$/,
                include: projectPath('src'),
                use: getStyleLoaders(true)
            },
            {
                test: /\.m?[jt]sx?$/,
                include: projectPath('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    stats: 'errors-warnings',
    devServer: {
        port: +process.env.PORT || 3000,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ inject: 'head' }),
        new webpack.HotModuleReplacementPlugin(),
        new CircularPlugin({ exclude: /node_modules/,}),
    ]
}
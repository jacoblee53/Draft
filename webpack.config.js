var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var transferWebpackPugin = require('transfer-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

// css 
var mainExtractPlugin = new extractTextPlugin('./css/main.min.css');
var iconExtractPlugin = new extractTextPlugin('./css/icon.min.css');

module.exports = {

    // Entry
    entry: {
        main: "./src/js/main.js",
    },

    // Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./js/[name].min.js",
    },

    // Module Loaders 
    module: {
        rules: [

            // babel 
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['env'],
                    }
                }],
            },

            // css
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },

            // scss
            {
                test: /iconfont\.scss$/,
                use: iconExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },

            {
                test: /\.scss$/,
                exclude: /iconfont\.scss$/,
                use: mainExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },   
            
            // html
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        removeComments: false,
                    }
                }],
            },

            // img
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }],
            },

            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "fonts/",
                        publicPath: "fonts/",
                    }
                }],
            },
        ],
    },

    // Plugins
    plugins: [

        new transferWebpackPugin([{
            from: "lib",
            to: "lib"
        },{
            from: "md",
            to: "md"
        }], path.resolve(__dirname, "src")),

        new cleanWebpackPlugin([
            'dist/css',
            'dist/js',
            'dist/img',
            'dist/*.html',
            'dist/fonts'
        ]),

        iconExtractPlugin,
        mainExtractPlugin,

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main'],
        }),

        // jQuery
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
    ],

};
var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

// css 
var extractPlugin = new extractTextPlugin('./css/main.css');

module.exports = {

    // Entry
    entry: {
        app: "./src/js/app.js",
    },

    // Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./js/[name].[hash].min.js",
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

            // scss
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },


            // html
            {
                test: /\.html$/,
                use: ['html-loader'],
            },

            // img
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[hash].[ext]',
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
        new cleanWebpackPlugin(['dist/css', 'dist/js', 'dist/img','dist/*.html']),

        extractPlugin,

        // jQuery
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['app'],
        }),
    ],

};
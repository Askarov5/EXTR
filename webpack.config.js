//basic var
const path = require('path');
const webpack = require('webpack');

//additional plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var isProduction = (process.env.NODE_ENV === 'production');

//module settings
module.exports = {
    //path to project
    context: path.resolve(__dirname, 'src'),

    //entry point
    entry: {
        app: [
            './js/app.js',
            './scss/style.scss'
        ]
    },

    //output point
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    devtool: isProduction ? '' : 'inline-source-map',

    module: {
        rules: [
            //SCSS
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}    
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}    
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        }
                    ],
                    fallback: 'style-loader'
                })
            },

            //Image
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',

                        }
                    },
                    'img-loader',
                ]
            },

            //SVG
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            },

            //Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            }
            
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        }),
        new ExtractTextPlugin(
            './css/[name].css'
        ),

        new CleanWebpackPlugin(['dist']),

        new CopyWebpackPlugin(
            [
                {from: './img', to: 'img'}
            ],
            {
                ignore: [
                    {glob: 'svg/*'}
                ]
            }
        )

    ],
};


//PRODUCTION ONLY
if(isProduction) {
    module.exports.plugins.push(
        new UglifyJSPlugin({
            sourceMap: true
        })
    );

    module.exports.plugins.push(
        new ImageminWebpackPlugin({
            test: /\.(png | gif | jpe?g)$/
        })
    );

    module.exports.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    );
}
import webpack from 'webpack'
import path from 'path'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    devtool: 'eval-source-map',
    entry : './src/app/rootApp.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:[{
                        loader: 'style-loader'
                    }],
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                })                
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|otf)$/,
                include : path.join(__dirname, 'src', 'app', 'img'),
                use: [
                    {loader: 'url-loader',
                    options: {limit:40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin ({
            template : 'src/app/index.html'
        })
    ]
}
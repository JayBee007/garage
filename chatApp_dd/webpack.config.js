import webpack from 'webpack'
import path from 'path'

export default {
    devtools: 'eval-source-map',
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
                exclude: path.resolve(__dirname,'node_modules'),
                loader: 'babel-loader'
            }
        ]
    }
}
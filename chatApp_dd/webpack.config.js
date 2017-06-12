import webpack from 'webpack'
import path from 'path'

export default {
    entry : './src/server/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'

    }
}
import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../webpack.config'

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)))

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'))
})

app.use(express.static(path.join(__dirname, '../app/')))

app.listen(3000, () => console.log('Running on localhost:3000'))
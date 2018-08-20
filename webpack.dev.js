const Webpack = require('webpack');

const config = require('./webpack.config')

const compiler = Webpack(config);

const path = require('path');

const opn = require('opn');

// const WebpackDevServer = require('webpack-dev-server');

// const devServerOptions = require('./webpack.devServer');

// WebpackDevServer.addDevServerEntrypoints(config, devServerOptions)

// const server = new WebpackDevServer(compiler, devServerOptions);


// server.listen(8080, 'localhost', () => {
//   console.log('Starting server on http://localhost:8080');
//   opn('http://localhost:8080')
// });

const express = require('express');

const app = express();

// const devMiddleware = require('webpack-dev-middleware')

// const hotMiddleware = require('webpack-hot-middleware');

// const instance = devMiddleware(compiler);
// app.use(express.static(`${__dirname}/dist`))
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  stats: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     console.log('html-webpack-plugin-after-emit')
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

app.use(devMiddleware);

app.use(hotMiddleware)

app.listen(9000, 'localhost', () => {
  console.log('Starting server on http://localhost:8080');
  // opn('http://localhost:9000')
})
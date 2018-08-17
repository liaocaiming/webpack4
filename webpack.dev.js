const Webpack = require('webpack');

const config = require('./webpack.config')

const compiler = Webpack(config);

// const WebpackDevServer = require('webpack-dev-server');

// const devServerOptions = require('./webpack.devServer');

// WebpackDevServer.addDevServerEntrypoints(config, devServerOptions)

// const server = new WebpackDevServer(compiler, devServerOptions);

// const opn = require('opn');

// server.listen(8080, 'localhost', () => {
//   console.log('Starting server on http://localhost:8080');
//   // opn('http://localhost:8080')
// });

const app = require('express')();

const devMiddleware = require('webpack-dev-middleware')

const hotMiddleware = require('webpack-hot-middleware');

const instance = devMiddleware(compiler);

app.use(instance);

app.listen(9000)
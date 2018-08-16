const Webpack = require('webpack');

const config = require('./webpack.config')

const compiler = Webpack(config);

const WebpackDevServer = require('webpack-dev-server');

const devServerOptions = require('./webpack.devServer');

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});
const uglify = require('uglifyjs-webpack-plugin');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash]fezs.js'
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true
  },
  plugins:[
    new uglify(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './tpl/index.html'
    }),
    new cleanWebpackPlugin('dist')
  ]
}
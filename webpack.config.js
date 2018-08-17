const uglify = require('uglifyjs-webpack-plugin');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash]fezs.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          allChunks:true
        })
      }
    ]
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
    new cleanWebpackPlugin('dist'),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    })
  ]
}
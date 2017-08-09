var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

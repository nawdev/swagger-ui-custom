var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/main.js',
    style: 'swagger-ui-dist/swagger-ui.css',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: '#eval-source-map'
}

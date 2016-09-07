var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: /node_modules/,
        test: /\.js$/,
        plugins: ['transform-runtime']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/, 
        loader: 'json'
      }
    ]
  }
}
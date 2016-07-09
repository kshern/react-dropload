var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');


module.exports = {
  devtool: 'sourcemap',
  entry: {
    index: './index.js',
    vendor: [
      'react',
      'react-dom',
      'react-dropload',
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['babel-loader']},
      {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader?modules"
      },
      { test: /\.md$/, loader: 'html!markdown' }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] })],
  resolve: {
    root,
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-dropload': path.join(__dirname, '..', '..', 'src', 'DropLoad'),
    },
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  ]
};
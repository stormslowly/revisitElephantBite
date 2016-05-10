var webpack = require('webpack');

var config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://127.0.0.1:4000',
    'webpack/hot/only-dev-server',
    './shared/app/index.js'],

  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:4000/dist/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loaders: ['react-hot','babel']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ]
};

module.exports = config;

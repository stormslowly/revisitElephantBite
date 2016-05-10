var WebPackDevServer = require('webpack-dev-server')
var expressApp = require('./expressApp')

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var config = require('./webpack.config.dev');

  const compiler = webpack(config);
  var devServer = new WebPackDevServer(compiler, {
    publicPath: config.output.publicPath,
    noInfo:true,
    hot: true,
    contentBase: false,
    compress: true
  })
  devServer.app.use(expressApp)

  module.exports = devServer
} else {
  module.exports = expressApp
}

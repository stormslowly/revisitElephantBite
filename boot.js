require('babel-core/register');

var app = require('./app');
var port = process.env.PORT || 4000

app.listen(port, function () {
  console.log('admin server listening on port ' + port)
})
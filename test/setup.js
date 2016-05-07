var chai = require('chai');
chai.use(require('chai-properties'))
var expect = chai.expect

before(function () {
  global.expect = expect
})


after(function () {
  delete  global.expect
})
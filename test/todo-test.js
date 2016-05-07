'use strict'

var project = require('../models/project')

describe('Todo', function () {
  describe('new Todo', function () {
    it('have no title and done is false',function () {
      var todo = project.createTodo()
      expect(todo).to.have.properties({title:null, done:false})
    })
  })
})
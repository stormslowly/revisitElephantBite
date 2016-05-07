'use strict'

var project = require('../models/project')

describe('Todo', function () {
  describe('new Todo', function () {
    var todo
    beforeEach(function () {
      todo = project.createTodo()
    })

    it('have no title and done is false', function () {
      expect(todo).to.have.properties({title: null, done: false})
    })

    it('can update title', function () {
      todo.title = 'create a project'
      expect(todo).to.have.properties({title: 'create a project', done: false})
    })

    it('can create task with title', function () {
      var todoWithTitle = project.createTodo('tdd the project')
      expect(todoWithTitle).to.have.properties({title: 'tdd the project', done: false})
    });

  })


  describe('add todo', function () {
    var todo
    beforeEach(function () {
      todo = project.createTodo()
    })

    it('without title can not be added', function*() {
      try {
        yield  todo.add()
      } catch (e) {
        expect(e).to.exits
        return
      }
      throw Error('SHOULD NOT BE HERE')
    })

    it('be added to project when todo with a title', function*() {
      todo.title = 'add to to project'
      yield todo.add()

      expect(project).to.have.properties({
        all: 1,
        finished: 0
      })
    })
  })

})
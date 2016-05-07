'use strict'

var Project = require('../models/project')

describe('Todo', function () {
  var project = new Project({name: 'elephant'})
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

  describe('done a todo', function () {
    var todo, project

    beforeEach(function*() {
      project = new Project({name: 'dogi dogi'})
      todo = project.createTodo('finish me')
      yield todo.add()
    })

    it('done a todo', function*() {
      yield todo.finish()
      expect(todo.done).to.equal(true)
      expect(project).to.have.properties({all: 1, finished: 1})
    })

    it('done a todo twice', function*() {
      yield todo.finish()
      yield todo.finish()
      expect(project.toObject()).to.have.properties({all: 1, finished: 1})
    })
  })
})
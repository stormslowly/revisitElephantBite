'use strict'
var co = require('co')
var projectStorage = require('../storages').Project
var Todo = require('./todo')

class Project extends projectStorage {

  constructor(project) {
    super(project)
  }

  createTodo(todoTitle) {
    var todo = new Todo({title: todoTitle})
    todo.project = this;
    todo.done = false
    return todo
  }

  add(todo) {
    return co.call(this, function*() {
      todo.project = this
      yield todo.save()
      this.all += 1
      yield  this.save()
      return todo
    })
  }

  done(todo){
    return co.call(this, function*() {
      if(todo.done){
        return todo
      }
      todo.done = true
      yield  todo.save()
      this.finished +=1
      yield this.save()
      return todo
    })
  }

  getTodo(id) {
    return co.call(this, function*() {
      var todo =  yield  Todo.findOne({_id: id, project: this.id}).exec()
      todo.project = this
      return todo
    })
  }


  getTodos(query){
    return co.call(this, function*() {
      var q = Object.assign({},query,{project:this.id})
      var todos = yield Todo.find(q).exec()
      todos.forEach(function(t){
        t.project  = this
      })
    })
  }
}

module.exports = Project;
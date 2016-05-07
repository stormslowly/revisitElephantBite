'use strict'
var co = require('co')
var projectStorage = require('../storages').Project
var Todo = require('./todo')

class Project extends projectStorage {

  constructor(project) {
    super(project)
  }

  createTodo(todoTitle) {
    var todo = new Todo({title:todoTitle})
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


}

//
// var project = {
//   createTodo(title){
//     return {
//       title: title || null, done: false,
//       add(){
//         return this.project.add(this)
//       },
//       project
//     }
//   },
//   todos: [],
//   saveTodo: function (todo) {
//     this.todos.push(todo)
//   },
//   add(todo){
//     if (!todo.title) {
//       throw Error('NO_TITLE')
//     }
//     this.saveTodo(todo);
//   }
// }

var project = new Project({name: 'elephant'})
module.exports = project;
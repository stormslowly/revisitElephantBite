'use strict'
var todoStorage = require('../storages').Todo

class Todo extends todoStorage{
  constructor(todo){
    super(todo)
  }

  add(){
    return this.project.add(this)
  }

  finish(){
    return this.project.done(this)
  }

  undone(){
    return this.project.undone(this)
  }
}


module.exports = Todo
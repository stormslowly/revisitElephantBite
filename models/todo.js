'use strict'
var todoStorage = require('../storages').Todo

class Todo extends todoStorage{
  constructor(todo){
    super(todo)
  }

  add(){
    return this.project.add(this)
  }

}


module.exports = Todo
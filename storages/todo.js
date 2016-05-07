'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId

var TodoSchema = new Schema({
  project: {type: ObjectId, ref: 'Project'},
  title: {type: String, required: true,default:null},
  done: {type: Boolean, default: false}
});

TodoSchema.index('project');

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;

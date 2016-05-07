'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
  name: {type: String, required: true},
  all: {type: Number,default:0},
  finished: {type: Number,default:0}
})

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;

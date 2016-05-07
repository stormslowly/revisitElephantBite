"use strict"
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://127.0.0.1/elephant');

var files =  fs.readdirSync(__dirname);
var modelFiles = files.filter(function(file){
  return file!=='index.js'
});

var storage = {};

modelFiles.forEach(function(file){
  var parts = path.parse(file);
  var name = parts.name;
  var capitalFileName = name.charAt(0).toUpperCase() + name.substring(1);

  storage[capitalFileName] = require('./'+file);
});

module.exports = storage;

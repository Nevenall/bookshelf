'use strict'

var path = require('path')
var fs = require('fs')

module.exports = {


  // load up data that can be used to create a nav for the content folder



  dev: function dev() {
    fs.readdir("C:\\src\\bookshelf\\static\\content")
  }

}

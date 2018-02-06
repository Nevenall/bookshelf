'use strict'

// var path = require('path');
//var glob = require('glob');
//var fs = require('fs');

export default {

  getPages: function () {


    // var files = glob.sync('../static/content/**/*.html');

    // console.log(files);

   // var files = fs.readdirSync("c:/src/bookshelf/static/content");
    var files = ["one", "one/a", "two", "two/a", "two/a/b"];


    return files;
    // return ["one", "one/a", "two", "two/a", "two/a/b"];
  }

}

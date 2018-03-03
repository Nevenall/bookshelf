// provides page related components and such for other parts of the app

'use strict'

var path = require('path')
var pages = require.context('@/pages', true)
var linq = require('linq')

// vue router needs page components and names

// app needs names for nav that match 

// so, a simple dictionary of path to html content is a good start
// so, to nest or not? 
// right now the data is flattened.
// it would be nice to collapse the nav based on
// the  directory
// we'd have to do some pathing action, not hard, but 

// maybe one data stucture for nav
// and another one for 

// pages.keys will the be the full path that we want. 
// we want to group pages into a hiearchy based on the path action. 

// what is the pathing and such like
// could be multideep.
// any folder can be a expander in the list
// 
// ./readme.html
// ./System/Magick.html
// ./Characters/Mystick/alba.html
// ./Characters/Technocatic/courage.html
// split on path separator, then 
// recursive nesting?
// 


// book
//    readme
//    section
//       page...page
//       section
//            page
//    page
//    page
// 


// can make book a class
// with sections and pages as classes
// a book has a readme as well. 
// seems reasonable. 
// we can parse a book from the required pages
// into it's sections and pages. 
// then the app can figure out how to visualize that 
// maybe call readme the introduction of the book?


// 


// each path is about the sections

// represents a book
class Book {

   // pages is an array of Page objects
   constructor(title, pages) {
      this.title = title;
      this.allPages = pages;
      this.sections = [];

      pages.forEach(page => {
         sectionParts = page.path.split("/");
         // ['.','readme>html"

      });



   }

   

}

class Section {
   constructor(name){
      this.name = name;
      this.pages = [];
      this.sections = [];
   }
}


// represents a page in the book
class Page {
   
   //name, path to the page, contents of the page
   constructor(name, path, content) {
      this.name = name;
      this.path = path;
      this.content = content;
   }
}



var pgs = pages.keys().map(function (key) {




   return {
      name: path.basename(key, '.html'),
      path: key,
      content: pages(key)
   }





});


console.log(pgs);



export default {

   name: "pagedata",

   home: {
      name: "readme",
      path: './README.html',
      content: pages("./README.html")
   },

   pages: pgs

}

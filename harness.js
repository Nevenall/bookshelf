'use strict'


class Book {
   // pages is an array of Page objects
   constructor(title, pages) {
      this.title = title;
      this.allPages = pages;
      this.sections = [];
      this.pages = [];

      pages.forEach(page => {
         var parts = page.path.split("/");
         if(parts.length < 2) {
            //noop
         }
         else if(parts.length == 2) {
            this.pages.push(page);
         } else {
            var sectionParts = parts.splice(1, parts.length - 2);
            var currentSections = this.sections;
            var current = null;
            sectionParts.forEach(newSection => {
               current = currentSections.find(s => s.name === newSection);
               if(current == null) {
                  current = new Section(newSection);
                  currentSections.push(current);
               }
               currentSections = current.sections;
            });
            current.pages.push(page);
         }
      });
   }
}

class Section {
   constructor(name) {
      this.name = name;
      this.pages = [];
      this.sections = [];
   }
}

// represents a page in the book
class Page {
   //name, full path of the page in the form ./folder/pagename.html, contents of the page
   constructor(name, path, content) {
      this.name = name;
      this.path = path;
      this.content = content;
   }
}




var pages = [
   new Page("one", "./one.html", "page one content"),
   new Page("two", "./two.html", "page two content"),
   new Page("three", "./a/three.html", "page three content"),
   new Page("four", "./b/four.html", "page four content"),
   new Page("five", "./b/ab/five.html", "page five content")
];


var testBook = new Book('test', pages);
console.log(testBook);

// var json = JSON.stringify(testBook, null, 2)

// console.log(json);
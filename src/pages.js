// pages provides components and such for other parts of the app

'use strict'

var pages = require.context('@/pages', true)


// vue router needs page components and names

// app needs names for nav that match 

// so, a simple dictionary of path to html content is a good start
// so, to nest or not? 
// right now the data is flattened.
// it would be nice to collapse the nav based on
// the  directory
// we'd have to do some pathing action, not hard, but 

// maybe one data stucture 

export default {

    name: "pages",





}
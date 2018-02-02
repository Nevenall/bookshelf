var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  // we probably don't need to render a view here, 
  // just return the indcated html fragment. 
  res.send("hello from content router");

});

module.exports = router;

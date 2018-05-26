var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {tagArray: ["Art", "Science", "Psychology", "Programming", "Education", "Family"]}
  res.render('info', obj);
});

module.exports = router;

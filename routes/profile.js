var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var obj = {
        friendArray: ["Rod", "Joe", "Bill"],
        name: "Name",
        tagArray: ["art", "engineer", "cs"]
    }

    res.render('profile', obj);
});

module.exports = router;

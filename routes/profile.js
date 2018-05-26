var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var obj = {
        friendArray: ["Rod", "Joe", "Bill"],
        name: "Name",
        tagArray: ["art", "engineer", "cs"],
        image: "https://lh3.googleusercontent.com/YXQRKv60cfiwFXfG4cULrNIWjh4YV2Ey3-8ua0VUlzWpsVCaQXZLdTnNJmgHG6-yAcA=h300"
    };


    res.render('profile', obj);
});

module.exports = router;

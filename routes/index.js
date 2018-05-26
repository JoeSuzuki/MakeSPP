var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://mongodb-stitch-makespp-mtnrj:Roddy123@cluster0-shard-00-00-c6ivj.mongodb.net:27017,cluster0-shard-00-01-c6ivj.mongodb.net:27017,cluster0-shard-00-02-c6ivj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var dbName = "MakeSPPApp";

var collectionName = "users";


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function (req,res) {
    var loginObj = {
        email: req.body.inputEmail,
        password: req.body.inputPassword
    };
    MongoClient.connect(uri, function (err, db) {
        var dbo = db.db(dbName);
        dbo.collection(collectionName).findOne(loginObj, function (err, result) {
            if (err) throw err;
            var loginObj = {
                friendArray: result.friends,
                tagArray: result.tags,
                name: result.name,
                image: "https://lh3.googleusercontent.com/YXQRKv60cfiwFXfG4cULrNIWjh4YV2Ey3-8ua0VUlzWpsVCaQXZLdTnNJmgHG6-yAcA=h300"
            };
            res.render('profile',loginObj)
            console.log("Login Success");
        });
    });
});
module.exports = router;

var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://mongodb-stitch-makespp-mtnrj:Roddy123@cluster0-shard-00-00-c6ivj.mongodb.net:27017,cluster0-shard-00-01-c6ivj.mongodb.net:27017,cluster0-shard-00-02-c6ivj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var dbName = "MakeSPPApp";

var collectionName = "users";


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createAccount', { title: 'Taggy' });
});
router.post('/',function (req,res) {
    var userObj = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        tags: [],
        friends: []
    };
    console.log(userObj);
    MongoClient.connect(uri, function (err, db) {
        var dbo = db.db(dbName);
        dbo.collection(collectionName).insertOne(userObj, function (err, res) {
            if (err) throw err;
            console.log("Created a user");
            db.close();
        });
    });
    var profileObj = {
        name: userObj.name,
        tagArray:[],
        friendArray:[],
        image: "https://lh3.googleusercontent.com/YXQRKv60cfiwFXfG4cULrNIWjh4YV2Ey3-8ua0VUlzWpsVCaQXZLdTnNJmgHG6-yAcA=h300"
    };
    res.render('profile', profileObj);
});
module.exports = router;

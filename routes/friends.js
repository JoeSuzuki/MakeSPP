var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://mongodb-stitch-makespp-mtnrj:Roddy123@cluster0-shard-00-00-c6ivj.mongodb.net:27017,cluster0-shard-00-01-c6ivj.mongodb.net:27017,cluster0-shard-00-02-c6ivj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var dbName = "MakeSPPApp";

var collectionName = "infotags";


/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(uri, function(err, db)
    {
        var dbo = db.db(dbName);
        dbo.collection(collectionName).find().toArray(
            function (err, result) {
                if(err){
                    throw err;
                }
                var obj = {tagArray: result}
                res.render('friends', obj);
                db.close();
            }
        );

    });
});

module.exports = router;

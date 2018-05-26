var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://mongodb-stitch-makespp-mtnrj:Roddy123@cluster0-shard-00-00-c6ivj.mongodb.net:27017,cluster0-shard-00-01-c6ivj.mongodb.net:27017,cluster0-shard-00-02-c6ivj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(uri, function(err, db)
    {
      console.log(db);
        db.close();
    });
  res.render('index', { title: 'Taggy' });
});

module.exports = router;

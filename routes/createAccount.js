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
        password: req.body.password
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
    res.render('index', { title: 'Taggy' });
});

module.exports = router;

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("createAccount.ejs");
});
app.post('/createAccount',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    console.log("name = "+name+", email is "+email+ "password is "+password);
    res.end("yes");
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
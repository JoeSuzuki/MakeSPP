var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createAccount', { title: 'Taggy' });
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
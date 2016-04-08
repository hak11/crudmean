var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contaclist',['contaclist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.json());


app.get('/contactlist', function(req,res){
	console.log('saya mendapatkan request')
	db.contaclist.find(function(err,docs){
        res.json(docs);
    });
})

app.post('/contactlist', function(req,res){
    console.log(req.body);
    db.contaclist.insert(req.body,function(err,doc){
        res.json(doc)
    })
})

app.listen(3000);
console.log("Saat Ini Server berjalan di port 3000");
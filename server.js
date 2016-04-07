var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req,res){
	console.log('saya mendapatkan request')
	person1 = {
    	no : "1",
    	nama : "abdul",
    	pelatihan : "pelatihan1"
    }
    person2 = {
    	no : "2",
    	nama : "jabar",
    	pelatihan : "pelatihan2"
    }
    person3 = {
    	no : "3",
    	nama : "hakim",
    	pelatihan : "pelatihan3"
    }

    var contactlist = [person1,person2,person3];
    res.json(contactlist);
})

app.listen(3000);
console.log("Saat Ini Server berjalan di port 3000");
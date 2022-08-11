var express = require('express');

var app = express();

app.get('/', function (req, res) {
   res.send('Hello World, funciona por favor!');
})

//module.exports = app

//import 

let port = process.env.PORT || 80

let server = app.listen(port)
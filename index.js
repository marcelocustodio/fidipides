var express = require('express');

var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  user     : 'sql10512351',
  password : 'H84xeLLTMt',
  database : 'tabela_do_fidipides'
});
 
connection.connect();
 
connection.query('SELECT * FROM `tabela_do_fidipides`', function (error, results, fields) {
  if (error) throw error;
  // console.log('The solution is: ', results;
  app.get('/', function (req, res) {
   res.send('Hello World, funciona por favor!' + results);
})
});
 
connection.end();



//app.get('/', function (req, res) {
//   res.send('Hello World, funciona por favor!');
//})

//module.exports = app

//import 

let port = process.env.PORT || 80

let server = app.listen(port)
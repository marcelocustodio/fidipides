import express from 'express';
// var express = require ("express")

import banco from './banco.js'
// let banco = require ('./banco.js')

console.log(banco)

let app = express();

app.get('/', function (req, res) {
   res.send('FIDIPIDES ' + banco);
})

//app.get('/', function (req, res) {
//   res.send('Hello World, funciona por favor!');
//})

let port = process.env.PORT || 80

let server = app.listen(port)
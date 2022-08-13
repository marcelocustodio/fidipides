import express from 'express';
// var express = require ("express")

import banco from './banco.js'
// let banco = require ('./banco.js')

console.log(banco)

let app = express();

app.get('/', function (req, res) {
   res.send(
    'FIDIPIDES : Sistema de Gerenciamento dos Atletas do TCE-AM em Competições<br>' +
    '<a href="atletas">Atletas</a>'
  );
})

app.get('/atletas', function (req, res) {
  var lista = ''
  banco[0]['atletas'].forEach( (element, index) => {
    lista += '<a href="/atleta/' + element['nome'] + '">' + element['nome_completo'] + '</a><br>'
  });
   res.send('Lista de Atletas<br>' + lista);
})

app.get('/atleta/:nome', function (req, res) {
  var chave = 9
  banco[0]['atletas'].forEach( (element, index) => {
    if (element['nome'] === req.params.nome) {
      console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });
  res.send(
    'Passado: ' + req.params.nome + 
    'Atleta: ' + banco[0]['atletas'][chave]['nome_completo'] + 
    'Modalidades: ' +
    'Participações HOJE: ' +
    'Participações TOTAIS: '
  );
})

let port = process.env.PORT || 80

let server = app.listen(port)
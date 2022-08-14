import express from 'express';
// var express = require ("express")

import banco from './banco.js'
// let banco = require ('./banco.js')

let app = express();


const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
const hoje = date[0] + '' + date[1]
console.log(date)
console.log(hoje)

let resgatarCompeticoesDeHoje = (hoje) => {
  let competicoes = []
  banco[2]['partidas'].forEach( (element, index) => {
    if (element['dia'] === hoje) {
      // competicoes += element['modalidade'] + ' em ' + element['local'] + ' às ' + element['hora_inicio']
      competicoes.push({'indice':index,'modalidade':element['modalidade'],"hora_inicio":element['hora_inicio'],"minuto_inicio":element['minuto_inicio']})
    }
  });
  let stringCompeticoes = ''
  if (competicoes != null) {
    competicoes.sort(
      (a , b) => {
        if(a['hora_inicio'] > b['hora_inicio']) return 1;
        if(a['hora_inicio'] < b['hora_inicio']) return -1;
        if(a['hora_inicio'] === b['hora_inicio']) {
          if(a['minuto_inicio'] > b['minuto_inicio']) return 1;
          if(a['minuto_inicio'] < b['minuto_inicio']) return -1;
        }
        return 0;
      }
    );
    competicoes.forEach(
      (element) => {
        stringCompeticoes += element['modalidade'] + ' às ' + element['hora_inicio'] + 'h' + element['minuto_inicio']
      }
    )
  }
  return stringCompeticoes
}

app.get('/', function (req, res) {
  let competicoesHoje = resgatarCompeticoesDeHoje(hoje)
   res.send(
    'FIDIPIDES : Sistema de Gerenciamento dos Atletas do TCE-AM em Competições<br>' +
    '<a href="atletas">Lista de Atletas</a><br>' +
    'Selecionar o dia: ' +
    'Selecionar a modalidade: ' +
    'botão FILTRAR<br>' +
    'Competições hoje (' + hoje + '/08):<br>' + ( competicoesHoje == '' ? 'Não há competições hoje.' : competicoesHoje )
  );
})

app.get('/atletas', function (req, res) {
  var lista = ''
  banco[0]['atletas'].forEach( (element, index) => {
    lista += '<a href="/atleta/' + element['nome'] + '">' + element['nome_completo'] + '</a><br>'
  });
   res.send('Lista de Atletas<br>' + lista);
})

let resgatarNomeModalidade = (id) => {
  let chave = 0
  banco[1]['modalidades'].forEach( (element, index) => {
    if (element['modalidade'] === id) {
      // console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });

  return banco[1]['modalidades'][chave]['nome']
}

app.get('/atleta/:nome', function (req, res) {
  var chave = 9
  banco[0]['atletas'].forEach( (element, index) => {
    if (element['nome'] === req.params.nome) {
      console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });
  var modalidades = ''
  banco[2]['partidas'].forEach( (element, index) => {
    if (element['atleta'] === req.params.nome) {
      // console.log('Nome completo do cidadão: ' + element['nome_completo'])
      // chave = index
      if (modalidades != '') modalidades += ', '
      modalidades += '(' + element['modalidade'] + ') ' + resgatarNomeModalidade(element['modalidade'])
    }
  });
  res.send(
    'Passado: ' + req.params.nome + 
    'Atleta: ' + banco[0]['atletas'][chave]['nome_completo'] + 
    'Modalidades: ' + modalidades + '<br>' +
    'Participações HOJE: ' +
    'Participações TOTAIS: '
  );
})

app.get('/modalidades', function (req, res) {
  var lista = ''
  banco[1]['modalidades'].forEach( (element, index) => {
    lista += '<a href="/modalidade/' + element['modalidade'] + '">' + element['nome'] + '</a><br>'
  });
   res.send('Modalidades da Olimpíada 2022<br>' + lista);
})

let port = process.env.PORT || 80

let server = app.listen(port)
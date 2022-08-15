import express from 'express';
// var express = require ("express")

import banco from './banco.js'
// let banco = require ('./banco.js')

let app = express();


const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
let hoje = date[0] + '' + date[1]
console.log(date)
//hoje = 23
console.log(hoje)





let resgatarCompeticoesDeHoje = (hoje) => {
  let competicoes = []
  banco[2]['partidas'].forEach( (element, index) => {
    if (element['dia'] === hoje) {
      // competicoes += element['modalidade'] + ' em ' + element['local'] + ' às ' + element['hora_inicio']
      competicoes.push({'indice':index,'modalidade':element['modalidade'],"hora_inicio":element['hora_inicio'],"minuto_inicio":element['minuto_inicio'],'local':element['local']})
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
        stringCompeticoes += (element['hora_inicio']<10 ? '0'+element['hora_inicio'] : element['hora_inicio']) + 'h' + 
                             (element['minuto_inicio']<10 ? '0'+element['minuto_inicio'] : element['minuto_inicio']) + ': ' + 
                              resgatarNomeModalidade(element['modalidade']) + ' (' + element['local'] + ')<br>'
      }
    )
  } else stringCompeticoes = 'Sem competições hoje.'
  return stringCompeticoes
}



app.get('/', function (req, res) {
  let competicoesHoje = resgatarCompeticoesDeHoje(hoje)
   res.send(
    'FIDIPIDES : Sistema de Gerenciamento dos Atletas do TCE-AM em Competições<br>' +
    'Abertura OTC 2022: segunda 22/08<br>Encerramento: sábado 27/08<br>Local: *Natal Convention Center*<br>' +
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

let resgatarModalidadesDoAtleta = (id) => {
  
  var arrayModalidades = []
  banco[2]['partidas'].forEach( (element, index) => {
    if (element['atleta'] === id) {
      if (!arrayModalidades.includes(element['modalidade'])) arrayModalidades.push(element['modalidade'])
    }
  });

  var modalidades = ''
  arrayModalidades.forEach(
    (element, index) => {
      if (modalidades != '') modalidades += ', '
      modalidades += resgatarNomeModalidade(element)
    }
  )

  return modalidades
}

let resgatarParticipacoesHoje = (id) => {
  let array_participacoes = []

  banco[2]['partidas'].forEach( (element, index) => {
    if (element['atleta'] === id && element['dia'] === hoje) {

      array_participacoes.push(
        {
          'dia':element['dia'],
          'hora_inicio':element['hora_inicio'],
          'minuto_inicio':element['minuto_inicio'],
          'local':element['local'],
          'modalidade':element['modalidade']
        }
      )

    }
  })

  let participacoes = ''

  
  if (array_participacoes.length>0) {
    array_participacoes.sort(
      (a , b) => {
        if(a['hora_inicio'] > b['hora_inicio']) return 1;
        if(a['hora_inicio'] < b['hora_inicio']) return -1;
        if(a['hora_inicio'] === b['hora_inicio']) {
          if(a['minuto_inicio'] > b['minuto_inicio']) return 1;
          if(a['minuto_inicio'] < b['minuto_inicio']) return -1;
        }
        return 0;
      }
    )

    array_participacoes.forEach(
      (element) => {
        if (participacoes != '') participacoes += '<br>'
        participacoes += element['dia'] + ' asdfasdàs ' + 
                          (element['hora_inicio']<10 ? '0'+element['hora_inicio'] : element['hora_inicio']) + 'h' + 
                          (element['minuto_inicio']<10 ? '0'+element['minuto_inicio'] : element['minuto_inicio']) + ': ' + 
                          resgatarNomeModalidade(element['modalidade']) + ' (' + element['local'] + ')'
      }
    )
  } else participacoes = 'Não há participações hoje'

  return participacoes
}

app.get('/atleta/:nome', function (req, res) {
  var chave = 9
  banco[0]['atletas'].forEach( (element, index) => {
    if (element['nome'] === req.params.nome) {
      console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });
  let modalidades = resgatarModalidadesDoAtleta(req.params.nome)
  let participacoesHoje = resgatarParticipacoesHoje(req.params.nome)
  let participacoesTotais = ''
  res.send(
    'Passado: ' + req.params.nome + '<br>' +
    'Atleta: ' + banco[0]['atletas'][chave]['nome_completo'] + '<br>' +
    'Modalidades:<br>' + modalidades + '<br><br>' +
    'Participações HOJE (' + hoje + '/08):<br> ' + participacoesHoje + '<br>' +
    'Participações TOTAIS: ' + participacoesTotais + '<br>'
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
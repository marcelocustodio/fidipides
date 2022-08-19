import express from 'express';
// var express = require ("express")

import banco from './banco.js'
// let banco = require ('./banco.js')

import bodyParser from 'body-parser'

let app = express();
//const express = require("express");
//const bodyParser = require("body-parser");
const router = express.Router();
//const app = express();


let dia = 25
let hora = 10
let local = 'Palácio dos Esportes'
let lista = []
lista[[dia, hora, local]] = 'futebol'
dia = 4
hora = 7
local = 'apcef'
lista[[dia, hora, local]] = 'volei'
dia = 20
hora = 8
local = 'se'
lista[[dia, hora, local]] = 'xxxx'
dia = 4
hora = 6
local = 'asdasdsaapcef'
lista[[dia, hora, local]] = 'volei 2'

console.log(lista[[4,7,'apcef']] === undefined)
console.log(lista[[4,8,'apcef']] === undefined)

// console.log(lista)




//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
router.post('/handle',(request,response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(request.body);
});*/

// add router in the Express app.
app.use("/", router);





const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
let hoje = date[0] + '' + date[1]
console.log(date)
//hoje = 25
console.log(hoje)
const dataString = '08/' + hoje + '/2022'
const dataAtual = new Date(dataString)
let diaDaSemana = dataAtual.getDay()
console.log(dataAtual)
let diaDaSemanaString = ''
switch(diaDaSemana) {
  case 0: {
    diaDaSemanaString = 'Domingo'
    break
  }
  case 1: {
    diaDaSemanaString = 'Segunda'
    break
  }
  case 2: {
    diaDaSemanaString = 'Terça'
    break
  }
  case 3: {
    diaDaSemanaString = 'Quarta'
    break
  }
  case 4: {
    diaDaSemanaString = 'Quinta'
    break
  }
  case 5: {
    diaDaSemanaString = 'Sexta'
    break
  }
  case 6: {
    diaDaSemanaString = 'Sábado'
    break
  }
}


let resgatarCompeticoesDeHoje = (dia) => {
  let competicoes = []
  let competicoesEAtletas = []
  let contadorDeCompeticoes = []
  banco[2]['partidas'].forEach( (element, index) => {
    
    if (element['dia'] === dia) {
      if (!contadorDeCompeticoes.includes(element['modalidade'])) {
        contadorDeCompeticoes.push(element['modalidade'])
        competicoes.push(
          {'indice':index,
          'modalidade':element['modalidade'],
          "hora_inicio":element['hora_inicio'],
          "minuto_inicio":element['minuto_inicio'],
          'local':element['local']
          }
        )
      }
      competicoesEAtletas.push([element['modalidade'], element['atleta']])
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
        let atletasNasCompeticoes = ''
        competicoesEAtletas.forEach(
          (e) => {
            if (e[0] === element['modalidade']) { 
              if (atletasNasCompeticoes != '') atletasNasCompeticoes += ', '
              atletasNasCompeticoes += e[1]
            }
          }
        )
        stringCompeticoes += (element['hora_inicio']<10 ? '0'+element['hora_inicio'] : element['hora_inicio']) + 'h' + 
                             (element['minuto_inicio']<10 ? '0'+element['minuto_inicio'] : element['minuto_inicio']) + ': ' + 
                             '<b>' + resgatarNomeModalidade(element['modalidade']) + '</b> (' + element['local'] + ') - <i>' +
                              atletasNasCompeticoes + '</i><br><br>'
      }
    )
  } else stringCompeticoes = 'Sem competições no dia.'
  return stringCompeticoes
}


router.post('/', function (req, res) {
  console.log(req.body.diafiltro)
  let competicoesHoje = resgatarCompeticoesDeHoje(parseInt(req.body.diafiltro))
   res.send(
    cabecalho() +
    'Competições da delegação do AM para ' + req.body.diafiltro + '/08:<br><br>' + ( competicoesHoje == '' ? 'Não há competições no dia.' : competicoesHoje )
  );
})

let cabecalho = () => {
  return (
  '<html><head></head>' +
  '<body>' +
  'FIDIPIDES v. 0.3.6: Sistema de Gerenciamento dos Atletas do TCE-AM em Competições<br><br>' +
    '<i>OTC 2022<br>' +
    'Abertura: segunda 22/08<br>Encerramento: sábado 27/08<br>Local: Natal Convention Center</i><br><br>' +
    '<b>Hoje: ' + diaDaSemanaString + ', ' + hoje + '/08.</b><br><br>' +
    '1. <a href="atletas">Lista de Atletas e suas Participações</a><br><br>' +
    '2. <a href="modalidades">Lista de Modalidades e seus dias</a><br><br>' +
    '3. Google Maps de <a href="https://www.google.com.br/maps/@-5.8538982,-35.1966465,12z/data=!4m3!11m2!2sFwo1MEK7Evd-YFep7Cvnqq_yVFBHKA!3e3">todos os locais de competições</a><br><br>' +
    '<form action="/" method="POST">Selecionar o dia de competições: ' +
    '<select id="diafiltro" name="diafiltro"><option value="23">23/08</option><option value="24">24/08</option><option value="25">25/08</option><option value="26">26/08</option></select>' +
    '<input type="submit" value="filtrar"/></form>' )
}

app.get('/', function (req, res) {
  let competicoesHoje = resgatarCompeticoesDeHoje(hoje)
   res.send(
    cabecalho() +
    'Competições da delegação do AM para ' + hoje + '/08:<br>' + ( competicoesHoje == '' ? 'Não há competições no dia.' : competicoesHoje )
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

  
  console.log(id)
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

let resgatarParticipacoesNumDia = (id, dia) => {
  let array_participacoes = []

  banco[2]['partidas'].forEach( (element, index) => {
    if (element['atleta'] === id && element['dia'] === dia) {

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
        participacoes +=  (element['hora_inicio']<10 ? '0'+element['hora_inicio'] : element['hora_inicio']) + 'h' + 
                          (element['minuto_inicio']<10 ? '0'+element['minuto_inicio'] : element['minuto_inicio']) + ': ' + 
                          resgatarNomeModalidade(element['modalidade']) + ' (' + element['local'] + ')'
      }
    )
  } else participacoes = 'Não há participações'

  return participacoes
}

router.post('/atleta/:nome', function (req, res) {
  console.log(req.body.diafiltro)
  console.log(req.body.nome)

  var chave = 9
  banco[0]['atletas'].forEach( (element, index) => {
    if (element['nome'] === req.params.nome) {
      console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });
  let modalidades = resgatarModalidadesDoAtleta(req.params.nome)
  let participacoesNoDia = resgatarParticipacoesNumDia(req.params.nome, parseInt(req.body.diafiltro))
  //let participacoesTotais = ''
  res.send(
    'Atleta: ' + banco[0]['atletas'][chave]['nome_completo'] + '<br><br>' +
    'Modalidades:<br>' + modalidades + '<br><br>' +
    'Selecionar dia<form action="/atleta/' + req.body.nome + '" method="POST">' +
    '<select name="diafiltro"><option value="23">23/08</option><option value="24">24/08</option><option value="25">25/08</option><option value="26">26/08</option></select>' +
    '<input type="hidden" name="nome" value="' + req.body.nome + '"/>' +
    '<input type="submit" value="filtrar" /></form><br>' +
    'Participações no dia ' + req.body.diafiltro + '/08:<br> ' + participacoesNoDia + '<br>' //+
    //'Participações TOTAIS: ' + participacoesTotais + '<br>'
  );
})

app.get('/atleta/:nome', function (req, res) {
  var chave = 9
  banco[0]['atletas'].forEach( (element, index) => {
    if (element['nome'] === req.params.nome) {
      console.log('Nome completo do cidadão: ' + element['nome_completo'])
      chave = index
    }
  });
  let modalidades = resgatarModalidadesDoAtleta(req.params.nome)
  let participacoesNumDia = resgatarParticipacoesNumDia(req.params.nome, hoje)

  res.send(
    'Atleta: ' + banco[0]['atletas'][chave]['nome_completo'] + '<br><br>' +
    'Modalidades:<br>' + modalidades + '<br><br>' +
    'Selecionar dia<form action="/atleta/' + req.params.nome + '" method="POST">' +
    '<select name="diafiltro"><option value="23">23/08</option><option value="24">24/08</option><option value="25">25/08</option><option value="26">26/08</option></select>' +
    '<input type="hidden" name="nome" value="' + req.params.nome + '"/>' +
    '<input type="submit" value="filtrar" /></form><br>' +
    'Participações no dia ' + hoje + '/08:<br> ' + participacoesNumDia + '<br>' 
  );
})

app.get('/modalidades', function (req, res) {
  var lista = ''
  banco[1]['modalidades'].forEach( (element, index) => {
    lista += '<a href="/modalidade/' + element['modalidade'] + '">' + element['nome'] + '</a><br>'
  });
   res.send('Modalidades da Olimpíada 2022<br><br>' + lista);
})

app.get('/modalidade/:modalidade', function (req, res) {
  let lista = []
  let listaDeControle = []
  banco[2]['partidas'].forEach( (element, index) => {
    
    if (element['modalidade'] === req.params.modalidade) {
    
        if (!listaDeControle.includes( 
              (element['dia'], element['hora_inicio'])
            )
          ) {
        listaDeControle.push( 
          (element['dia'], element['hora_inicio'])
        )
        lista.push( [[element['dia'],element['hora_inicio'],element['minuto_inicio']], element['local']] )
      }
    }
  });
  //console.table(lista + 'final....')
  //console.log(listaDeControle)
  let listaString = ''
  lista.forEach( 
    (element, index) => {
      // console.log(element)
      listaString += element[0][0] + '/08 às ' + element[0][1] + 'h' + element[0][2] + ' em ' + element[1] + '<br>'
    }
  )
   res.send(
    'Modalidade: ' + resgatarNomeModalidade(req.params.modalidade) + '<br><br>' +
    listaString
  );
})

let port = process.env.PORT || 80

let server = app.listen(port)
let banco = [
    {
        'atletas':[
            {'nome':'adrianne', 'nome_completo':'Adrianne Regina da Silva Freire', 'sexo':'f'},
            {'nome':'alessandra', 'nome_completo':'Alessandra Antony de Queiroz', 'sexo':'f'},
            {'nome':'alessandro', 'nome_completo':'Alessandro de Souza Bezerra', 'sexo':'m'},
            {'nome':'alex', 'nome_completo':'Alex Castro de Brito', 'sexo':'m'},
            {'nome':'allyson', 'nome_completo':'Allyson Masaji Guimarães Kato', 'sexo':'m'},
            {'nome':'anaisabela', 'nome_completo':'Ana Isabela Gil de Brito da Encarnação', 'sexo':'f'},
            {'nome':'analuiza', 'nome_completo':'Ana Luiza da Cunha Ferreira', 'sexo':'f'},
            {'nome':'andreza', 'nome_completo':'Andreza Cabral Marques do Nascimento', 'sexo':'f'},
            {'nome':'andrezza', 'nome_completo':'Andrezza Pereira Machado Braga', 'sexo':'f'},
            {'nome':'armando', 'nome_completo':'Armando Jorge Serrão Fróes', 'sexo':'m'},
            {'nome':'carlospereira', 'nome_completo':'Carlos Andrey Holanda Pereira', 'sexo':'m'},
            {'nome':'carlosmuller', 'nome_completo':'Carlos Augusto Lins Muller', 'sexo':'m'},
            {'nome':'caroline', 'nome_completo':'Caroline Cunha de Oliveira Athayde', 'sexo':'f'},
            {'nome':'cristiane', 'nome_completo':'Cristiane Cunha e Silva de Aguiar', 'sexo':'f'},
            {'nome':'daniel', 'nome_completo':'Daniel Henrique Caldeira Cruz', 'sexo':'f'},
            {'nome':'darlison', 'nome_completo':'Darlison da Silva Santos', 'sexo':'m'},
            {'nome':'debora', 'nome_completo':'Débora de Sousa Almeida', 'sexo':'f'},
            {'nome':'diego', 'nome_completo':'Diego de Carvalho Frade', 'sexo':'m'},
            {'nome':'douglas', 'nome_completo':'Douglas Monteiro de Castro', 'sexo':'m'},
            {'nome':'edisley', 'nome_completo':'Edisley Martins Cabral', 'sexo':'m'},
            {'nome':'edmilson', 'nome_completo':'Edmilson Ribeiro da Silva Júnior', 'sexo':'m'},
            {'nome':'elisabethe', 'nome_completo':'Elisabethe de Fátima Bulcão Rabelo de Carvalho', 'sexo':'f'},
            {'nome':'elissandra', 'nome_completo':'Elissandra Monteiro Freire Alvares', 'sexo':'f'},
            {'nome':'enaldo', 'nome_completo':'Enaldo Freitas Martins', 'sexo':'m'},
            {'nome':'erika', 'nome_completo':'Erika Alves de Araújo', 'sexo':'f'},
            {'nome':'fabio', 'nome_completo':'Fabio Augusto Santos Falabella', 'sexo':'m'},
            {'nome':'fernanda', 'nome_completo':'Fernanda Cantanhede Veiga Mendonça', 'sexo':'f'},
            {'nome':'fernando', 'nome_completo':'Fernando da Silva Mota Júnior', 'sexo':'m'},
            {'nome':'flavio', 'nome_completo':'Flavio das Neves Souza', 'sexo':'m'},
            {'nome':'francisley', 'nome_completo':'Francisley Alves Santana', 'sexo':'m'},
            {'nome':'frankney', 'nome_completo':'Frankney França Serruya', 'sexo':'m'},
            {'nome':'gabriel', 'nome_completo':'Gabriel da Silva Duarte', 'sexo':'m'},
            {'nome':'genzis', 'nome_completo':'Genzis Khan Pinheiro Lázaro', 'sexo':'m'},
            {'nome':'gilson', 'nome_completo':'Gilson Alberto da Silva Holanda', 'sexo':'m'},
            {'nome':'giovana', 'nome_completo':'Giovana Airon Carvalho Almeida', 'sexo':'f'},
            {'nome':'heriberto', 'nome_completo':'Heriberto da Silva Correa', 'sexo':'m'},
            {'nome':'hugo', 'nome_completo':'Hugo Tavares Araújo', 'sexo':'m'},
            {'nome':'izabel', 'nome_completo':'Izabel Albuquerque Signorini', 'sexo':'f'},
            {'nome':'jeane', 'nome_completo':'Jeane Benoliel de Farias Carvalho', 'sexo':'f'},
            {'nome':'joao', 'nome_completo':'João Henrique Coimbra da Fonseca', 'sexo':'m'},
            {'nome':'joselmar', 'nome_completo':'Joselmar Sampaio Alves', 'sexo':'m'},
            {'nome':'julio', 'nome_completo':'Júlio Alan dos Santos Viana', 'sexo':'m'},
            {'nome':'lourival', 'nome_completo':'Lourival Aleixo dos Reis', 'sexo':'m'},
            {'nome':'luciane', 'nome_completo':'Luciane Cavalcante Lopes', 'sexo':'f'},
            {'nome':'luciano', 'nome_completo':'Luciano Plentz Russo', 'sexo':'m'},
            {'nome':'marcela', 'nome_completo':'Marcela Elizabeth Miranda de Donelli', 'sexo':'f'},
            {'nome':'marcelo', 'nome_completo':'Marcelo Monteiro Custódio', 'sexo':'m'},
            {'nome':'marcoviana', 'nome_completo':'Marco Angelo Soto Vianna', 'sexo':'m'},
            {'nome':'marcofavoretti', 'nome_completo':'Marco Antônio Favoretti', 'sexo':'m'},
            {'nome':'maria', 'nome_completo':'Maria Rita de Oliveira Braga', 'sexo':'f'},
            {'nome':'mario', 'nome_completo':'Mário Roosevelt Elias da Rocha', 'sexo':'m'},
            {'nome':'milton', 'nome_completo':'Milton Bittencourt Cantanhede Filho', 'sexo':'m'},
            {'nome':'miriam', 'nome_completo':'Miriam Couteiro da Silva', 'sexo':'f'},
            {'nome':'mozart', 'nome_completo':'Mozart Santos Salles de Aguiar Junior', 'sexo':'m'},
            {'nome':'nataly', 'nome_completo':'Nataly Silva David', 'sexo':'f'},
            {'nome':'oswaldo', 'nome_completo':'Oswaldo Demósthenes Lopes Chaves Júnior', 'sexo':'m'},
            {'nome':'otacilio', 'nome_completo':'Otacílio Leite da Silva Junior', 'sexo':'m'},
            {'nome':'paulolima', 'nome_completo':'Paulo Artur Garcia de Lima', 'sexo':'m'},
            {'nome':'pauloomena', 'nome_completo':'Paulo Ney Martins Omena', 'sexo':'m'},
            {'nome':'paulomendonca', 'nome_completo':'Paulo Oliveira de Mendonça', 'sexo':'m'},
            {'nome':'paulosilveira', 'nome_completo':'Paulo Roberto da Silveira Lima', 'sexo':'m'},
            {'nome':'pedro', 'nome_completo':'Pedro Augusto Oliveira da Silva', 'sexo':'m'},
            {'nome':'plinio', 'nome_completo':'Plínio José Rocha', 'sexo':'m'},
            {'nome':'priscila', 'nome_completo':'Priscila de Almeida Hayden Simões', 'sexo':'f'},
            {'nome':'raquel', 'nome_completo':'Raquel Cezar Machado', 'sexo':'f'},
            {'nome':'rayglon', 'nome_completo':'Rayglon Alencar Bertoldo', 'sexo':'m'},
            {'nome':'rickson', 'nome_completo':'Rickson Dos Santos Colares Ribeiro', 'sexo':'m'},
            {'nome':'rildo', 'nome_completo':'Rildo José Catão de Aguiar', 'sexo':'m'},
            {'nome':'robertomiranda', 'nome_completo':'Roberto Carlos de Sá Miranda', 'sexo':'m'},
            {'nome':'robertodasilva', 'nome_completo':'Roberto Cavalcanti Krichanã da Silva', 'sexo':'m'},
            {'nome':'rodrigopinto', 'nome_completo':'Rodrigo Ricardo Ramos Pinto', 'sexo':'m'},
            {'nome':'rodrigopereira', 'nome_completo':'Rodrigo Rocha Pinto Pereira', 'sexo':'m'},
            {'nome':'rodrigogadelha', 'nome_completo':'Rodrigo Rodrigues Gadelha', 'sexo':'m'},
            {'nome':'rogerio', 'nome_completo':'Rogerio Salles Perdiz', 'sexo':'m'},
            {'nome':'ronaldo', 'nome_completo':'Ronaldo Almeida de Lima', 'sexo':'m'},
            {'nome':'rosaura', 'nome_completo':'Rosaura Hayden de Almeida', 'sexo':'f'},
            {'nome':'rubenilson', 'nome_completo':'Rubenilson Rodrigues Massulo', 'sexo':'m'},
            {'nome':'samia', 'nome_completo':'Samia Said da Silva', 'sexo':'f'},
            {'nome':'simone', 'nome_completo':'Simone Gonçalves e Silva Terceiro', 'sexo':'f'},
            {'nome':'tarcio', 'nome_completo':'Tarcio Wellerson da Silva Lima', 'sexo':'m'},
            {'nome':'valmir', 'nome_completo':'Valmir Gomes Benayon Junior', 'sexo':'m'},
            {'nome':'vinicius', 'nome_completo':'Vinicius Medeiros Vieira Dantas', 'sexo':'m'},
        ]
    },
    {
        'modalidades':[
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-masculino', 'nome':'Atletismo Masculino'},
            {'modalidade':'atletismo-revezamento-misto', 'nome':'Atletismo Revezamento Misto'},
            {'modalidade':'basquete-feminino', 'nome':'Basquete Feminino'},
            {'modalidade':'basquete-masculino', 'nome':'Basquete Masculino'},
            {'modalidade':'beach-tennis-feminino', 'nome':'Beach Tennis Feminino'},
            {'modalidade':'beach-tennis-masculino', 'nome':'Beach Tennis Masculino'},
            {'modalidade':'bocha-feminino', 'nome':'Bocha Feminino'},
            {'modalidade':'bocha-masculino', 'nome':'Bocha Masculino'},
            {'modalidade':'atletismo-feminino', 'nome':'Boliche Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
            {'modalidade':'atletismo-feminino', 'nome':'Atletismo Feminino'},
        ]
    },
    {
        'partidas':[
            {'atleta':'adrianne', 'modalidade':'atletismo-feminino', 'local':'xxxxxxxx', 'dia':25, "hora_inicio":7, "minuto_inicio":0, "hora_fim":12, "minuto_fim":0},
            {'atleta':'adrianne', 'modalidade':'atletismo-revezamento-misto', 'local':'xxxxxxxxx', 'dia':25, "hora_inicio":7, "minuto_inicio":0, "hora_fim":10, "minuto_fim":0},
            {'atleta':'samia', 'modalidade':'atletismo-revezamento-misto', 'local':'xxxxxxxxx', 'dia':13, "hora_inicio":8, "minuto_inicio":0, "hora_fim":10, "minuto_fim":0},
            {'atleta':'jeane', 'modalidade':'bocha-feminino', 'local':'yyyyy', 'dia':13, "hora_inicio":7, "minuto_inicio":30, "hora_fim":10, "minuto_fim":0},
            {'atleta':'jeane', 'modalidade':'futebol-feminino', 'local':'yyyyy', 'dia':13, "hora_inicio":7, "minuto_inicio":0, "hora_fim":10, "minuto_fim":0},
        ]
    }
]

export default banco

/*









Boliche Masculino
Corrida Feminino
Corrida Masculino
Dama Feminino
Dama Masculino
Dominó Feminino
Dominó Masculino
Futebol Society Masculino
Futevôlei Masculino
Futevôlei Misto
Futsal Feminino
Futsal Masculino
Natação Feminino
Natação Masculino
Natação Revezamento Feminino
Natação Revezamento Masculino
Natação Revezamento Misto
Pebolim
Pesca Feminino
Pesca Masculino
Pôquer
Sinuca
Tênis de Campo Feminino
Tênis de Campo Masculino
Tênis de Mesa Feminino
Tênis de Mesa Masculino
Tiro Esportivo Feminino
Tiro Esportivo Masculino
Truco
Vôlei de Praia Feminino
Vôlei de Praia Masculino
Vôlei Indoor Feminino
Vôlei Indoor Masculino
Xadrez
*/
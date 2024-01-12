// crie um codigo que faça o cadastro de filmes você deve ter as seguintes chaves: nomeDoFilme, duracao, genero
// obs: você deve cadastrar pelo menos 2 generos por filme. Em um novo objeto com as chaves: id e nomeDoGenero.

const prompt = require('prompt-sync')()
let cadastroFilme = {}
let genero = {}

while (true) {
    let nome = prompt('Informe o nome do filme: ')
    let duracao = prompt('Informe a duração: ')

    for (i=1; i<2; i++){

        let nomeDoGenero1 = prompt('Informe o nome do gênero do filme: ')
        let nomeDoGenero2 = prompt('Informe o nome do gênero do filme: ')
        genero['id1'] = nomeDoGenero1
        genero['id2'] = nomeDoGenero2
    }
    cadastroFilme['nome'] = nome
    cadastroFilme['duracao'] = duracao
    cadastroFilme['genero'] = genero

    console.log('FIM DO CADASTRO')
    console.log(cadastroFilme)
    break

} 

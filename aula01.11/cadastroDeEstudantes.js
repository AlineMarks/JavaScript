// crie um codigo que implemente um cadastro de estudante.Ultilizando objetos
const prompt = require('prompt-sync')()

let cadastroEstudante = {}


while (true) {
    let nome = prompt('Informe seu nome: ')
    let sobrenome = prompt('Informe seu sobrenome: ')
    let idade = Number(prompt('Informe sua idade: '))
    let turma = prompt('Informe a turma: ')
    let turno = prompt('Informe o turno: ')


    cadastroEstudante['nome'] = nome
    cadastroEstudante['sobrenome'] = sobrenome
    cadastroEstudante['idade'] = idade
    cadastroEstudante['turma'] = turma
    cadastroEstudante['turno'] = turno
    console.log('FIM DO CADASTRO')
    console.table(cadastroEstudante)
    break
}




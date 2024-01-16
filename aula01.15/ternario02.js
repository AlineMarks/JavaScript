const prompt = require ('prompt-sync')()

const nome = prompt ('informe seu nome: ').toLowerCase() // converter o conteudo informado pelo usuario todo na minuscula

const funcao = nome  === 'aline' ? 'aluna': nome === 'paulo' ? 'Professor': nome === 'mateus' ? 'aluno' : nome === 'não identificado'

console.log(funcao)

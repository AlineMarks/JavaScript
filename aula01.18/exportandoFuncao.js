const prompt = require('prompt-sync') ()

const soma = require('./funcao.js')
const numero1 = Number(prompt('Informe um numero: '))
const numero2 = Number(prompt('Informe um numero: '))
console.log(soma(numero1,numero2))
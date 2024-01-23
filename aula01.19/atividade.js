// Faça um algoritmo que calcule o fatorial de um número. Use arrow function

const prompt = require('prompt-sync')()

const calculoFatorial = (n) => {
    let resultado = 1
    for (let i = 1; i <= n; i++){
        resultado *= i
    }
    return resultado
}

const  numero = Number(prompt('Informe um número: '))

const mostarResultado = calculoFatorial(numero)

console.log(`O fatoria de: ${numero}}! é ${mostarResultado}`)


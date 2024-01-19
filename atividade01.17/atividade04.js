// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
// divisivel por ele mesmo e por 1

<<<<<<< HEAD
const propmt = require('prompt-sync')()

const numero = Number(propmt('informe um numero: '))

function numeroPrimo(umNumero) {

    if (umNumero % umNumero === 0 && umNumero % 2 !== 0 && umNumero % 3 !== 0 && umNumero % 5 !== 0 && umNumero % 7 !== 0) {
        return true
    } else if (umNumero === 2 || umNumero === 3 || umNumero === 5 || umNumero === 7) {
        return true
    }
    else {
=======
const propmt = require ('prompt-sync')()

const numero = Number(propmt('informe um numero: '))

function numeroPrimo(umNumero){
    if (umNumero%umNumero === 0 && umNumero%2 !== 0 && umNumero%3 !==0 && umNumero%5 !== 0 && umNumero%7 !== 0 ){
        return true
    }else {
>>>>>>> bf2704cd671ed9a9ab22a6a591461d200c056074
        return false
    }
}

console.log(numeroPrimo(numero))
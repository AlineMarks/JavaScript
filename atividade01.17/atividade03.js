// Faça um programa, com uma função sem argumento. A função retorna o valor de caractere 'P', se for um numero positivo, e 'N' se for negativo e 'Z' se for zero.

const propmt = require ('prompt-sync')()

function positivoNegativo (){
    const numero = Number(propmt('informe um numero: '))
    if (numero > 0){
        return 'P'
    }else if( numero === 0){
        return 'Z'
    }else{
        return 'N'
    }
}

console.log(positivoNegativo())
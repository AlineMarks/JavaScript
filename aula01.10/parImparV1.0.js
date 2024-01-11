// crie  um codigo que solicite 10 numero para o usuario e ao final informe quantos foram par e quantos foram impares.

const propmt = require ('prompt-sync')()

let numPares = 0
let numImpar = 0
 
for (let i = 1;  i <= 10; i++){
    const numero = Number(propmt('informe um numero: '))
    if(numero%2 === 0){
        numPares++
    }else {
        numImpar++
    }
}

console.log(`Você digitou:\nNumero PAR(ES): ${numPares}\nNumero IMPAR(ES): ${numImpar}`)
 
// crie um game para o usuario ficar tentando acertar o numero oculto. Quando ele acertar o game deve finalizar e informar a quantidade de tentativas.

const propmt = require ('prompt-sync')()

let tentativa = 0

const numeroOculto = 10

while (tentativa >=0){
    const jogada = Number(propmt('informe um numero: '))
    tentativa++
    if (jogada == numeroOculto){
        console.log(`Você acertou!!!\nTotal de tentativa(s): ${tentativa}`)
        break
    }else if(jogada > numeroOculto) {
        console.log(`O numero que você jogou foi ${jogada} é MAIOR que o número oculto, Tente novamente`)
    }else {
        console.log(`O numero que você jogou foi ${jogada} é MENOR que o número oculto, Tente novamente`)
    }

}


const prompt = require('prompt-sync')()

function deMaior(idade){
    if (idade >=18 ){
        console.log('Você é maior de idade')
    }else{
        console.log('Você é menor de idade')
    }
}

let idade = Number(prompt('Informe sua idade: '))
deMaior(idade)
idade = Number(prompt('Informe sua idade: '))
deMaior(idade)
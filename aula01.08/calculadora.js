const prompt = require ('prompt-sync')()

const operacao = Number(prompt('Escolha a operação que deseja realizar:\n1 - ADIÇÃO\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO\n >>>'))

const valor1 = Number(prompt('informe o primeiro numero: '))
const valor2 = Number(prompt('informe o segundo numero: '))



switch(operacao){
    case 1:
        console.log(`${valor1} + ${valor2} = ${valor1+valor2}` )
        break
    case 2:
        console.log(`${valor1} - ${valor2} = ${valor1-valor2}`)
        break
    case 3:
        console.log(`${valor1} x ${valor2} = ${valor1*valor2}`)
        break
    case 4:
        console.log(`${valor1} / ${valor2} = ${valor1/valor2}`)
        break
}
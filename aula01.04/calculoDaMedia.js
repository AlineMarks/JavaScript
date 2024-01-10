const prompt = require('prompt-sync')()
const nota1 = prompt ('Digite a primeira nota: ')
const nota2 = prompt ('Digite a segunda nota: ')
const nota3 = prompt ('Digite a terceira nota: ')

const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
console.log (media)

if (media >= 7){
    console.log(`SUA MÉDIA FOI ${parseInt(media)}.\nPARABÉNS VOCÊ FOI APROVADO`)
}else{
    console.log (`SUA MÉDIA FOI ${parseInt(media)}.\nVOCÊ DEVE REPETIR ESSE CURSO`)
}
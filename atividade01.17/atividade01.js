// Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato Dia de mesPorExtenso de Ano. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
const propmt = require('prompt-sync')()

const mesDoAno = {
    '01': 'janeiro',
    '02': 'fevereiro',
    '03': 'março',
    '04': 'abril',
    '05': 'maio',
    '06': 'junho',
    '07': 'julho',
    '08': 'agosto',
    '09': 'setembro',
    '10': 'outubro',
    '11': 'novembro',
    '12': 'dezembro',
}

function convertorDeData(dia, mes, ano, objetoMes) {
    for (i in objetoMes) {
        if (mes == i) {
            mes = mesDoAno[i]
            return `${dia} ${mes} ${ano} `
        }

    }

}

const data = propmt('informe uma data: ')

let dia = data[0] + data[1]
let mes = data[3] + data[4]
let ano = data[6] + data[7] + data[8] + data[9]

if (dia > 0 && dia <=30 && mes > 1 && mes <=12 && ano >1000 && ano < 3000) {
    console.log(convertorDeData(dia, mes, ano, mesDoAno))
} else
    console.log (null)

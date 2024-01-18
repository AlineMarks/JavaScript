// Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.


const propmt = require('prompt-sync')()


function conversao(hora24, minuto) {
    this.hora24 = hora24
    this.periodo = 'AM'
    if (this.hora24 >= 12) {
        if (this.hora24 != 12) {
            this.hora24 = this.hora24 - 12
            this.periodo = 'PM'
        } else {
            this.hora24 = 12
            this.periodo = 'PM'
        }
    }
    this.saidaHora12 = function () {
        return `${this.hora24}:${minuto} ${this.periodo}`
    }
}

while (true) {
    const hora = Number(propmt('informe a(s) Hora(s): '))
    const minuto = Number(propmt('informe o(s) minuto(s): '))

    if (!isNaN(hora) && !isNaN(minuto)){
        let horas = new conversao(hora, minuto)
        console.log(horas.saidaHora12())
    }else {
        const resposta = propmt('Deseja sair? ').toLowerCase()
        if (resposta === 'sim' || resposta === 's'){
            console.log('Saindo ...')
            break
        }else {
            continue
        }
    }
}






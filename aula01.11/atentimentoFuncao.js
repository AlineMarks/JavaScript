function centralDeAtendimento(opcao){
    switch(opcao){
        case 1:
            console.log('Ofertas e promoções')
            break
        case 2:
            console.log('Renovação de assinatura ou contratação de nova assinatura')
            break
        case 3:
            console.log('Cancelamento')
            break
        case 4:
            console.log('Dividas, Boletos e contas em atrasos')
            break
        case 5:
            console.log('Falar com um de nossos atendente')
            break
        case 6:
            console.log('Ouvidoria')
            break
    }
}

const prompt = require('prompt-sync')()


console.log(`
        Bem vindo a central de atentimento, escolha  uma opção:
    
    1 - Ofertas e promoções
    2 - Renovação de assinatura ou contratação de nova assinatura
    3 - Cancelamento
    4 - Dividas, Boletos e contas em atrasos
    5 - Falar com um de nossos atendente
    6 - Ouvidoria
`)

let opcao = Number(prompt('Escolha uma opção\n>> '))
centralDeAtendimento(opcao)
// obter input 
const inputElement = document.querySelector('#input') // querySelector - busca uma tag ou id ou classe
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const outputElement = document.querySelector('#output')
let converterElement = document.querySelector('#converter-btn')
const mensagemElement = document.querySelector('#mensagem')

//função de conversão de unidade
function converter(){
    //receber os valores das unidades de entrada
    const fromValue = fromElement.value
    const toValue = toElement.value

    // verificar se elas são iguais
    if (fromValue === toValue) {
        outputElement.value = inputElement.value
        mensagemElement.textContent = ""
        return 
    }
    // conversão para metros
    let metros 
    switch (fromValue) {
        case 'm':
            metros = inputElement.value
            break
        case 'km':
            metros = inputElement.value * 1000
            break
        case 'cm':
            metros = inputElement.value / 100
            break
        case 'mm':
            metros = inputElement.value / 1000
            break
    }
    // conversão para unidades de saida
    let resultado
    switch(toValue){
        case 'm':
            resultado = metros
            break
        case 'km':
            resultado = metros / 1000
            break
        case 'cm':
            resultado = metros * 100
            break
        case 'mm':
            resultado = metros * 1000
            break
    }

    //exibir resultado na output o toFixed são as casas decimais,
    output.value = resultado

    //exibir as mensagens
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    const mensagem = `${inputElement.value} ${fromLabel} equivale a ${resultado} ${toLabel}`
    mensagemElement.textContent = mensagem

}

//adicionar uma escuta de eventos

converterElement = addEventListener('click', converter)
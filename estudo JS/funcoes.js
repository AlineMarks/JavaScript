const propmt = require('prompt-sync')()

// função sem parâmentros 
console.log('Function sem paramentros')
let numero1 = Number(propmt('Informe o numero 1: '))
let numero2 = Number(propmt('Informe o numero 2: '))

function soma() {
    console.log(numero1 + numero2)
}
soma()


// função com parametros
console.log('Function com paramentros')
function mult(n1, n2) {
    num = n1 * n2
    return (num)
}

console.log(mult(numero1, numero2))

//arrow funcion
console.log('Arrow Funcion')

let subtrair = (n1, n2) => n1 - n2
let resultado = subtrair(3, 2)
console.log(resultado)

// for each - para cada

console.log('For Each')
function verificaLista(nome, index, lista) {
    console.log(nome)
    console.log(index)
    console.log(lista)
}
let listaNome = ['Aline', 'Juan', 'Uni', 'Alice', 'Kelvia', 'Erick', 'Mãe', 'Pai']

listaNome.forEach(verificaLista)

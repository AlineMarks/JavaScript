// criar uma função de forma literal

function funcao01 () { return 'Função 01'}

//armazenar uma função em uma variavel

const funcao02 = function () {return `Função 02 ${3*5}`} //declaração de função anonima, normalmente usa-se apenas uma vez

// armazenar uma função em um array

const meuArray = [function(a,b){ return a + b}, funcao01(), funcao02()]

console.log(meuArray[0](4,7))
console.log(meuArray[1]) //chamando a função literal
console.log(meuArray[2]) //chamando a função dentro da variavel

// armazenando uma função em atributo de objeto

const obj = {}
obj.falar = function () {return 'opa, to aqui'}

console.log(obj.falar())
 
// função recebendo função

function funcaoTeste (teste) {
    return teste()
}
funcaoTeste(function() {console.log('Execuntando...')})

function calcularsalario(funcoes, valor) {
    funcoes(valor)
}



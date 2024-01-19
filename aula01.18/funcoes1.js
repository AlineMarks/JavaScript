// entendendo a diferença entre local e global - const e let dentro de uma função ele é local, agr criar a variavel sem adicionar um tipo, automaticamente é adicionado o tipo var e torna ele global.
function func01 (){
     numero= 0
}

func01() 
console.log(numero)

// para inserir uma função em uma variavel, ela deve ser função anonima
const func02 = function () {return 'Sou uma variavel que armazena uma função'}

console.log(func02())


// uma lista de funções, precisa dizer o indice que está a função e se caso precisar de valores, inserir entre parenteses
const meuArrayDeFuncoes = [function(a=0, b=0) {return a+b}]

console.log(meuArrayDeFuncoes[0](2,3))

// um objeto armazenando uma função, chave falar - valor função
const objeto = {}
objeto.falar = function() {return 'Olá!'}

console.log(objeto.falar())

// arguments é uma array com paramentros variaveis,  => pesquisar sobre isso

function soma (){
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(2, 'ola'))

// função usando this, conteudo do arquivo aula01.16 -> arquivo this.js

function aluno(nomeAluno,notaAluno){
    this.nomeAluno = nomeAluno
    this.notaAluno = notaAluno

    console.log (`${this.nomeAluno} - ${this.notaAluno}`)

    this.dadosArrow = function () {
        setTimeout (() => {
            console.log(`${this.nomeAluno} - ${this.notaAluno}`)
        }, 3000)
    }
}

const alunos = new aluno('Aline', 10)
alunos.dadosArrow()
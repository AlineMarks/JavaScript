//destruturação, quebrando um array, ex: de como usar o Hooker
let saudacoes = ['olá', 'oi', 'eai','lá ele', 'opa', 'aeeee']

let saudacao4 = saudacoes[4]
console.log(saudacao4)

let [saudacao1, saudacao2, saudacao3] = saudacoes

console.log(saudacao1, saudacao2, saudacao3)

// Exemplo 2:

let pronome1, pronome2
[pronome1, pronome2] = ['eu','tu','la ele', 'nós', 'vós', 'la eles']

console.log(pronome1)
console.log(pronome2)

// destruturação com objeto, vulgo dicionario

const usuario = {
    nome: 'Aline',
     idade: 27,
    cargo:'Aluno',
   
}

const {nome, cargo} = usuario


console.log(`${nome} - ${cargo}`)
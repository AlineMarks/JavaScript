let pessoa = {
    nome: 'Aline',
    idade: 27,
    altura: 1.57,

    envelhecer: function() { //a função está dentro do objeto e  usa o this. para acessar a chava idade.
        this.idade++
    }
}

console.log(pessoa)
pessoa.envelhecer() //chamando a função que adiciona mais 1 toda vez que é chamada, assim envelhece a pessoa, mudando sua idade.
console.log(pessoa)


console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))


// entries - cria uma lista dentro de uma lista
console.log(Object.entries(pessoa))

let pessoa2 =  {
    nome:'Juan',
    idade:20,
    altura: 1.68,
    corOlho: 'verde'
}

console.log(pessoa2)

console.log(Object.assign(pessoa2, pessoa)) //adicionando as informações da pessoa um na pessoa 2

console.log(pessoa2, pessoa)

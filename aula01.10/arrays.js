const lista1 = ['a','b','c','d','e']
let lista2 = [1,2,3,4,5]

console.log(`A lista 1: ${lista1} tem ${lista1.length} elementos`)
console.log(`A lista 1: ${lista2} tem ${lista2.length} elementos`)

//usando o for para interagir com a lista
for (i = 0; i < lista1.length; i++){ 
    console.log(lista1[i])
}

let lista3 = lista1 //apenas aponta para a lista 1, tudo que acontecer na lista 3 será feito na 1 e vice-versa
console.log(lista3)


lista3.push('f') //adicionando um item na lista
console.log(lista3)
console.log(lista1)

lista3.pop() // remove elemento na lista
lista1.pop()

console.log(lista3)
console.log(lista1)

lista1.unshift('y') //adiciona no inicio da lista
lista1.unshift('x')
console.log(lista1)
lista1.shift() //remove o item no inicio da lista

console.log(lista1)


let listaFruta = ['banana', 'morango', 'uva', 'manga', 'melão', 'melancia']

let qntItemLista = listaFruta.length //verificando tamanho da lista

console.log (listaFruta)
console.log(qntItemLista)

listaFruta.push('abacaxi') //adicionando item na lista

qntItemLista = listaFruta.length

console.log (listaFruta)
console.log(qntItemLista)

listaFruta.unshift('limão') //adicionando item na lista no inicio

qntItemLista = listaFruta.length
console.log (listaFruta)
console.log(qntItemLista)

listaFruta.pop() //removendo o ultimo item na lista

qntItemLista = listaFruta.length
console.log (listaFruta)
console.log(qntItemLista)

listaFruta.shift()

qntItemLista = listaFruta.length
console.log (listaFruta)
console.log(qntItemLista)

listaFruta.splice(4) //mantem os primeiro elementos e remmove o resto, nesse casa os 4 primeiro.

qntItemLista = listaFruta.length
console.log (listaFruta)
console.log(qntItemLista)

listaFruta.fill('Laranja', 2,3) //substitui todos os itens pela informação descrito.

qntItemLista = listaFruta.length
console.log (listaFruta)
console.log(qntItemLista)

let listaNumeros = [1,3,5,2,6,8,9,7] //ordenar itens da lista em ordem crescente
listaNumeros.sort()
console.log(listaNumeros)

listaNumeros.reverse()
console.log(listaNumeros) //ordenar itens da lista em ordem descrescente.

let listaCompra = ['pão','café','arroz','feijão','tomate', 'leite']

for(let valor of listaCompra){   //pega a valor do item
    console.log(valor)
}

for(let posicao in listaCompra){ //pega a posição/index do elemento
    console.log(posicao)
}

let tamanho = listaCompra.length

for(let i=0; i < tamanho; i++){
    console.log(listaCompra[i])
}
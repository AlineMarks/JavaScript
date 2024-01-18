// this global
let comparaThis = function(paramentro) {
    console.log(this === paramentro)
}

comparaThis(global)

// this local, novo pai o objeto e o objeto é tem como o pai global
const objeto = {}
//bind cria uma nova função, ele tem sua propria palavra this especificada
comparaThis = comparaThis.bind(objeto)
comparaThis(global)
comparaThis(objeto)

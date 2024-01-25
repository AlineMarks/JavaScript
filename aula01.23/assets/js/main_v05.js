let objetos = []
function minhaArray(valor) {

    console.log(objetos.length)
    if (valor === 'add') {
        
        if (objetos.length == 0){
            objetos.push(document.getElementById('palavra').value)
        } else {
            objetos.unshift(document.getElementById('palavra').value)
            
        }

    }else if (valor === 'ord'){
        objetos.sort()
    }
    console.log(objetos)
    
}

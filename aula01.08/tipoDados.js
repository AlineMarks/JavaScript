const propmt = require ('prompt-sync')()
const tipoDado = propmt("Digite algo: ")

const lista = [1,2,3,4,5,6,7,8,9,0]


if (tipoDado == 'true' || tipoDado == 'false'){
    console.log(typeof(Boolean(tipoDado)))
}else if(isNaN(tipoDado)){
    console.log(typeof(tipoDado))
}else if(!isNaN(tipoDado)){
    console.log(typeof(Number(tipoDado)))
}else {
    console.log ("IMPOSSIVEL DE IDENTIFICAR")
}

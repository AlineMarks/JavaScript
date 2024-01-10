const propmt = require ('prompt-sync')()

const idade = propmt("Qual a sua idade? ")

if (idade >= 18 && idade < 60){
    console.log ("Você é ADULTO")
}else if (idade >0 && idade < 12){
    console.log ("Você é CRIANÇA")
}else if (idade >=12 && idade < 18){
    console.log ("Você é ADOLESCENTE")
}else if (idade >= 60 ){
    console.log ("Você é IDOSO")
} else {
    console.log("IMPOSSIVEL IDENTIFICAR SUA FAIXA ETARIA")
}
function alteraTexto(classe) {
    let elementos = document.getElementsByClassName(classe)
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = 'Texto alterado com sucesso!' // o innerHTML - inseri no html
    }
}

function alteraTexto2(tag) {
    let tags = document.getElementsByTagName(tag)
    for (let i = 0; i < tags.length; i++) {
        tags[i].innerHTML = 'Texto alterado com sucesso!' // o innerHTML - inseri no html
    }
}


function alteraNome(){
    document.getElementsByName('nome')[0].value = 'Aline TMC'
}

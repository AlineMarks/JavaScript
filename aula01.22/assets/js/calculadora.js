function calcular(tipo, valor) {


    if (tipo === 'num') {
        document.getElementById('resultado').value += valor
    } else if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor ==='.' ) {
            document.getElementById('resultado').value += valor
        } else if (valor === '='){
            let valorCampo = eval(document.getElementById('resultado').value)
         //eval() processa numeros mesmo sendo strings, por isso ela realiza a calculo.
         document.getElementById('resultado').value = valorCampo
        }

    }
}

  
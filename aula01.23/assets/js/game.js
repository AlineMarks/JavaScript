let altura = 0
let largura = 0
let numVida = 1
let tempo = 15

function tamanhoDoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth
}
tamanhoDoPalco()

let cronometro = setInterval(function() {
    tempo -=1
    if (tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href='gameWin.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function imgRandomica() {
    //remove mosquito
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (numVida > 3) {
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('vida' + numVida).src = 'assets/image/coracao_vazio.png'
            numVida++
        }

    }


    let posicaoX = Math.floor(Math.random() * largura) - 90 // para não negativar as laterais
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX // para não negativar a tela em cima e em baixo
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    let mosquito = document.createElement('img') // criando uma variavel do tipo imagem
    mosquito.src = 'assets/image/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio()

    // Random da posição
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito) //determinando que a variavel é filho do body
}

function tamanhoRandomico() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

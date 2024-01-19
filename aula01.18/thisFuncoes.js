const pessoa = {
    saudacao1: 'Bom dia!',
    saudacao2: 'Boa tarde!',
    saudacao3: 'Boa noite!',
    falar: function () {
        console.log(this.saudacao1)
    }
}
pessoa.falar()

const falar = pessoa.falar

falar() //paradgima entre estruturada e O.O

// o bind cria uma nova função que ,quando chamada, tem sua palavra-chave this definida com o valor fornecido
const falaPessoa = pessoa.falar.bind(pessoa) // mantem o escorpo, e faz uma nova função, que referencia outra, ou seja, usa-se o bind para realizar isso. Resolvendo assim o paradgima
// sempre adiciona o dind apos a função
falaPessoa()

// usando arrow function
function pessoaFuncao() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000)
}

new pessoaFuncao()
// usando bind
function pessoaFuncao() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)  // sempre adiciona o dind apos a função
}
new pessoaFuncao()

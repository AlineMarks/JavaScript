function aluno(nomeAluno,notaAluno){
    this.nomeAluno = nomeAluno
    this.notaAluno = notaAluno

    console.log (`${this.nomeAluno} - ${this.notaAluno}`)

    this.dadosArrow = function () {
        setTimeout (() => {
            console.log(`${this.nomeAluno} - ${this.notaAluno}`)
        }, 3000)
    }
}

const alunos = new aluno('Aline', 10)
alunos.dadosArrow()
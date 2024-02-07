function calcularSalario(horasMensal, salarioHora) {
    this.horasMensal = Number(horasMensal)
    this.salarioHora = Number(salarioHora)
    let salarioMensal = this.horasMensal * this.salarioHora
    return `O salario é igual a ${salarioMensal}`
}

let resultado = calcularSalario('150','40.5')
console.log(resultado)
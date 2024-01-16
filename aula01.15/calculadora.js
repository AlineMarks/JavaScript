function calculadora() {
    function adicao(a, b) {
        return a + b;
    }
    function subtracao(a, b) {
        return a - b;
    }
    function multiplicacao(a, b) {
        return a * b;
    }
    function divisao(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Não é possível dividir por zero.";
        }
    }
    // Exemplo de uso:
    console.log("Soma:", adicao(5, 3));
    console.log("Subtração:", subtracao(5, 3));
    console.log("Multiplicação:", multiplicacao(5, 3));
    console.log("Divisão:", divisao(5, 3));
}
// Chama a função calculadora

calculadora();

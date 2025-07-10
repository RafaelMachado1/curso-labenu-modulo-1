// =================================================================================
// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e 
//    retornar o valor de uma das operações básicas.
// =================================================================================

/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number} A soma de a e b.
 */
function somar(a, b) {
    return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a
 * @param {number} b
 * @returns {number} A diferença entre a e b.
 */
function subtrair(a, b) {
    return a - b;
}

/**
 * Multiplica dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number} O produto de a e b.
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Divide o primeiro número pelo segundo.
 * @param {number} a
 * @param {number} b
 * @returns {number|string} O quociente de a e b, ou uma mensagem de erro.
 */
function dividir(a, b) {
    // Adicionamos uma verificação para evitar a divisão por zero.
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    return a / b;
}


// =================================================================================
// b) Em seguida, fora das funções, receba do usuário dois números e 
//    armazene-os em variáveis.
// =================================================================================

// Usamos prompt() para pedir a entrada do usuário.
const input1 = prompt("Digite o primeiro número:");
const input2 = prompt("Digite o segundo número:");

// Convertemos a entrada (que é sempre uma string) para número.
// parseFloat permite o uso de números com casas decimais.
const numero1 = parseFloat(input1);
const numero2 = parseFloat(input2);


// =================================================================================
// c) Invoque cada uma das 4 funções, passando como argumento os dois números.
// d) Crie variáveis para receber o retorno e imprima no console.
// =================================================================================

// Verificamos se as entradas são números válidos antes de continuar.
// isNaN (Is Not a Number) retorna true se o valor não for um número.
if (isNaN(numero1) || isNaN(numero2)) {
    
    // Se a entrada for inválida, exibimos uma mensagem de erro no console e na página.
    console.error("Entrada inválida. Por favor, recarregue a página e insira apenas números.");
    document.getElementById('instrucao').innerHTML = "<p style='color: red;'><strong>Erro:</strong> Entrada inválida. Por favor, recarregue a página e tente novamente com números válidos.</p>";

} else {

    // Se a entrada for válida, executamos os cálculos.
    // Invocamos as funções e armazenamos o retorno em variáveis (passos c e d juntos).
    const resultadoSoma = somar(numero1, numero2);
    const resultadoSubtracao = subtrair(numero1, numero2);
    const resultadoMultiplicacao = multiplicar(numero1, numero2);
    const resultadoDivisao = dividir(numero1, numero2);

    // Imprimimos os resultados no console de forma organizada.
    console.log(`--- Resultados para os números ${numero1} e ${numero2} ---`);
    console.log(`Soma: ${numero1} + ${numero2} = ${resultadoSoma}`);
    console.log(`Subtração: ${numero1} - ${numero2} = ${resultadoSubtracao}`);
    console.log(`Multiplicação: ${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
    console.log(`Divisão: ${numero1} / ${numero2} = ${resultadoDivisao}`);
    console.log("-----------------------------------------------");

    // Atualizamos a página para dar um feedback ao usuário.
    document.getElementById('instrucao').innerHTML = "<p style='color: green;'><strong>Sucesso!</strong> Os cálculos foram realizados. Verifique o console para ver os resultados.</p>";
}
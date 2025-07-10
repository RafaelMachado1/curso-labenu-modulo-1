// =================================================================================
// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles.
// =================================================================================

/**
 * Soma dois números e imprime o resultado no console.
 * @param {number} num1 - O primeiro número.
 * @param {number} num2 - O segundo número.
 */
function somarNumeros(num1, num2) {
    const soma = num1 + num2;
    // Imprimindo no console, como solicitado no exercício
    console.log(`(Console) A soma de ${num1} e ${num2} é: ${soma}`);
    return soma; // Retornamos o valor para poder exibi-lo no HTML
}

// Invocando a função e exibindo o resultado na página HTML
const divResultadoA = document.getElementById('resultado-a');
const resultadoSoma = somarNumeros(25, 17);
divResultadoA.textContent = `A soma de 25 e 17 é: ${resultadoSoma}.`;


// =======================================================================================
// b) Uma função que recebe 2 números e imprime um booleano (true/false) se o
//    primeiro é maior ou igual ao segundo.
// =======================================================================================

/**
 * Verifica se o primeiro número é maior ou igual ao segundo.
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean} - True se num1 >= num2, senão False.
 */
function ehMaiorOuIgual(num1, num2) {
    return num1 >= num2;
}

// Invocando a função com diferentes valores e exibindo na página
const divResultadoB = document.getElementById('resultado-b');
divResultadoB.innerHTML = `
    <p>O número 50 é maior ou igual a 30? <strong>${ehMaiorOuIgual(50, 30)}</strong></p>
    <p>O número 30 é maior ou igual a 50? <strong>${ehMaiorOuIgual(30, 50)}</strong></p>
    <p>O número 10 é maior ou igual a 10? <strong>${ehMaiorOuIgual(10, 10)}</strong></p>
`;


// =======================================================================================
// c) Uma função que recebe um número e imprime no console um booleano informando
//    se o número é par ou não.
// =======================================================================================

/**
 * Verifica se um número é par.
 * @param {number} numero
 * @returns {boolean} - True se o número for par, senão False.
 */
function ehPar(numero) {
    // Um número é par se o resto da sua divisão por 2 for 0.
    const resultado = numero % 2 === 0;
    console.log(`(Console) O número ${numero} é par? ${resultado}`);
    return resultado;
}

// Invocando a função e exibindo na página
const divResultadoC = document.getElementById('resultado-c');
divResultadoC.innerHTML = `
    <p>O número 8 é par? <strong>${ehPar(8)}</strong></p>
    <p>O número 7 é par? <strong>${ehPar(7)}</strong></p>
`;


// =======================================================================================
// d) Uma função que recebe um salário bruto e retorna o salário líquido com 
//    desconto de 10%, referente ao INSS.
// =======================================================================================

/**
 * Calcula o salário líquido após um desconto de 10%.
 * @param {number} salarioBruto - O valor do salário antes do desconto.
 * @returns {number} - O valor do salário líquido.
 */
function calcularSalarioLiquido(salarioBruto) {
    const taxaDesconto = 0.10; // 10%
    const salarioLiquido = salarioBruto * (1 - taxaDesconto);
    return salarioLiquido;
}

// Invocando a função e exibindo na página com formatação de moeda
const divResultadoD = document.getElementById('resultado-d');
const salarioBrutoExemplo = 4500;
const salarioLiquidoCalculado = calcularSalarioLiquido(salarioBrutoExemplo);

// Formatando para o padrão de moeda brasileiro (BRL) para melhor visualização
const formatoMoeda = { style: 'currency', currency: 'BRL' };
const brutoFormatado = salarioBrutoExemplo.toLocaleString('pt-BR', formatoMoeda);
const liquidoFormatado = salarioLiquidoCalculado.toLocaleString('pt-BR', formatoMoeda);

divResultadoD.textContent = `Salário bruto: ${brutoFormatado} => Salário líquido (desconto de 10%): ${liquidoFormatado}`;
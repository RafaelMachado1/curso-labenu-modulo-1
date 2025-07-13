/**
 * Função principal para executar a lógica do exercício 2 da revisão.
 */
function executarCalculadora() {
    // ● Peça para o usuário inserir dois números e guarde-os em variáveis diferentes
    const inputNum1 = prompt("Digite o primeiro número:");
    const inputNum2 = prompt("Digite o segundo número:");

    // Convertemos a entrada (que é uma string) para número.
    // Usar Number() é uma forma comum e eficaz de fazer isso.
    const num1 = Number(inputNum1);
    const num2 = Number(inputNum2);

    // Validação para garantir que o usuário digitou números válidos.
    // isNaN() verifica se o valor "Não é um Número".
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Entrada inválida. Por favor, recarregue a página e insira apenas números.");
        return; // Encerra a função se a entrada for inválida.
    }
    
    // ● Imprima no console:
    console.log(`--- Resultados para os números ${num1} e ${num2} ---`);

    // ○ A soma do primeiro com o segundo
    console.log(`Soma: ${num1} + ${num2} = ${num1 + num2}`);

    // ○ A subtração do primeiro pelo segundo
    console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`);

    // ○ A multiplicação do primeiro pelo segundo
    console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`);

    // ○ A divisão do primeiro pelo segundo
    console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);

    // ○ O resto da divisão do primeiro pelo segundo (operador de módulo %)
    console.log(`Resto da Divisão: ${num1} % ${num2} = ${num1 % num2}`);
}

// Chamando a função para iniciar o programa.
executarCalculadora();
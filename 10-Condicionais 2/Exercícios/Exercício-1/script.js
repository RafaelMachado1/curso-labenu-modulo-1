// Recebe um número por prompt
const inputUsuario = prompt("Digite um número para verificar se é divisível por 2 ou por 3:");
const numero = Number(inputUsuario);

/**
 * a) Verifica a divisibilidade usando ifs aninhados.
 * @param {number} num - O número a ser verificado.
 */
function verificarComIfsAninhados(num) {
    console.log("--- a) Verificação com Ifs Aninhados ---");
    // Primeiro, checamos se é divisível por 2
    if (num % 2 === 0) {
        // Se for, a condição "divisível por 2 OU por 3" já é verdadeira.
        console.log(`O número ${num} é divisível por 2 ou por 3.`);
    } else {
        // Se não for por 2, ainda precisamos checar se é por 3.
        if (num % 3 === 0) {
            // Se for por 3, a condição "divisível por 2 OU por 3" é verdadeira.
            console.log(`O número ${num} é divisível por 2 ou por 3.`);
        } else {
            // Se não for por 2 NEM por 3, a condição é falsa.
            console.log(`O número ${num} NÃO é divisível por 2 ou por 3.`);
        }
    }
}

/**
 * b) Verifica a divisibilidade usando um operador lógico.
 * @param {number} num - O número a ser verificado.
 */
function verificarComOperadorLogico(num) {
    console.log("\n--- b) Verificação com Operador Lógico (||) ---");
    // Unimos as duas condições com o operador OU (||).
    // Se a primeira (num % 2 === 0) OU a segunda (num % 3 === 0) for verdadeira,
    // o bloco if será executado.
    if (num % 2 === 0 || num % 3 === 0) {
        console.log(`O número ${num} é divisível por 2 ou por 3.`);
    } else {
        console.log(`O número ${num} NÃO é divisível por 2 ou por 3.`);
    }
}

// Antes de executar, validamos se a entrada do usuário é de fato um número.
if (!inputUsuario || isNaN(numero)) {
    console.error("Entrada inválida. Por favor, recarregue a página e digite um número.");
} else {
    // Se a entrada for válida, chamamos as duas funções.
    verificarComIfsAninhados(numero);
    verificarComOperadorLogico(numero);
}
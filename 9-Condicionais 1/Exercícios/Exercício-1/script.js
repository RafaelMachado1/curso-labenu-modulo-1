// Crie uma função que receba uma const numérica qualquer.
// Primeiro, definimos a constante que será passada para a função.
const numeroParaVerificar = 10;
const outroNumeroParaVerificar = 7; // Vamos testar um caso ímpar também.

/**
 * Verifica se um número fornecido é par.
 * @param {number} numero - O número a ser verificado.
 * @returns {string | undefined} - Retorna a string "o número é par" se a condição for
 *                                 verdadeira, ou undefined (implícito) caso contrário.
 */
function verificaSeEhPar(numero) {
    // Crie um if para verificar se o número guardado na const é par.
    // A condição para um número ser par é que o resto da sua divisão por 2 seja 0.
    // Usamos o operador de módulo (%) para obter o resto da divisão.
    if (numero % 2 === 0) {
        // Caso seja, a função deve retornar a mensagem: "o número é par".
        return "o número é par";
    }
}

// Depois disso, imprima o retorno no console.

// Teste com o número par
console.log(`Verificando o número ${numeroParaVerificar}...`);
const resultado1 = verificaSeEhPar(numeroParaVerificar);
console.log("Retorno da função:", resultado1); // Deve imprimir "o número é par"

console.log("--------------------------------");

// Teste com o número ímpar
console.log(`Verificando o número ${outroNumeroParaVerificar}...`);
const resultado2 = verificaSeEhPar(outroNumeroParaVerificar);
console.log("Retorno da função:", resultado2); // Deve imprimir "undefined", pois a função não retorna nada no caso de número ímpar.
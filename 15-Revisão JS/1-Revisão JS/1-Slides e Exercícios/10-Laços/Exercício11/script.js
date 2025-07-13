// Array de exemplo para o exercício.
const numeros = [11, 15, 18, 14, 12, 13];

// --- VERSÃO COM for...of (ATIVA E RECOMENDADA PARA SIMPLICIDADE) ---

/**
 * Encontra o maior número em um array usando o laço for...of.
 * Esta abordagem é moderna e legível, focando nos valores do array.
 * @param {number[]} array - O array de números.
 * @returns {string} - A frase com o maior número.
 */
function encontrarMaiorComForOf(array) {
    if (!array || array.length === 0) {
        return "Array inválido ou vazio.";
    }

    // Inicializamos a variável que guardará o maior número com o primeiro item do array.
    // Esta é a forma mais segura de iniciar a comparação.
    let maiorNumero = array[0];

    // O laço for...of percorre cada VALOR do array.
    for (const numeroAtual of array) {
        // Comparamos o número atual com o maior que encontramos até agora.
        if (numeroAtual > maiorNumero) {
            // Se o atual for maior, ele se torna o novo 'maiorNumero'.
            maiorNumero = numeroAtual;
        }
    }

    return `O maior número é ${maiorNumero}`;
}

console.log("--- Usando for...of (Recomendado) ---");
const resultadoForOf = encontrarMaiorComForOf(numeros);
console.log(resultadoForOf);


/* --- VERSÃO COM for TRADICIONAL (COMENTADA PARA ESTUDO) ---

/**
 * Encontra o maior número em um array usando o laço for tradicional.
 * Esta abordagem nos dá controle total sobre o índice.
 * @param {number[]} array - O array de números.
 * @returns {string} - A frase com o maior número.
 */
/*
function encontrarMaiorComFor(array) {
    if (!array || array.length === 0) {
        return "Array inválido ou vazio.";
    }

    let maiorNumero = array[0];

    // O laço começa em 1, pois já usamos o índice 0 para iniciar 'maiorNumero'.
    for (let i = 1; i < array.length; i++) {
        // Acessamos o número atual usando seu índice: array[i]
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return `O maior número é ${maiorNumero}`;
}

console.log("\n--- Usando for tradicional ---");
const resultadoFor = encontrarMaiorComFor(numeros);
console.log(resultadoFor);
*/


/* --- VERSÃO COM while (COMENTADA PARA ESTUDO) ---

/**
 * Encontra o maior número em um array usando o laço while.
 * Esta abordagem requer o controle manual do contador.
 * @param {number[]} array - O array de números.
 * @returns {string} - A frase com o maior número.
 */
/*
function encontrarMaiorComWhile(array) {
    if (!array || array.length === 0) {
        return "Array inválido ou vazio.";
    }

    let maiorNumero = array[0];
    let i = 1; // Inicializamos o contador fora do laço.

    // O laço continua enquanto a condição for verdadeira.
    while (i < array.length) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        i++; // É CRUCIAL incrementar o contador para evitar um loop infinito.
    }

    return `O maior número é ${maiorNumero}`;
}

console.log("\n--- Usando while ---");
const resultadoWhile = encontrarMaiorComWhile(numeros);
console.log(resultadoWhile);
*/

/* --- BÔNUS: A FORMA MAIS FÁCIL E RÁPIDA (REAL WORLD) ---
// No dia a dia, para esta tarefa específica, você provavelmente usaria o Math.max().
// O spread operator (...) "espalha" os elementos do array como argumentos para a função.
const maiorNumeroFacil = Math.max(...numeros);
console.log("\n--- Bônus: Usando Math.max() ---");
console.log(`O maior número é ${maiorNumeroFacil}`);
*/
// ● Crie uma função que:
// ○ Receba um array de números e
// ○ Retorne um novo array com o último e o primeiro número do array recebido divididos por dois

/**
 * Recebe um array de números e retorna um novo array contendo o primeiro
 * e o último elemento do array original, cada um dividido por 2.
 * @param {number[]} arrayDeNumeros - O array de números a ser processado.
 * @returns {number[]} - Um novo array com dois elementos.
 */
function processarPrimeiroEUltimo(arrayDeNumeros) {
    // 1. Acessa o primeiro número do array (sempre no índice 0).
    const primeiroNumero = arrayDeNumeros[0];

    // 2. Acessa o último número do array.
    // O índice do último elemento é sempre o tamanho do array - 1.
    const ultimoNumero = arrayDeNumeros[arrayDeNumeros.length - 1];

    // 3. Cria o novo array com os valores divididos por 2.
    // A ordem no novo array será [primeiro/2, ultimo/2].
    const novoArray = [primeiroNumero / 2, ultimoNumero / 2];
    
    // 4. Retorna o novo array.
    return novoArray;
}


// --- Testando a função ---

// Criamos um array de exemplo para passar para a nossa função.
const meusNumeros = [20, 35, 48, 50, 62, 70, 88, 100];

// Chamamos a função e guardamos o resultado retornado por ela.
const resultado = processarPrimeiroEUltimo(meusNumeros);

// Imprimimos tudo no console para verificar se está correto.
console.log("--- Testando a função ---");
console.log("Array original:", meusNumeros);
console.log("Primeiro número do original:", meusNumeros[0]); // 20
console.log("Último número do original:", meusNumeros[meusNumeros.length - 1]); // 100
console.log("Novo array com (primeiro/2) e (ultimo/2):", resultado); // [10, 50]
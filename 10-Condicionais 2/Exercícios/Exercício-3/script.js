// --- Exercício 1 Refatorado com Ternário ---

/**
 * Verifica se um número é par ou ímpar usando o operador ternário.
 * @param {number} numero - O número a ser verificado.
 * @returns {string} - A mensagem indicando se o número é par ou ímpar.
 */
function verificaParComTernario(numero) {
    // condição ? expressão se true : expressão se false
    const resultado = (numero % 2 === 0) ? "O número é par" : "O número é ímpar";
    return resultado;
}

console.log("--- Refatorando Exercício 1 (Verificar se é par) ---");
console.log("Verificando o número 10:", verificaParComTernario(10));
console.log("Verificando o número 7:", verificaParComTernario(7));


// --- Exercício 2 Refatorado com Ternário ---

/**
 * Analisa as condições de uma pessoa usando operadores ternários.
 * @param {number} idade - A idade da pessoa.
 * @param {boolean} terminouEnsinoMedio - True se terminou o ensino médio.
 * @param {boolean} cursandoFaculdade - True se está cursando faculdade.
 */
function verificarElegibilidadeComTernario(idade, terminouEnsinoMedio, cursandoFaculdade) {
    console.log("\n--- Refatorando Exercício 2 (Elegibilidade) ---");

    // 1. Verifica se a pessoa tem 18 anos ou mais.
    const resultadoIdade = (idade >= 18) 
        ? "Afirmação 'maior de 18 anos' é: VERDADEIRA" 
        : "Afirmação 'maior de 18 anos' é: FALSA";
    console.log(resultadoIdade);

    // 2. Verifica se a pessoa terminou o ensino médio.
    const resultadoEM = (terminouEnsinoMedio)
        ? "Afirmação 'terminou o ensino médio' é: VERDADEIRA"
        : "Afirmação 'terminou o ensino médio' é: FALSA";
    console.log(resultadoEM);

    // 3. Verifica se a pessoa NÃO está cursando alguma faculdade.
    const resultadoFacul = (!cursandoFaculdade)
        ? "Afirmação 'NÃO está cursando faculdade' é: VERDADEIRA"
        : "Afirmação 'NÃO está cursando faculdade' é: FALSA";
    console.log(resultadoFacul);
}


// Testando a função refatorada com um cenário
console.log("\nTestando com o cenário: (20, true, true)");
verificarElegibilidadeComTernario(20, true, true);
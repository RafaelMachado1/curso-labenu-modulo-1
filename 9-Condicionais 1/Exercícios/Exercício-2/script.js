/**
 * Analisa as condições de uma pessoa baseadas na idade, ensino médio e faculdade.
 * @param {number} idade - A idade da pessoa.
 * @param {boolean} terminouEnsinoMedio - True se terminou o ensino médio, false caso contrário.
 * @param {boolean} cursandoFaculdade - True se está cursando faculdade, false caso contrário.
 */
function verificarElegibilidade(idade, terminouEnsinoMedio, cursandoFaculdade) {
    console.log("--- Analisando Candidato ---");

    // 1. Verifica se a pessoa tem 18 anos ou mais.
    if (idade >= 18) {
        console.log("Afirmação 'maior de 18 anos' é: VERDADEIRA");
    } else {
        console.log("Afirmação 'maior de 18 anos' é: FALSA");
    }

    // 2. Verifica se a pessoa terminou o ensino médio.
    // Para booleanos, `if (terminouEnsinoMedio)` é o mesmo que `if (terminouEnsinoMedio === true)`.
    if (terminouEnsinoMedio) {
        console.log("Afirmação 'terminou o ensino médio' é: VERDADEIRA");
    } else {
        console.log("Afirmação 'terminou o ensino médio' é: FALSA");
    }

    // 3. Verifica se a pessoa NÃO está cursando alguma faculdade.
    // Usamos o operador de negação `!` para inverter o valor booleano.
    // `if (!cursandoFaculdade)` é o mesmo que `if (cursandoFaculdade === false)`.
    if (!cursandoFaculdade) {
        console.log("Afirmação 'NÃO está cursando faculdade' é: VERDADEIRA");
    } else {
        console.log("Afirmação 'NÃO está cursando faculdade' é: FALSA");
    }
}

// --- Testando a função com diferentes cenários ---

// Cenário 1: Pessoa com 25 anos, terminou o EM, mas não está na faculdade.
console.log("Cenário 1: (25, true, false)");
verificarElegibilidade(25, true, false);
// Resultado esperado: VERDADEIRA, VERDADEIRA, VERDADEIRA

console.log("\n----------------------------------\n");

// Cenário 2: Pessoa com 17 anos, não terminou o EM, e não está na faculdade.
console.log("Cenário 2: (17, false, false)");
verificarElegibilidade(17, false, false);
// Resultado esperado: FALSA, FALSA, VERDADEIRA

console.log("\n----------------------------------\n");

// Cenário 3: Pessoa com 20 anos, terminou o EM, e está na faculdade.
console.log("Cenário 3: (20, true, true)");
verificarElegibilidade(20, true, true);
// Resultado esperado: VERDADEIRA, VERDADEIRA, FALSA
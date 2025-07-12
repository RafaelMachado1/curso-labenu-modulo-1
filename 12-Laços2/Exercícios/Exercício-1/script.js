// Solução do Exercício 1 - Comparando 4 abordagens com laços.

// Array com os dados dos jogadores e seus gols por temporada.
const golsPorJogador = [
    [13, 15, 25, 34, 35], // Jogador 1
    [30, 48, 30, 12, 47], // Jogador 2
    [22, 19, 28, 26, 31], // Jogador 3
    [18, 20, 21, 17, 25], // Jogador 4
    [41, 33, 29, 38, 40]  // Jogador 5
];


// --- VERSÃO 1: COM 'FOR...OF' (ATIVA E RECOMENDADA) ---

/**
 * Percorre um array de jogadores usando 'for...of' e imprime o relatório.
 * 'for...of' itera diretamente sobre os VALORES do array. É a forma mais
 * moderna, legível e segura para percorrer arrays.
 * @param {number[][]} jogadores - O array de arrays com os gols.
 */
function exibirRelatorioComForOf(jogadores) {
    console.log("--- VERSÃO 1: Solução com 'for...of' (Moderna e Recomendada) ---");

    let numeroDoJogador = 1;

    for (const golsDoJogador of jogadores) {
        const golsFormatados = golsDoJogador.join(', ');
        const linhaSaida = `Jogador ${numeroDoJogador}: ${golsFormatados}`;
        console.log(linhaSaida);
        numeroDoJogador++;
    }
}

// Invocando a função moderna para ser executada.
exibirRelatorioComForOf(golsPorJogador);

//--------------------------------------------------------------------------------------------------------------------------
/* --- VERSÃO 2: COM 'FOR' TRADICIONAL (COMENTADA PARA ESTUDO) ---

/**
 * Percorre um array de jogadores usando o laço 'for' tradicional, controlado por um índice.
 * @param {number[][]} jogadores - O array de arrays com os gols.
 */
/*
function exibirRelatorioComForTradicional(jogadores) {
    console.log("--- VERSÃO 2: Solução com 'for' tradicional ---");

    for (let i = 0; i < jogadores.length; i++) {
        const golsDoJogador = jogadores[i];
        const golsFormatados = golsDoJogador.join(', ');
        const linhaSaida = `Jogador ${i + 1}: ${golsFormatados}`;
        console.log(linhaSaida);
    }
}

// exibirRelatorioComForTradicional(golsPorJogador);
*/

//--------------------------------------------------------------------------------------------------------------------------

/* --- VERSÃO 3: COM LAÇO ANINHADO EXPLÍCITO (COMENTADA PARA ESTUDO) ---

/**
 * Demonstra como o resultado seria construído manualmente sem o método .join(),
 * usando um laço 'for' dentro de outro.
 * @param {number[][]} jogadores - O array de arrays com os gols.
 */
/*
function exibirRelatorioComLacoAninhadoExplicito(jogadores) {
    console.log("--- VERSÃO 3: Solução com Laço Aninhado Explícito ---");

    for (let i = 0; i < jogadores.length; i++) {
        const golsDoJogador = jogadores[i];
        let golsString = "";

        for (let j = 0; j < golsDoJogador.length; j++) {
            golsString += golsDoJogador[j];
            if (j < golsDoJogador.length - 1) {
                golsString += ", ";
            }
        }
        const linhaSaida = `Jogador ${i + 1}: ${golsString}`;
        console.log(linhaSaida);
    }
}

// exibirRelatorioComLacoAninhadoExplicito(golsPorJogador);
*/

//------------------------------------------------------------------------------------------------------------

/* --- VERSÃO 4: COM 'FOR...IN' (COMENTADA E NÃO RECOMENDADA PARA ARRAYS) ---

/**
 * Demonstra o uso de 'for...in' e explica por que não é a abordagem correta para arrays.
 * @param {number[][]} jogadores - O array de arrays com os gols.
 */
/*
function exibirRelatorioComForIn(jogadores) {
    console.log("\n--- VERSÃO 4: Solução com 'for...in' (NÃO RECOMENDADO PARA ARRAYS) ---");

    // ATENÇÃO: A abordagem 'for...in' não é recomendada para iterar sobre arrays.
    // O 'for...in' foi projetado para iterar sobre as CHAVES (propriedades) de um objeto.
    //
    // Por que evitar em arrays?
    // 1. Itera sobre ÍNDICES como STRINGS: 'indiceJogador' será "0", "1", "2", etc., e não um número.
    //    Isso pode causar bugs se você tentar fazer operações matemáticas sem converter.
    // 2. A ORDEM NÃO É GARANTIDA: Embora os navegadores modernos geralmente mantenham a ordem,
    //    a especificação do JavaScript não garante que os índices serão retornados em ordem numérica.
    // 3. PODE INCLUIR PROPRIEDADES INDESEJADAS: Se o protótipo do Array for modificado
    //    (uma má prática), o 'for...in' pode iterar sobre essas novas propriedades também.
    
    for (const indiceJogador in jogadores) {
        const golsDoJogador = jogadores[indiceJogador];
        const golsFormatados = golsDoJogador.join(', ');
        const numeroDoJogador = Number(indiceJogador) + 1; // Conversão necessária!
        const linhaSaida = `Jogador ${numeroDoJogador}: ${golsFormatados}`;
        console.log(linhaSaida);
    }
}

// exibirRelatorioComForIn(golsPorJogador);
*/
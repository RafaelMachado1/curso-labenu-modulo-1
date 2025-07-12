// Crie um array com 5 strings.
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

/**
 * Percorre um array de países usando for...of e imprime um ranking formatado.
 * @param {string[]} paises - O array de strings a ser percorrido.
 */
function imprimirRankingComForOf(paises) {
    console.log("--- Ranking dos Maiores Países em Área ---");

    // O laço 'for...of' não fornece um índice.
    // Portanto, criamos nossa própria variável para contar a posição no ranking.
    let posicaoNoRanking = 1;

    // O laço 'for...of' itera diretamente sobre os VALORES do array.
    // A cada iteração, a const 'pais' recebe um dos valores: "Rússia", depois "Canadá", etc.
    for (const pais of paises) {
        
        // Usamos nosso contador manual e o valor do país para formatar a saída.
        const saidaFormatada = `${posicaoNoRanking} - ${pais}`;
        
        console.log(saidaFormatada);

        // Incrementamos nosso contador para a próxima iteração.
        posicaoNoRanking++;
    }
}

// Invocando a função para executar o programa.
imprimirRankingComForOf(maioresPaises);
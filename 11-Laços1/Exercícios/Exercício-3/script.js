// Crie um array com 5 strings.
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

/**
 * Percorre um array de países e imprime um ranking formatado no console.
 * @param {string[]} paises - O array de strings a ser percorrido.
 */
function imprimirRanking(paises) {
    console.log("--- Ranking dos Maiores Países em Área ---");

    // O laço 'for' percorrerá o array do início ao fim.
    // 'i' é o nosso contador e também o índice do array.
    for (let i = 0; i < paises.length; i++) {
        // Acessamos o país atual usando o índice: paises[i]
        // O número do ranking é o índice + 1 (pois o índice começa em 0).
        // Usamos template strings para formatar a saída facilmente.
        const saidaFormatada = `${i + 1} - ${paises[i]}`;
        
        console.log(saidaFormatada);
    }
}

// Invocando a função para executar o programa.
imprimirRanking(maioresPaises);
/**
 * Pede um número ao usuário e imprime sua tabuada de 1 a 10 usando for...in.
 */
function gerarTabuadaComForIn() {
    // 1. Pede um número para o usuário.
    const inputUsuario = prompt("Digite um número para ver a sua tabuada:");
    
    // 2. Converte a entrada para o tipo Number.
    const numero = Number(inputUsuario);

    // 3. Valida a entrada.
    if (!inputUsuario || isNaN(numero)) {
        console.error("Entrada inválida. Por favor, recarregue a página e digite um número válido.");
    } else {
        console.log(`--- Tabuada do ${numero} (usando for...in) ---`);

        // TRUQUE: Para usar for...in, precisamos de um objeto ou array para iterar.
        // Vamos criar um array com os números de 1 a 10.
        const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        // O laço 'for...in' vai iterar sobre os ÍNDICES do array 'multiplicadores'.
        // A variável 'indice' receberá "0", "1", "2", etc., como strings.
        for (const indice in multiplicadores) {
            
            // Acessamos o valor real do multiplicador usando o índice.
            const multiplicador = multiplicadores[indice];
            
            // Calculamos e imprimimos o resultado.
            const resultado = numero * multiplicador;
            console.log(resultado);
        }
    }
}

// Invocando a função para iniciar o programa.
gerarTabuadaComForIn();
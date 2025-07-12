/**
 * Pede um número ao usuário e imprime sua tabuada de 1 a 10.
 */
function gerarTabuada() {
    // 1. Pede um número para o usuário.
    const inputUsuario = prompt("Digite um número para ver a sua tabuada:");
    
    // 2. Converte a entrada para o tipo Number.
    const numero = Number(inputUsuario);

    // 3. Valida a entrada: verifica se o usuário cancelou ou se o valor não é um número.
    if (!inputUsuario || isNaN(numero)) {
        console.error("Entrada inválida. Por favor, recarregue a página e digite um número válido.");
    } else {
        // 4. Se a entrada for válida, imprime um cabeçalho e inicia o laço.
        console.log(`--- Tabuada do ${numero} ---`);

        // O laço 'for' é ideal aqui.
        // - Começa com o contador `i` em 1.
        // - Continua enquanto `i` for menor ou igual a 10.
        // - Incrementa `i` em 1 a cada iteração.
        for (let i = 1; i <= 10; i++) {
            // Imprime o resultado da multiplicação do número pelo contador `i`.
            console.log(numero * i);
        }
    }
}

// Invocando a função para iniciar o programa.
gerarTabuada();
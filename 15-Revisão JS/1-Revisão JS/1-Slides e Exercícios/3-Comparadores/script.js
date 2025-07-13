/**
 * Função principal para executar a lógica do exercício 3 da revisão.
 */
function iniciarJogoDeAdivinhacao() {
    // ● Sorteie um número aleatório entre 1 e 10
    // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo).
    // Multiplicamos por 10 para ter um número de 0 a 9.99...
    // Math.floor() arredonda para baixo, resultando em um inteiro de 0 a 9.
    // Somamos 1 para obter o intervalo desejado de 1 a 10.
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;

    // ● Peça para o usuário inserir um número de 1 a 10
    const inputUsuario = prompt("Tente adivinhar o número! Digite um valor de 1 a 10:");
    const numeroDoUsuario = Number(inputUsuario);

    // Validação da entrada do usuário
    if (!inputUsuario || isNaN(numeroDoUsuario)) {
        console.error("Entrada inválida. Por favor, recarregue a página e insira um número.");
        return;
    }

    // ● Imprima no console os dois números dizendo se o que foi digitado
    // pelo usuário é menor, maior ou igual ao sorteado
    console.log(`Você digitou o número: ${numeroDoUsuario}`);
    console.log(`O número sorteado foi: ${numeroSorteado}`);
    console.log("---------------------------------------");

    // Estrutura condicional para comparar os números
    if (numeroDoUsuario === numeroSorteado) {
        console.log("PARABÉNS! O seu número é IGUAL ao sorteado. Você acertou!");
    } else if (numeroDoUsuario > numeroSorteado) {
        console.log(`O seu número (${numeroDoUsuario}) é MAIOR que o sorteado (${numeroSorteado}).`);
    } else {
        // Se não é igual nem maior, só pode ser menor.
        console.log(`O seu número (${numeroDoUsuario}) é MENOR que o sorteado (${numeroSorteado}).`);
    }
}

// Chamando a função para iniciar o programa.
iniciarJogoDeAdivinhacao();
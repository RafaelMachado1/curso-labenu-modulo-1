/**
 * Simula a venda de coxinhas usando um laço while.
 */
function venderCoxinhas() {
    // Cria uma let conta para guardar o valor total.
    let conta = 0;

    // Pergunta inicial para o usuário.
    let resposta = prompt("Você deseja comer uma coxinha? (Digite 'S' para sim ou 'N' para não)");

    // O laço while continua enquanto a resposta do usuário for "S" (ignorando maiúsculas/minúsculas).
    // O método toUpperCase() garante que tanto 's' quanto 'S' sejam aceitos.
    while (resposta && resposta.toUpperCase() === "S") {
        // Adiciona R$2.50 ao valor total.
        conta += 2.50;

        // Pergunta novamente se o usuário deseja continuar.
        // A resposta a esta pergunta determinará se o laço executa mais uma vez.
        resposta = prompt(`Sua conta está em R$ ${conta.toFixed(2)}. Deseja comer mais uma coxinha? (S/N)`);
    }

    // Quando a resposta não for sim (ou o usuário cancelar), o laço termina.
    // Imprimimos o valor total da conta.
    // O método toFixed(2) formata o número para ter sempre duas casas decimais.
    console.log(`O valor total da sua conta é: R$ ${conta.toFixed(2)}.`);
}

// Invocando a função para iniciar o programa.
venderCoxinhas();
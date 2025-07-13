/**
 * Função principal para executar a lógica do exercício 1 da revisão.
 */
function aplicarDescontoMaluco() {
    // ● Crie uma variável para guardar o nome de um produto e peça para o usuário inserir esse nome
    const nomeProduto = prompt("Digite o nome do produto:");

    // ● Crie uma variável para guardar o preço de um produto e peça para o usuário inserir esse valor
    // Usamos 'let' aqui, pois o preço será modificado.
    let precoProdutoInput = prompt(`Digite o preço do produto "${nomeProduto}":`);

    // Convertemos a entrada (que é uma string) para um número de ponto flutuante (com decimais).
    let precoProduto = parseFloat(precoProdutoInput);

    // Verificação de segurança: checa se a entrada é um número válido.
    if (!nomeProduto || isNaN(precoProduto)) {
        console.error("Entrada inválida. Por favor, recarregue a página e insira um nome e um preço válidos.");
        return; // Encerra a função se a entrada for inválida.
    }
    
    // Imprimindo os valores originais para o usuário ver.
    // Usamos .toFixed(2) para formatar o preço com duas casas decimais, como é comum em moeda.
    console.log(`Produto inserido: ${nomeProduto}`);
    console.log(`Preço original: R$ ${precoProduto.toFixed(2)}`);
    console.log("---------------------------------------");

    // ● O GERENTE FICOU DOIDO! Dê um desconto de 1 real no preço do produto,
    // guardando o novo preço na mesma variável
    precoProduto = precoProduto - 1; // ou de forma mais curta: precoProduto -= 1;

    // Imprimindo o resultado final.
    console.log(`O GERENTE FICOU DOIDO! Novo preço com desconto de R$ 1,00:`);
    console.log(`Preço final do ${nomeProduto}: R$ ${precoProduto.toFixed(2)}`);
}

// Chamando a função para iniciar o programa.
aplicarDescontoMaluco();
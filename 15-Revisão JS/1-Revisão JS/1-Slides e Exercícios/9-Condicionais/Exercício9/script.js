/**
 * Função principal para executar a lógica do exercício 9 da revisão.
 */
function verificarParOuImpar() {
    // ● Receba um número do usuário
    const inputUsuario = prompt("Digite um número para verificar se é par ou ímpar:");
    const numero = Number(inputUsuario);

    // Validação da entrada do usuário
    if (!inputUsuario || isNaN(numero)) {
        console.error("Entrada inválida. Por favor, recarregue a página e insira um número.");
        return;
    }

    console.log(`Número digitado: ${numero}`);
    console.log("-----------------------");

    // A condição para um número ser par é que o resto da sua divisão por 2 seja igual a 0.
    // Usamos o operador de módulo (%) para obter o resto.
    
    // ○ Se for par, imprima: é par
    if (numero % 2 === 0) {
        console.log("é par");
    } 
    // ○ Senão, imprima: é impar
    else {
        console.log("é impar");
    }
}

// Chamando a função para iniciar o programa.
verificarParOuImpar();
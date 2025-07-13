/**
 * Função principal para executar a lógica do exercício 4 da revisão.
 */
function verificarEntradaBrinquedo() {
    console.log("--- Sistema de Verificação de Entrada ---");

    // 1. Coletando os dados do usuário
    const inputIdade = prompt("Qual é a sua idade?");
    const inputAltura = prompt("Qual é a sua altura em metros? (Ex: 1.75)");
    const inputProblemaCardiaco = prompt("Você tem algum problema cardíaco? (Responda 'sim' ou 'nao')");

    // 2. Convertendo os dados para os tipos corretos
    const idade = Number(inputIdade);
    const altura = parseFloat(inputAltura);
    // Convertendo a resposta 'sim'/'nao' para um booleano true/false
    const temProblemaCardiaco = inputProblemaCardiaco.toLowerCase().trim() === 'sim';
    
    // 3. Validação das entradas
    if (isNaN(idade) || isNaN(altura) || !inputProblemaCardiaco) {
        console.error("Uma ou mais entradas foram inválidas. Por favor, recarregue a página e tente novamente.");
        return;
    }

    console.log(`Dados fornecidos: Idade=${idade}, Altura=${altura}, Problema Cardíaco=${temProblemaCardiaco}`);
    console.log("---------------------------------------");

    // 4. Verificando as condições com o operador E (&&)
    // Todas as três condições precisam ser verdadeiras para que o bloco if seja executado.
    if (idade > 18 && altura > 1.60 && !temProblemaCardiaco) {
        console.log("✅ Acesso PERMITIDO! Divirta-se no brinquedo radical!");
    } else {
        console.log("❌ Acesso NEGADO. Você não atende a todos os requisitos de segurança.");
    }
}

// Chamando a função para iniciar o programa.
verificarEntradaBrinquedo();
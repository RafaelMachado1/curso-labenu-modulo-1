/**
 * Função principal para executar a lógica do exercício 8 da revisão.
 */
function gerenciarPessoas() {
    // ● Crie um objeto que represente uma pessoa. Essa pessoa
    // precisa ter nome, idade e gênero musical preferido
    const pessoa1 = {
        nome: "Ana",
        idade: 28,
        generoMusical: "Rock"
    };

    // ● Imprima no console as propriedades desse objeto,
    // seguindo o modelo abaixo:
    // "O nome da pessoa é ___, ela tem ___ anos e gosta muito de ___."
    // Usamos template literals (crases) para facilitar a inserção das variáveis.
    console.log(`O nome da pessoa é ${pessoa1.nome}, ela tem ${pessoa1.idade} anos e gosta muito de ${pessoa1.generoMusical}.`);
    console.log("---------------------------------------");
    
    // ● Crie uma nova pessoa, com mesma idade e gênero
    // musical, mas nome diferente
    // A melhor forma de fazer isso é usando o spread operator (...),
    // que copia todas as propriedades de um objeto para um novo.
    // Depois, nós simplesmente sobrescrevemos a propriedade 'nome'.
    const pessoa2 = {
        ...pessoa1, // Copia todas as chaves e valores de pessoa1
        nome: "Carlos" // Sobrescreve apenas o nome
    };

    // Imprimindo os dois objetos para comparar
    console.log("Objeto da primeira pessoa:");
    console.log(pessoa1);
    
    console.log("\nObjeto da segunda pessoa (cópia com nome alterado):");
    console.log(pessoa2);
}

// Chamando a função para iniciar o programa.
gerenciarPessoas();
// Objeto fornecido para o exercício
const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
};

/**
 * Função que gera e imprime a apresentação da professora.
 */
function apresentarProfessora() {
    // ● Dado o objeto do slide anterior, imprima:
    
    // 1. Construindo a parte sobre as aulas usando o operador ternário
    const statusFront = prof.aulasFront ? "dou" : "não dou";
    const statusBack = prof.aulasBack ? "dou" : "não dou";
    
    // 2. Construindo a lista de jogos favoritos usando um laço for
    let listaJogos = "";
    for (let i = 0; i < prof.jogosFavoritos.length; i++) {
        // A cada iteração, adicionamos uma linha formatada à nossa string
        // Usamos \n para criar uma nova linha
        listaJogos += `\n${i + 1}) ${prof.jogosFavoritos[i]}`;
    }

    // 3. Montando a apresentação completa com template literals
    const apresentacao = `
Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
Eu ${statusFront} aula de front e ${statusBack} aula de back.
Meus jogos favoritos são:${listaJogos}
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}.
    `;

    // 4. Imprimindo a apresentação no console
    console.log(apresentacao);

    // ● Faça a Chijo contar uma piada ruim
    console.log("\nE agora, uma piada...");
    // Para chamar um método (uma função dentro de um objeto), usamos parênteses.
    prof.contaPiada();
}

// Chamando a função para iniciar o programa.
apresentarProfessora();
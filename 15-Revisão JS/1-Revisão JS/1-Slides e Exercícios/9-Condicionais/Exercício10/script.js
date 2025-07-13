/**
 * Função principal para executar a lógica do exercício 10 da revisão.
 */
function identificarSomDoBichinho() {
    // ● Receba do usuário o nome de um bichinho:
    const inputUsuario = prompt("Digite o nome de um bichinho (cachorro, gato, vaca):");

    // Validação: se o usuário cancelou ou não digitou nada.
    if (!inputUsuario) {
        console.log("Nenhum bichinho foi digitado. Tente novamente.");
        return;
    }

    // Normalizamos a entrada para minúsculas e sem espaços para tornar a comparação mais robusta.
    const bichinho = inputUsuario.toLowerCase().trim();

    // --- Versão com if/else if/else ---
    console.log("--- Resultado com if/else if/else ---");
    if (bichinho === "cachorro") {
        console.log("Au au");
    } else if (bichinho === "gato") {
        console.log("Miau");
    } else if (bichinho === "vaca") {
        console.log("Muuu");
    } else {
        console.log("sem barulho reconhecido :(");
    }

    console.log("---------------------------------------");

    // --- Versão com switch case ---
    console.log("--- Resultado com switch case ---");
    switch (bichinho) {
        case "cachorro":
            console.log("Au au");
            break;
        case "gato":
            console.log("Miau");
            break;
        case "vaca":
            console.log("Muuu");
            break;
        default:
            console.log("sem barulho reconhecido :(");
            break;
    }
}

// Chamando a função para iniciar o programa.
identificarSomDoBichinho();
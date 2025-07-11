/**
 * Solicita a nacionalidade do usuário e a verifica contra uma lista
 * predefinida, utilizando uma estrutura switch case.
 */
function verificarNacionalidadeComSwitch() {
    // 1. Recebe do usuário sua nacionalidade via prompt.
    const inputUsuario = prompt("Escreva aqui sua nacionalidade.");

    // Tratamento de caso: se o usuário clicar em "cancelar" ou não digitar nada.
    if (!inputUsuario) {
        console.log("Nenhuma nacionalidade foi inserida ou a operação foi cancelada.");
        return; // Encerra a função.
    }

    // 2. Normaliza a string (converte para minúsculas e remove espaços)
    // para que o switch funcione independentemente de como o usuário digitou.
    const nacionalidade = inputUsuario.toLowerCase().trim();

    // 3. Cria a estrutura switch case para verificar a nacionalidade.
    switch (nacionalidade) {
        case 'brasileira':
            console.log("Sua nacionalidade é: brasileira");
            break; // O break impede que o código continue executando os próximos casos.

        case 'argentina':
            console.log("Sua nacionalidade é: argentina");
            break;

        case 'uruguaia':
            console.log("Sua nacionalidade é: uruguaia");
            break;

        case 'chilena':
            console.log("Sua nacionalidade é: chilena");
            break;

        case 'colombiana':
            console.log("Sua nacionalidade é: colombiana");
            break;

        default:
            // O 'default' funciona como o 'else' final. É executado se nenhum
            // dos casos ('case') acima for verdadeiro.
            console.log("nacionalidade não encontrada");
            break;
    }
}

// Invocando a função para iniciar o programa
verificarNacionalidadeComSwitch();
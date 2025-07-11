/**
 * Solicita a nacionalidade do usuário e a verifica contra uma lista predefinida.
 */
function verificarNacionalidade() {
    // 1. Recebe do usuário sua nacionalidade via prompt.
    const inputUsuario = prompt("Escreva aqui sua nacionalidade.");

    // Tratamento de caso: se o usuário clicar em "cancelar" (retorna null) ou não digitar nada.
    if (!inputUsuario) {
        console.log("Nenhuma nacionalidade foi inserida ou a operação foi cancelada.");
        return; // Encerra a função para evitar erros.
    }

    // 2. Normaliza a string para lidar com maiúsculas/minúsculas e espaços.
    // .toLowerCase() -> Converte tudo para minúsculas.
    // .trim() -> Remove espaços em branco no início e no final.
    const nacionalidade = inputUsuario.toLowerCase().trim();

    // 3. Cria a estrutura de if/else if/else para verificar a nacionalidade.
    if (nacionalidade === 'brasileira') {
        console.log("Sua nacionalidade é: brasileira");

    } else if (nacionalidade === 'argentina') {
        console.log("Sua nacionalidade é: argentina");

    } else if (nacionalidade === 'uruguaia') {
        console.log("Sua nacionalidade é: uruguaia");

    } else if (nacionalidade === 'chilena') {
        console.log("Sua nacionalidade é: chilena");

    } else if (nacionalidade === 'colombiana') {
        console.log("Sua nacionalidade é: colombiana");

    } else {
        // 4. Caso nenhuma das condições acima seja verdadeira.
        console.log("Nacionalidade não encontrada.");
    }
}

// Invocando a função para iniciar o programa
verificarNacionalidade();
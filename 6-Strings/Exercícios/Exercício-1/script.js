/**
 * Exercício 1: Comidas Favoritas
 * 
 * Esta função engloba toda a lógica do exercício.
 * Ela pede ao usuário seu nome e três comidas favoritas,
 * e então imprime uma mensagem formatada no console.
 */
function imprimirComidasFavoritas() {
    
    // 1. Perguntar o nome e as três comidas favoritas
    const nomeDoUsuario = prompt("Olá! Qual é o seu nome?");
    const comida1 = prompt("Digite sua primeira comida favorita:");
    const comida2 = prompt("Agora, a segunda comida favorita:");
    const comida3 = prompt("E, por último, a terceira comida favorita:");

    // 2. Montar a mensagem usando Template String e quebras de linha (\n)
    // Isso garante que todo o texto seja uma única string.
    const mensagemFormatada = `Estas são as comidas favoritas de ${nomeDoUsuario}:
- ${comida1}
- ${comida2}
- ${comida3}`;
    
    // 3. Imprimir a mensagem formatada com um único console.log()
    console.log(mensagemFormatada);
}

// 4. Invocar (chamar) a função para que o programa seja executado
imprimirComidasFavoritas();
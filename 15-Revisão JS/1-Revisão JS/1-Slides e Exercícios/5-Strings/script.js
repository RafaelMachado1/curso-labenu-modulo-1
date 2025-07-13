/**
 * Função principal para executar a lógica do exercício 5 da revisão.
 */
function manipularFrase() {
    // Dada a frase " Hoje vou comer cenoura, ebaaa "
    const fraseOriginal = " Hoje vou comer cenoura, ebaaa ";
    let fraseProcessada = fraseOriginal; // Usaremos 'let' para ir atualizando a frase

    console.log("--- Manipulação de Strings ---");

    // ● Imprima a frase inicial juntamente com seu tamanho
    console.log(`Frase original: "${fraseProcessada}"`);
    console.log(`Tamanho original: ${fraseProcessada.length}`);
    console.log("---------------------------------");

    // ● Retire os espaços do início e do fim
    fraseProcessada = fraseProcessada.trim();
    console.log(`Frase após .trim(): "${fraseProcessada}"`);
    console.log("---------------------------------");
    
    // ● Faça com que possua apenas letras minúsculas
    fraseProcessada = fraseProcessada.toLowerCase();
    console.log(`Frase após .toLowerCase(): "${fraseProcessada}"`);
    console.log("---------------------------------");
    
    // ● Verifique se as palavras comer e batata estão presentes
    // O método .includes() retorna true ou false.
    console.log("Verificação antes da substituição:");
    console.log(`A frase contém "comer"? ${fraseProcessada.includes("comer")}`);
    console.log(`A frase contém "batata"? ${fraseProcessada.includes("batata")}`);
    console.log("---------------------------------");
    
    // ● Substitua cenoura por batata
    fraseProcessada = fraseProcessada.replace("cenoura", "batata");
    console.log(`Frase após .replace("cenoura", "batata"): "${fraseProcessada}"`);
    console.log("---------------------------------");
    
    // ● Verifique novamente se possui as palavras comer e batata
    console.log("Verificação após a substituição:");
    console.log(`A nova frase contém "comer"? ${fraseProcessada.includes("comer")}`);
    console.log(`A nova frase contém "batata"? ${fraseProcessada.includes("batata")}`);
}

// Chamando a função para iniciar o programa.
manipularFrase();
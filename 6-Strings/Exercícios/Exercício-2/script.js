// String original fornecida no exercício
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/**
 * Função que manipula uma string de acordo com os passos do exercício.
 * @param {string} texto - A string a ser processada.
 */
function manipularString(texto) {
    console.log("--- Processando a String ---");
    console.log(`String original: "${texto}"`);
    
    // b) Imprimir a quantidade de caracteres ANTES da remoção
    const tamanhoOriginal = texto.length;
    console.log(`1. Tamanho original (com espaços): ${tamanhoOriginal} caracteres.`);
    
    // a) Remover o excesso de espaços no final da string
    // O método trimEnd() faz exatamente isso.
    const textoSemEspacos = texto.trimEnd();

    // b) Imprimir a quantidade de caracteres DEPOIS da remoção
    const tamanhoFinal = textoSemEspacos.length;
    console.log(`2. Tamanho após remover os espaços: ${tamanhoFinal} caracteres.`);
    
    // c) Substituir os traços pela palavra "sticioso"
    // O método replace() encontra a primeira ocorrência e a substitui.
    const textoSubstituido = textoSemEspacos.replace('________', 'sticioso');
    
    console.log(`3. String final após a substituição: "${textoSubstituido}"`);
    console.log("----------------------------");
}

// Invocando a função e passando a string original como parâmetro
manipularString(minhaString);
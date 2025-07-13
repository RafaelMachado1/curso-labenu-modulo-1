// Objeto disponibilizado para o exercício
const dadosUsuario = {
    nome: "Astrodev",
    profissao: "Dev das Estrelas",
    username: "astrodev_labenu",
    senha: "melhordetodos"
};


// ====================================================================================
// FUNÇÃO 1: TRANSFORMAR VALORES PARA CAIXA ALTA
// ====================================================================================

// --- VERSÃO MODERNA COM Object.entries().map() (ATIVA) ---
// Esta abordagem é declarativa: descrevemos O QUE queremos como resultado.
// É o padrão da indústria por ser mais concisa e promover imutabilidade.
function transformarEmCaixaAlta(objeto) {
    // Passo 1: Converter o objeto em um array de pares [chave, valor].
    // Ex: [['nome', 'Astrodev'], ['profissao', 'Dev das Estrelas'], ...]
    const arrayDePares = Object.entries(objeto);

    // Passo 2: Usar .map() para criar um NOVO array, transformando cada par.
    // [chave, valor] é uma "desestruturação" para acessar os itens do par facilmente.
    const arrayModificado = arrayDePares.map(([chave, valor]) => {
        return [chave, valor.toUpperCase()];
    });

    // Passo 3: Converter o novo array de pares de volta para um objeto.
    return Object.fromEntries(arrayModificado);
}

/*
// --- VERSÃO CLÁSSICA COM for...in (COMENTADA PARA ESTUDO) ---
// Esta abordagem é imperativa: damos instruções passo a passo de COMO
// construir o novo objeto. É mais fácil para iniciantes, mas mais longa e verbosa.
function transformarEmCaixaAlta(objeto) {
    // Passo 1: Criar um objeto vazio para guardar os resultados.
    // É crucial criar um novo objeto para não modificar o original (imutabilidade).
    const novoObjeto = {};

    // Passo 2: Iterar sobre cada CHAVE ('nome', 'profissao', etc.) do objeto.
    for (const chave in objeto) {
        // Passo 3: Em cada iteração, pegar o valor, transformá-lo e atribuí-lo
        // à mesma chave no NOVO objeto.
        novoObjeto[chave] = objeto[chave].toUpperCase();
    }

    // Passo 4: Retornar o objeto que foi construído manualmente.
    return novoObjeto;
}
*/


// ====================================================================================
// FUNÇÃO 2: FORMATAR O OBJETO COMO TEXTO
// ====================================================================================

// --- VERSÃO MODERNA COM Object.entries().map().join() (ATIVA) ---
function formatarComoTexto(objeto) {
    // Passo 1: Converter o objeto em um array de pares [chave, valor].
    const arrayDePares = Object.entries(objeto);

    // Passo 2: Usar .map() para transformar cada par [chave, valor] em uma STRING formatada.
    const arrayDeFrases = arrayDePares.map(([chave, valor]) => {
        return `O valor da propriedade ${chave} é ${valor}.`;
    });
    // Neste ponto, arrayDeFrases é um array de strings: [ "frase 1", "frase 2", ... ]

    // Passo 3: Usar .join('\n') para juntar todas as strings do array em um
    // único texto, usando a quebra de linha (\n) como separador.
    return arrayDeFrases.join('\n');
}

/*
// --- VERSÃO CLÁSSICA COM for...in (COMENTADA PARA ESTUDO) ---
function formatarComoTexto(objeto) {
    // Passo 1: Criar uma string vazia para ir acumulando o texto.
    let textoFinal = "";

    // Passo 2: Iterar sobre cada CHAVE do objeto.
    for (const chave in objeto) {
        // Passo 3: Em cada iteração, construir a frase e concatená-la (usando +=)
        // à string final, adicionando uma quebra de linha.
        textoFinal += `O valor da propriedade ${chave} é ${objeto[chave]}.\n`;
    }

    // Passo 4: Retornar a string construída, removendo a última quebra de linha
    // desnecessária com .trim().
    return textoFinal.trim();
}
*/


// ====================================================================================
// FUNÇÃO 3: A FUNÇÃO PRINCIPAL QUE USA CALLBACK
// ====================================================================================

/**
 * Função genérica que recebe um objeto e uma função (callback) para processá-lo.
 * Ela não sabe O QUE a callback faz, apenas a executa.
 * @param {object} objeto - O objeto a ser processado.
 * @param {function} callback - A função que define a operação a ser realizada.
 */
function processarObjeto(objeto, callback) {
    // Passa o objeto como argumento da função de callback.
    const resultado = callback(objeto);
    
    // Imprime o valor retornado pela callback.
    console.log(resultado);
}


// ====================================================================================
// CHAMANDO AS FUNÇÕES
// ====================================================================================

// Chame a funcão 3, passando como argumentos o objeto e a função 1.
console.log("--- Executando com a função de CAIXA ALTA ---");
// Passamos o objeto e a FUNÇÃO (sem os parênteses) como argumentos.
processarObjeto(dadosUsuario, transformarEmCaixaAlta);

console.log("\n---------------------------------------------\n");

// Repita o processo para a funcão 2.
console.log("--- Executando com a função de formatação de TEXTO ---");
processarObjeto(dadosUsuario, formatarComoTexto);
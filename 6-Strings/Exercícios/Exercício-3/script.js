// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);
// Para incluir as aspas duplas dentro da string, usamos aspas simples para delimitar a string.
const fraseOriginal = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

/**
 * Função que manipula uma frase, trocando cores, verificando palavras e
 * aplicando formatação de texto.
 * @param {string} texto - A frase a ser processada.
 */
function manipularFrase(texto) {
    console.log("--- Frase Original ---");
    console.log(texto);
    console.log("----------------------\n");

    // b) Imprima essa string trocando verde por rosa, e azul por laranja;
    // Usamos .replaceAll() para garantir que todas as ocorrências sejam trocadas.
    // O método é encadeado: o resultado do primeiro replace é usado no segundo.
    const fraseModificada = texto
        .replaceAll('verde', 'rosa')
        .replaceAll('azul', 'laranja');

    console.log("b) Frase com cores trocadas:");
    console.log(fraseModificada);
    console.log("\n");

    // c) Verifique se a nova string contém as palavras verde e laranja.
    // O método .includes() retorna um booleano (true ou false).
    const temVerde = fraseModificada.includes('verde');
    const temLaranja = fraseModificada.includes('laranja');

    console.log("c) Verificando o conteúdo da nova frase:");
    console.log(`- Contém a palavra "verde"? ${temVerde}`); // Resultado esperado: false
    console.log(`- Contém a palavra "laranja"? ${temLaranja}`); // Resultado esperado: true
    console.log("\n");

    // EXTRA: Fazer o trecho ficar em letras maiúsculas.
    // Usamos .replace() para encontrar o trecho exato e o substituímos
    // pela sua própria versão em maiúsculas com .toUpperCase().
    const fraseFinal = fraseModificada.replace(
        'mas não deixe o gato sair',
        'mas não deixe o gato sair'.toUpperCase()
    );

    console.log("--- Desafio Extra ---");
    console.log("Frase final com trecho em maiúsculas:");
    console.log(fraseFinal);
    console.log("---------------------");
}

// Invocando a função com a constante criada no passo a)
manipularFrase(fraseOriginal);
// ======================================================
// a) Declare uma função que imprima Olá, [SEU NOME]!
// ======================================================

/**
 * Seleciona o elemento HTML de destino e define seu texto.
 */
function saudacao() {
  const divResultadoA = document.getElementById('resultado-a');
  // Usei "Mundo" como exemplo de nome
  divResultadoA.textContent = "Olá, Mundo!";
}

// Chamada da função para executá-la
saudacao();


// =========================================================================
// b) Declare uma função que receba um número e imprima sua tabuada.
// =========================================================================

/**
 * Gera a tabuada de um número e a adiciona a um elemento HTML.
 * @param {number} numero - O número para o qual a tabuada será gerada.
 * @param {string} targetId - O ID do elemento HTML onde o resultado será exibido.
 */
function mostrarTabuada(numero, targetId) {
    const divResultadoB = document.getElementById(targetId);
    
    // Cria uma string para armazenar o HTML da tabuada
    let htmlTabuada = `<h3>Tabuada do ${numero}</h3>`;
    
    for (let i = 1; i <= 10; i++) {
        htmlTabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    
    // Adiciona a tabuada gerada ao conteúdo da div
    // Usamos += para não apagar o conteúdo anterior ao chamar a função várias vezes
    divResultadoB.innerHTML += htmlTabuada;
}

// Chamando a função várias vezes com números diferentes
mostrarTabuada(9, 'resultado-b');
mostrarTabuada(7, 'resultado-b');


// =========================================================================
// c) Reescreva as funções utilizando arrow functions.
// =========================================================================

const divResultadoC = document.getElementById('resultado-c');

/**
 * Arrow function de saudação que retorna a mensagem.
 */
const saudacaoArrow = () => {
  return "Olá, Mundo! (com Arrow Function)";
};

/**
 * Arrow function que gera o HTML da tabuada de um número.
 * @param {number} numero - O número para o qual a tabuada será gerada.
 */
const mostrarTabuadaArrow = (numero) => {
    let htmlTabuada = `<h3>Tabuada do ${numero} (Arrow Function)</h3>`;
    for (let i = 1; i <= 10; i++) {
        htmlTabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    return htmlTabuada;
};

// Chamando as arrow functions e inserindo os resultados na div correspondente
divResultadoC.innerHTML = `
    <p>${saudacaoArrow()}</p>
    ${mostrarTabuadaArrow(7)}
    ${mostrarTabuadaArrow(9)}
`;
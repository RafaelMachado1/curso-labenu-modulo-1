/*
Exercício 2 - Perguntas e Respostas
*/

// c) Armazene os textos das perguntas em 3 variáveis diferentes.
//    Isso torna o código mais fácil de ler e manter.
const pergunta1 = "Você gosta de programar em JavaScript?";
const pergunta2 = "Você já concluiu o exercício anterior?";
const pergunta3 = "Você pretende continuar estudando programação?";

// a) Faça 3 perguntas para o usuário através do prompt.
// d) Troque o texto do prompt pelas variáveis que contêm as perguntas.
//    Armazene a resposta de cada pergunta em uma variável.
const resposta1 = prompt(pergunta1 + " (Responda Sim ou Não)");
const resposta2 = prompt(pergunta2 + " (Responda Sim ou Não)");
const resposta3 = prompt(pergunta3 + " (Responda Sim ou Não)");

// b) e e) Imprima no console a pergunta e a resposta.
//    O passo 'b' pedia só as respostas, mas o 'e' é uma evolução,
//    então vamos implementar a versão final.
console.log("--- Respostas no Console ---");
console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);

// --- BÔNUS: Exibindo os resultados na própria página HTML ---

// 1. Encontrar o elemento da lista no HTML pelo seu 'id'
const listaResultados = document.getElementById('lista-respostas');

// 2. Criar o conteúdo HTML com as perguntas e respostas para ser exibido na tela
listaResultados.innerHTML = `
    <li><strong>Pergunta 1:</strong> ${pergunta1}<br><strong>Sua Resposta:</strong> ${resposta1}</li>
    <li><strong>Pergunta 2:</strong> ${pergunta2}<br><strong>Sua Resposta:</strong> ${resposta2}</li>
    <li><strong>Pergunta 3:</strong> ${pergunta3}<br><strong>Sua Resposta:</strong> ${resposta3}</li>
`;
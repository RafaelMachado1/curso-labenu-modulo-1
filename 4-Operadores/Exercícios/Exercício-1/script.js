// a) Peça ao usuário que insira um número par
const userInputString = prompt("Por favor, insira um número par:");

// Dica: não se esqueça de converter as respostas para o tipo número
// Usamos parseInt() para converter a string recebida do prompt em um número inteiro.
const numero = parseInt(userInputString);

// b) Imprima no console o resto da divisão desse número por 2.
// O operador de módulo (%) calcula o resto de uma divisão.
const resto = numero % 2;

console.log(`O número que você inseriu foi: ${numero}`);
console.log(`O resto da divisão de ${numero} por 2 é: ${resto}`);


// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
/*
  Resposta para a letra (c):
  Ao testar o programa com vários números pares (como 2, 4, 10, 50, -12, 0),
  o padrão observado é que o resultado impresso no console é sempre 0.
  Isso ocorre porque, por definição, um número par é qualquer número inteiro
  que pode ser dividido por 2 sem deixar resto.
*/

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
/*
  Resposta para a letra (d):
  Se o usuário inserir um número ímpar (como 3, 7, 15, -9, 101),
  o console sempre imprimirá o valor 1.
  Isso acontece porque a definição de um número ímpar é ser um número inteiro
  que, ao ser dividido por 2, sempre deixa um resto igual a 1.
*/
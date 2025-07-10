// Pergunte ao usuário dois números
const primeiroInput = prompt("Digite o primeiro número:");
const segundoInput = prompt("Digite o segundo número:");

// Converta as strings recebidas para o tipo número
// Usaremos parseFloat para permitir também números com casas decimais
const primeiroNumero = parseFloat(primeiroInput);
const segundoNumero = parseFloat(segundoInput);

console.log(`Os números inseridos foram: ${primeiroNumero} e ${segundoNumero}`);
console.log("---"); // Linha para separar

// 1. O primeiro numero é maior que o segundo?
const ehMaior = primeiroNumero > segundoNumero;
console.log(`O primeiro numero é maior que o segundo? ${ehMaior}`);

// 2. O primeiro numero é igual ao segundo?
// Usamos '===' (igualdade estrita) que verifica valor E tipo, é uma boa prática.
const ehIgual = primeiroNumero === segundoNumero;
console.log(`O primeiro numero é igual ao segundo? ${ehIgual}`);

// 3. O primeiro numero é divisível pelo segundo?
// Um número é divisível por outro se o resto da divisão for 0.
// Usamos o operador de módulo (%) para encontrar o resto.
const primeiroEhDivisivel = (primeiroNumero % segundoNumero) === 0;
console.log(`O primeiro numero é divisível pelo segundo? ${primeiroEhDivisivel}`);

// 4. O segundo numero é divisível pelo primeiro?
const segundoEhDivisivel = (segundoNumero % primeiroNumero) === 0;
console.log(`O segundo numero é divisível pelo primeiro? ${segundoEhDivisivel}`);
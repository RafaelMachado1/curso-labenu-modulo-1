// Crie um array de números que contenha 8 números.
const numeros = [10, 20, 3, 8, 15, 24, 7, 100];

// O método map() executa uma função (callback) para cada elemento do array
// e retorna um NOVO array com os resultados dessa função. O array original não é modificado.


// 1. Retorne um novo array contendo os números multiplicados por 5.
// A função callback `(numero) => numero * 5` é executada para cada item.
// O valor que ela retorna (o número multiplicado por 5) é adicionado ao novo array.
const quintuplos = numeros.map((numero) => {
    return numero * 5;
});


// 2. Retorne um novo array contendo os números divididos por 2.
// Podemos escrever a mesma lógica de forma mais concisa com uma arrow function implícita.
const metades = numeros.map(numero => numero / 2);


// 3. Imprimindo os resultados no console para verificação.
console.log("--- Resultados com map() ---");
console.log("Array Original:", numeros);
console.log("Quintuplos (cada número * 5):", quintuplos);
console.log("Metades (cada número / 2):", metades);
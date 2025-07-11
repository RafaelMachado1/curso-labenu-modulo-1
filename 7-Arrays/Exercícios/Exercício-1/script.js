// Crie um array vazio chamado sacolao
const sacolao = [];

// a) Fora do array, crie três objetos que vão representar frutas do sacolão.
const fruta1 = {
    nome: "Banana",
    preco: 4.50,
    disponibilidade: true
};

const fruta2 = {
    nome: "Morango",
    preco: 10.99,
    disponibilidade: false // Talvez esteja fora de época
};

const fruta3 = {
    nome: "Abacaxi",
    preco: 7.80,
    disponibilidade: true
};

// b) Adicione os objetos ao array sacolao utilizando o método push().
console.log("Adicionando as frutas ao sacolão...");

sacolao.push(fruta1);
sacolao.push(fruta2);
sacolao.push(fruta3);

// c) Imprima o array sacolao, e certifique-se de que agora ele seja um array com três objetos.
console.log("\n--- Conteúdo final do Sacolão ---");
console.log(sacolao);

// Verificação adicional do tipo e tamanho do array
console.log(`\nO array 'sacolao' tem ${sacolao.length} itens.`);
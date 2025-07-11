// Objeto inicial
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a) Crie uma cópia do objeto, trocando nome por “Squirtle” e tipo por “Água”.
// Usamos o spread '...' para copiar todas as propriedades de pokemon1
// e depois sobrescrevemos as propriedades 'nome' e 'tipo'.
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
};

// b) No objeto original, adicione a propriedade 'ataques' com um array vazio.
pokemon1.ataques = [];

// c) Crie um objeto de ataque e adicione-o ao array 'ataques' do objeto original.
const ataqueInvestida = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
};
pokemon1.ataques.push(ataqueInvestida);

// d) Na cópia (Squirtle), adicione a propriedade 'ataques' a partir do espalhamento
// da propriedade de mesmo nome do objeto original.
// Isso cria uma cópia do array de ataques, garantindo que os dois pokémons
// tenham listas de ataques independentes a partir deste ponto.
pokemon2.ataques = [...pokemon1.ataques];

// e) Para o objeto original, adicione o ataque "Folha Navalha".
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
});

// f) Para a cópia, adicione o ataque "Jato de Água".
pokemon2.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
});

// g) Imprima ambos os objetos no console.
console.log("--- Objeto Original (Bulbasaur) ---");
console.log(pokemon1);

console.log("\n--- Cópia Modificada (Squirtle) ---");
console.log(pokemon2);
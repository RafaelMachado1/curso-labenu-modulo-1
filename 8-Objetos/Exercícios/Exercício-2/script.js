// O objeto fornecido no exercício
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

console.log("--- Respostas do Exercício 2 ---");

// a) Qual o código para imprimir o nome do primeiro ator/atriz?
// Acessamos o objeto 'filme', depois a propriedade 'elenco' (que é um array),
// e por fim o primeiro item do array, que tem o índice [0].
console.log("a) Primeiro ator/atriz:", filme.elenco[0]);

// b) Qual o código para imprimir o nome do último ator/atriz?
// Acessamos a propriedade 'elenco' e pegamos o item no índice 'tamanho do array - 1'.
// Isso sempre nos dará o último item, não importa o tamanho do array.
console.log("b) Último ator/atriz:", filme.elenco[filme.elenco.length - 1]);

// c) Qual o código para exibir o array com todas as transmissões de hoje?
// Acessamos o objeto 'filme' e depois a propriedade 'transmissoesHoje'.
// O valor dessa propriedade já é o array completo.
console.log("c) Todas as transmissões:", filme.transmissoesHoje);

// d) Qual o código para exibir o horário de transmissão do filme no Canal Brasil?
// 1. Acessamos o array: filme.transmissoesHoje
// 2. Olhando o array, vemos que o "Canal Brasil" é o segundo objeto, no índice [1].
// 3. Acessamos esse objeto: filme.transmissoesHoje[1]
// 4. Dentro desse objeto, acessamos a propriedade 'horario'.
console.log("d) Horário no Canal Brasil:", filme.transmissoesHoje[1].horario);
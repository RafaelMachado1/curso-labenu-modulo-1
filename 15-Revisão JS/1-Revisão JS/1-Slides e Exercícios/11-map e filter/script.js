// Array de produtos fornecido para o exercício
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
];

// ● Retorne um novo array com todos os produtos porém com o 10% de desconto no preço
// Usamos .map() para transformar cada item do array.
const produtosComDesconto = produtos.map((produto) => {
    // Para cada produto, retornamos um NOVO objeto.
    // Usamos o spread operator (...) para copiar todas as propriedades originais.
    // E então, sobrescrevemos a propriedade 'preco' com o novo valor (90% do original).
    return {
        ...produto,
        preco: produto.preco * 0.9
    };
});

console.log("--- 1. Todos os produtos com 10% de desconto ---");
console.log(produtosComDesconto);
console.log("-----------------------------------------------");


// ● Retorne um array apenas com os itens da categoria hortifruti
// Usamos .filter() para selecionar apenas os itens que atendem a uma condição.
const produtosHortifruti = produtos.filter((produto) => {
    // A função deve retornar 'true' para os itens que queremos manter.
    return produto.categoria === "Hortifruti";
});

console.log("--- 2. Apenas os produtos da categoria Hortifruti ---");
console.log(produtosHortifruti);
console.log("-----------------------------------------------------");


// ● Retorne um array apenas com os itens de hortifruti E com 10% de desconto no preço
// Aqui, encadeamos os dois métodos: primeiro filtramos, depois transformamos.
const hortifrutiComDesconto = produtos
    .filter((produto) => {
        // Primeiro passo: selecionar apenas os de hortifruti.
        return produto.categoria === "Hortifruti";
    })
    .map((produtoFiltrado) => {
        // Segundo passo: aplicar o desconto apenas nos itens que passaram pelo filtro.
        return {
            ...produtoFiltrado,
            preco: produtoFiltrado.preco * 0.9
        };
    });

console.log("--- 3. Hortifruti com 10% de desconto ---");
console.log(hortifrutiComDesconto);
console.log("-----------------------------------------");
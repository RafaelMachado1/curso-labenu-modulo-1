// Array de produtos disponibilizado.
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
]

// Para resolver, vamos encadear dois métodos:
// 1. .filter(): Primeiro, selecionamos apenas os objetos que nos interessam.
//    A callback retorna 'true' para os produtos da categoria "Limpeza".
// 2. .map(): Em seguida, a partir do array filtrado, transformamos cada objeto
//    em apenas o seu nome, retornando um novo array de strings.

const nomesProdutosLimpeza = produtos

    .filter((produto) => {
        // Retorna true se a categoria for "Limpeza", false caso contrário.
        return produto.categoria === "Limpeza";
    })
    .map((produtoFiltrado) => {
        // Para cada produto que passou no filtro, retorna apenas a propriedade 'nome'.
        return produtoFiltrado.nome;
    });

// Imprimindo os resultados no console para verificação.
console.log("--- Produtos de Limpeza ---");
console.log("Array Original de Produtos:", produtos);
console.log("Novo Array com Nomes de Produtos de Limpeza:", nomesProdutosLimpeza);
/**
 * Função principal para executar a lógica do exercício 6 da revisão.
 */
function manipularListaDeCompras() {
    // Dada a lista ["batata", "cenoura", "beterraba"]
    // Usamos 'let' porque o array será modificado (itens adicionados/removidos).
    let listaDeCompras = ["batata", "cenoura", "beterraba"];

    console.log("--- Operações com a Lista de Compras ---");
    console.log("Lista original:", listaDeCompras);
    console.log("---------------------------------------");

    // ● Imprima o segundo item da lista
    // Arrays são indexados a partir de 0, então o segundo item está no índice 1.
    console.log(`Segundo item da lista: ${listaDeCompras[1]}`);
    console.log("---------------------------------------");

    // ● Imprima o tamanho da lista
    // A propriedade .length retorna o número de elementos no array.
    console.log(`Tamanho da lista: ${listaDeCompras.length}`);
    console.log("---------------------------------------");

    // ● Adicione o item "mandioca"
    // O método .push() adiciona um ou mais elementos ao final de um array.
    listaDeCompras.push("mandioca");
    console.log("Lista após adicionar 'mandioca':", listaDeCompras);
    console.log("Novo tamanho da lista:", listaDeCompras.length);
    console.log("---------------------------------------");

    // ● Verifique se há um item chamado cenoura
    // O método .includes() verifica se um array contém um determinado elemento, retornando true ou false.
    const temCenoura = listaDeCompras.includes("cenoura");
    console.log(`A lista contém "cenoura"? ${temCenoura}`);
    console.log("---------------------------------------");

    // ● Remova o item de índice 1
    // O método .splice() altera o conteúdo de um array, removendo ou substituindo elementos.
    // splice(1, 1) significa: a partir do índice 1, remova 1 elemento.
    listaDeCompras.splice(1, 1);
    console.log("Lista após remover o item de índice 1 (a 'cenoura'):", listaDeCompras);
    console.log("---------------------------------------");
}

// Chamando a função para iniciar o programa.
manipularListaDeCompras();
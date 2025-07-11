// Obs: copie os arrays criados no exercício 1 para dentro do arquivo script.js do exercício 3.
const arrayDeNumeros = [42, 15, 99, 7, 203, 58];
const arrayDeStrings = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
const arrayMisto = [10, "Olá, mundo!", true, 25.5, false, "Fim do array"];

// Criando cópias dos arrays usando o método slice()
const arrayDeNumerosCopia = arrayDeNumeros.slice();
const arrayDeStringsCopia = arrayDeStrings.slice();
const arrayMistoCopia = arrayMisto.slice();


// a) Adiciona um item ao início da cópia do primeiro array
function adicionarItemInicio(copiaArray) {
    // O método unshift() adiciona um ou mais elementos ao início de um array.
    copiaArray.unshift(101);

    console.log("--- a) Adicionando item ao início da cópia ---");
    console.log("Array Original:", arrayDeNumeros);
    console.log("Cópia Modificada:", copiaArray);
}


// b) Remove o último item da cópia do segundo array
function removerUltimoItem(copiaArray) {
    // O método pop() remove o último elemento de um array.
    copiaArray.pop();
    
    console.log("\n--- b) Removendo o último item da cópia ---");
    console.log("Array Original:", arrayDeStrings);
    console.log("Cópia Modificada:", copiaArray);
}


// c) Remove o segundo item da cópia do terceiro array
function removerSegundoItem(copiaArray) {
    // O método splice() altera o conteúdo de um array, removendo ou substituindo
    // elementos existentes. `splice(1, 1)` significa: comece no índice 1 e remova 1 item.
    copiaArray.splice(1, 1);

    console.log("\n--- c) Removendo o segundo item da cópia ---");
    console.log("Array Original:", arrayMisto);
    console.log("Cópia Modificada:", copiaArray);
}


// Invocando as funções e passando as CÓPIAS dos arrays como parâmetros
adicionarItemInicio(arrayDeNumerosCopia);
removerUltimoItem(arrayDeStringsCopia);
removerSegundoItem(arrayMistoCopia);
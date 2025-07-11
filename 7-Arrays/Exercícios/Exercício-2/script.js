// Obs: copie os arrays criados no exercício 1 para dentro do arquivo script.js do exercício 2.
const arrayDeNumeros = [42, 15, 99, 7, 203, 58];
const arrayDeStrings = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
const arrayMisto = [10, "Olá, mundo!", true, 25.5, false, "Fim do array"];


// a) Crie uma função que recebe os 3 arrays e imprima a quantidade de itens de cada.
function imprimirTamanhos(arr1, arr2, arr3) {
    console.log("--- a) Tamanho de cada array ---");
    console.log(`O primeiro array tem ${arr1.length} itens.`);
    console.log(`O segundo array tem ${arr2.length} itens.`);
    console.log(`O terceiro array tem ${arr3.length} itens.`);
}


// b) Crie outra função que recebe os 3 arrays e imprima itens específicos.
// c) Na mesma função, verifique a inclusão de itens.
function analisarArrays(arrNum, arrStr, arrMix) {
    console.log("\n--- b) Itens específicos de cada array ---");
    console.log(`Primeiro item do primeiro array: ${arrNum[0]}`);   // Pega o item no índice 0
    console.log(`Segundo item do segundo array: ${arrStr[1]}`);    // Pega o item no índice 1
    console.log(`Terceiro item do terceiro array: ${arrMix[2]}`);   // Pega o item no índice 2

    console.log("\n--- c) Verificando se itens estão incluídos ---");
    // Verificação para dar TRUE: o número 99 está no primeiro array?
    const verificacao1 = arrNum.includes(99);
    console.log(`O número 99 está incluído no primeiro array? ${verificacao1}`);

    // Verificação para dar FALSE: a string "Python" está no terceiro array?
    const verificacao2 = arrMix.includes("Python");
    console.log(`A string "Python" está incluída no terceiro array? ${verificacao2}`);
}


// Invocando as funções e passando os arrays como parâmetros
imprimirTamanhos(arrayDeNumeros, arrayDeStrings, arrayMisto);
analisarArrays(arrayDeNumeros, arrayDeStrings, arrayMisto);
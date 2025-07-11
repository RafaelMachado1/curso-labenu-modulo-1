# Array: Introdução a lista de elementos

Arrays são **listas de elementos,** tipo lista de compras, lista de alunos, lista de números da loteria, lista telefônica etc.

Arrays permitem que a gente guarde vários valores numa mesma variável, e organiza os valores utilizando **índices**.

Podemos dizer que se uma **variável** é como uma gaveta que pode receber algo, já um **array** é um armário que pode receber uma **lista de gavetas  ordenada.**

Imagine que você tem um armário com várias gavetas numeradas de 0 a 3. Cada gaveta pode armazenar algum elemento diferente. 

![Quando temos um array, cada elemento é atribuído a um número de índice único, começando do zero. Esses índices funcionam como "etiquetas" para as gavetas do nosso armário. Por exemplo, o primeiro elemento está no **índice** **0**, o segundo elemento está no **índice 1** e assim por diante.](./img%20e%20vídeos/Untitled.webp)

Quando temos um array, cada elemento é atribuído a um número de índice único, começando do zero. Esses índices funcionam como "etiquetas" para as gavetas do nosso armário. Por exemplo, o primeiro elemento está no **índice** **0**, o segundo elemento está no **índice 1** e assim por diante.

## Declarando arrays

No javascript, usamos colchetes `[]` para criar um array. Vamos dar um exemplo prático. Suponha que você queira criar um array chamado "gaveta de frutas" que armazene alguns nomes de frutas, como maçã, banana, uva e laranja. Você pode fazer da seguinte maneira:

```jsx
let gavetaDeFrutas = ["maçã", "banana", "uva", "laranja"];
```

Neste caso, usamos colchetes **`[ ]`** para criar o array e separamos os elementos com vírgulas. Cada elemento é uma string, representando uma fruta.

<aside>
💡 É importante notar que um array pode armazenar diferentes tipos de elementos, como números, strings, booleanos e até mesmo outros arrays.

</aside>

```jsx
let gavetaDeFrutas = ["maçã", "banana", "uva", "laranja", true, 10, false, 25, 87];
```

## Acessando elementos de um array

Arrays funcionam como **listas numeradas**. Podemos acessar os valores guardados no array indicando sua posição, ou, como vamos chamar por aqui: **índice**.

Uma vez que você tenha declarado um array, pode acessar seus elementos usando a indexação, começando com o índice 0. Por exemplo, **`gavetaDeFrutas[0]`** retornaria a primeira fruta do array "gavetaDeFrutas", que é "maçã".

```jsx
let gavetaDeFrutas = ["maçã", "banana", "uva", "laranja"];

console.log**(gavetaDeFrutas[0]**)  //Resultado: maçã
console.log(**gavetaDeFrutas[1]**)  //Resultado: banana
console.log(**gavetaDeFrutas[2]**)  //Resultado: uva
console.log(**gavetaDeFrutas[3]**)  //Resultado: laranja
```

<aside>
💡 **Atenção:** No código, devemos começar a contagem dos indices de um array da esquerda para direita e a partir do indice 0, nunca do numero 1.

</aside>

```jsx
**//contagem do indice:    0        1       2        3**
let gavetaDeFrutas = ["maçã", "banana", "uva", "laranja"];

console.log**(gavetaDeFrutas[0]**)  //Resultado: maçã
console.log(**gavetaDeFrutas[1]**)  //Resultado: banana
console.log(**gavetaDeFrutas[2]**)  //Resultado: uva
console.log(**gavetaDeFrutas[3]**)  //Resultado: laranja
```

## Vídeo complementar

[Arrays.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/24ff4614-0e92-4748-9d6c-544a32035311/Arrays.mp4)

# Resumo

Dicas:

1. Arrays são como listas de elementos, permitindo armazenar vários valores em uma única variável.
2. Podemos pensar em um array como um armário com gavetas numeradas, onde cada gaveta representa um elemento do array.
3. Ao declarar um array em JavaScript, usamos colchetes `[]` e separamos os elementos por vírgulas.
4. Podemos acessar os elementos de um array usando a indexação, começando do índice 0. Cada elemento é acessado indicando o nome do array seguido do índice entre colchetes.
5. Lembre-se de que a contagem dos índices começa em 0, então o primeiro elemento tem índice 0, o segundo elemento tem índice 1 e assim por diante.
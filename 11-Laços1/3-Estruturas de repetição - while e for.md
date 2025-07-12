# Estruturas de repetição: while e for

# while

**`while`** ("enquanto") é a estrutura mais **básica** de criação de loops. Funciona de forma muito parecida com um **`if`**. Ou seja, enquanto a **condição de continuação** for **`true`**, o laço seguirá se repetindo.

Vamos ver um exemplo! 

I**mprimindo alguns números**:

```jsx
let i = 0 // let i começa valendo 0

while(i < 10){
	/*condição: (enquanto i for menor que 10, faça o que está
	entre as chaves {}*/
	console.log(i) //imprime o valor de i

	i++ //adiciona mais um à variável i 

}
```

Abaixo, observe os elementos presentes nesse laço:

![Untitled](./img%20e%20vídeos/Untitled3.webp)

⚠️ **Atenção:**

1. Assim como nas condicionais, caso a condição **não seja atendida**, **o código não entrará no laço**. No exemplo acima, se a **`let i`** tivesse iniciado com valor de 10 ou mais, não entraríamos no laço **nunca**!
2. A condição entre parênteses no **`while`** será verificada sempre que chegarmos na chave de fechamento **`}`**. Caso a condição não seja mais atendida, o laço não será executado novamente.

**Observe atentamente o gif abaixo  para entender a dinâmica do laço `while`:** 

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D0%253A1%26node-id%3D20%253A2%26viewport%3D298%252C600%252C0.17%26scaling%3Dmin-zoom%26starting-point-node-id%3D4%253A4

## Vídeo complementar

[Vídeo prático sobre a utilização da estrutura de repetição **while**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b777be7d-423a-4e1f-821d-98f5cc81649f/While-loops.mp4)

Vídeo prático sobre a utilização da estrutura de repetição **while**

# for

São bastante comuns os laços em que temos a **condição de continuação** atrelada a um **número** que é incrementado. O laço **`for`** é uma maneira que permite **simplificar** a escrita de laços que tenham este comportamento. Observe abaixo o mesmo código utilizando o **`while`** e o **`for`**:

```jsx
let i = 0

while(i < 10){

	console.log(i)

	i++

}
// No console serão impressos os números de 0 à 9 
```

```jsx
for(let i = 0; i < 10; i++){
	console.log(i)
}
// No console serão impressos os números de 0 à 9 
```

Abaixo, observe os elementos presentes no laço **`for`**:

![Untitled](./img%20e%20vídeos/Untitled4.webp)

Ainda que as etapas **começo**, **condição** e **incremento** estejam todas na mesma linha, o Javascript as executa em momentos diferentes seguindo a ordem abaixo: 
🔴 Começo
🟢 Condição
🔵 Ação 
🟠 Incremento

**Observe atentamente o gif abaixo  para entender a dinâmica do laço `for`:**

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D283%253A2%26node-id%3D283%253A189%26viewport%3D469%252C360%252C0.08%26scaling%3Dmin-zoom%26starting-point-node-id%3D283%253A5

## Vídeo complementar

[Vídeo prático sobre a utilização da estrutura de repetição **for**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84dcbd15-1e10-4742-bea8-fa786321e1b2/For-lacos.mp4)

Vídeo prático sobre a utilização da estrutura de repetição **for**

# for com arrays

Uma das principais utilidades deste tipo de estrutura é **PERCORRERMOS** os ****valores **contidos dentro de um array**. Observe o código abaixo:

```jsx
const numeros = [14, 67, 89, 15, 23]

for(let i = 0; i < 5; i++){
	console.log(numeros[i];
}
// No console serão impressos os números 14, 67, 89, 15, 23
```

**`i < 5`** foi nossa **condição de continuação** pois o array tem 5 itens, ou seja, **serão lidos os elementos** que estão nos **índices** de 0 a 4, e o código pára a execução do laço no momento em **`i === 5`**.

Podemos também usar a propriedade **`length`**, que devolve o **tamanho** do array, como no exemplo abaixo:

⇒ lembrando que, nesse exemplo, **`numeros.length** === **5**`

```jsx
const numeros = [14, 67, 89, 15, 23]

for(let i = 0; i < numeros.length; i++){
	console.log(numeros[i]);
}
```

**Observe o gif abaixo  para entender a dinâmica do laço `for com arrays`:**

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D283%253A3%26node-id%3D332%253A278%26viewport%3D478%252C370%252C0.05%26scaling%3Dmin-zoom%26starting-point-node-id%3D332%253A3

## Vídeo complementar

[Vídeo prático sobre a utilização da estrutura de repetição **for com arrays**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdf5bca6-6dd1-4137-b1ac-d3a8c046581a/for-arrays.mp4)

Vídeo prático sobre a utilização da estrutura de repetição **for com arrays**

# Resumo

1. Entenda a estrutura **`while`** como uma forma básica de criar loops em que o código é repetido enquanto uma condição de continuação for verdadeira.
2. Observe os elementos presentes em um laço **`while`**, como o começo, a condição de continuação, o conjunto de ações e o incremento.
3. Utilize a estrutura **`for`** para simplificar a escrita de loops em que a condição de continuação está relacionada a um número incrementado.
4. Familiarize-se com os elementos presentes em um laço **`for`**, como o começo, a condição de continuação, o conjunto de ações e o incremento, que são executados em ordem.
5. Aproveite o recurso do **`for`** para percorrer os elementos de um array utilizando a propriedade **`length`** ou um valor fixo como condição de continuação.
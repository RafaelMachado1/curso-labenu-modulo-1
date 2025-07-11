# Protótipos de arrays: Propriedades e métodos

<aside>
<img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" alt="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" width="40px" /> A seguir, iremos explorar uma variedade de comandos diferentes e importantes para o seu aprendizado em arrays. **Não se preocupe em memorizar todos eles de uma vez.** Durante o curso, teremos muitas práticas e esses comandos se tornarão familiares com o tempo. O importante é praticar e se familiarizar gradualmente com cada um deles.

</aside>

Assim como as Strings, os Arrays são objetos internos do JavaScript, então possuem algumas ferramentas já criadas, que podemos acessar e usar. Este é o **prototipo** dos Arrays.

As propriedades e métodos de um array nos permitem acessar e manipular os elementos armazenados nele de maneiras úteis e convenientes. 

Vamos explicar cada um deles de forma simplificada:

- `length`
    
    A propriedade `length` retorna o número de elementos em um array. É útil para saber o tamanho do array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    console.log(frutas.length); // Resultado: 3
    
    ```
    

### Métodos para adicionar e remover elementos de uma array

- `push(elemento)`
    
    O método `push()` adiciona um novo elemento ao final de um array. É útil quando queremos inserir um elemento no final do array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = []; //podemos declarar um array vazio
    
    frutas.push("maçã");
    console.log(frutas); // Resultado: ["maçã"]
    
    frutas.push("banana");
    console.log(frutas); // Resultado: ["maçã", "banana"]
    
    frutas.push("laranja");
    console.log(frutas); // Resultado: ["maçã", "banana", "laranja"]
    
    ```
    
- `pop()`
    
    O método `pop()` remove o último elemento de um array e o retorna. É útil quando queremos remover o elemento mais recente. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    let ultimaFruta = frutas.pop();
    console.log(ultimaFruta); // Resultado: laranja
    console.log(frutas); // Resultado: ["maçã", "banana"]
    
    ```
    
- `unshift(elemento)`
    
    O método `unshift()` adiciona um novo elemento no início do array. É útil quando queremos inserir um elemento no início do array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana"];
    frutas.unshift("laranja");
    console.log(frutas); // Resultado: [**"laranja"**, "maçã", "banana"]
    
    ```
    
- `shift()`
    
    O método `shift()` remove o primeiro elemento de um array e o retorna. É útil quando queremos remover o primeiro elemento do array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    let primeiraFruta = frutas.shift();
    console.log(primeiraFruta); // Resultado: maçã
    console.log(frutas); // Resultado: ["banana", "laranja"]
    
    ```
    
- `splice(i, n)`
    
    O método `splice()` remove ou substitui elementos existentes em um array, a partir de um índice específico (`i`) e pelo número de elementos (`n`) fornecido. É útil quando queremos fazer alterações mais complexas no array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja", "abacaxi"];
    frutas.splice(1, 2);
    console.log(frutas); // Resultado: ["maçã", "abacaxi"]
    
    ```
    

### Métodos para pesquisar elementos de uma array

- `includes(elemento)`
    
    O método `includes()` verifica se um determinado elemento está presente no array e retorna um valor booleano (true ou false). É útil para verificar a existência de um elemento no array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    let temBanana = frutas.includes("banana");
    console.log(temBanana); // Resultado: true
    
    ```
    
- `indexOf(valor)`
    
    O método `indexOf()` retorna o índice da primeira ocorrência de um determinado valor no array. Se o valor não for encontrado, retorna -1. É útil para buscar a posição de um elemento no array. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    let indiceBanana = frutas.indexOf("banana");
    console.log(indiceBanana); // Resultado: 1
    
    ```
    

### Método de ordenação

- `sort()`
    
    O método `sort()` é usado para ordenar os elementos de um array em ordem alfabética ou numérica, dependendo do tipo de dado dos elementos. É útil para organizar os elementos do array em uma determinada ordem. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["laranja", "maçã", "banana"];
    frutas.sort();
    console.log(frutas); // Resultado: ["banana", "laranja", "maçã"]
    
    ```
    
    Nesse exemplo, o método `sort()` foi chamado no array de frutas, fazendo com que os elementos sejam ordenados em ordem alfabética.
    
    Vale ressaltar que o método `sort()` altera o array original, reordenando os elementos. Caso você precise preservar o array original, é recomendado criar uma cópia antes de utilizar o método.
    
    É importante mencionar que, ao usar o método `sort()`, é necessário ter em mente que a ordenação pode não funcionar corretamente para todos os tipos de elementos. Para esses casos, nós iremos aprender a soluçionar em conteúdos futuros.
    
    Esses são apenas alguns exemplos das propriedades e métodos disponíveis para manipular arrays no JavaScript. Eles desempenham um papel fundamental ao lidar com a organização, manipulação e obtenção de informações de arrays.
    

### Métodos para transformar array em string, virse-versa

- `join(caractere opcional)`
    
    O método `join()` converte todos os elementos de um array em uma única string, separados por um caractere opcional especificado. É útil para transformar um array em
    
    uma string legível. 
    
    Por exemplo:
    
    ```jsx
    let frutas = ["maçã", "banana", "laranja"];
    let frutasString = frutas.join(", ");
    console.log(frutasString); // Resultado: "maçã, banana, laranja"
    
    ```
    
- `split(caractere opcional)`
    
    O método `split()` é usado para dividir uma string em um array de substrings com base em um caractere de separação opcional especificado. É útil quando queremos separar uma string em partes menores. 
    
    Por exemplo:
    
    ```jsx
    let frase = "Olá, como vai você?";
    let palavras = frase.split(" ");
    console.log(palavras); // Resultado: ["Olá,", "como", "vai", "você?"]
    
    ```
    
    Nesse exemplo, o método `split(" ")` foi chamado na string `frase`, utilizando o espaço como caractere de separação. Isso resultou em um array chamado `palavras` contendo cada palavra separadamente.
    
    Se nenhum caractere de separação for especificado, o método `split()` dividirá a string em cada caractere individualmente. 
    
    Por exemplo:
    
    ```jsx
    let nome = "João";
    let letras = nome.split("");
    console.log(letras); // Resultado: ["J", "o", "ã", "o"]
    
    ```
    
    Nesse caso, o método `split("")` foi usado para dividir a string `nome` em cada letra individual, gerando o array `letras`.
    

## Vídeo complementar

[array-prototi´pos (1).mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb53c425-6219-4834-ba69-b43b71874fa6/array-prototipos_(1).mp4)

## Arrays e Strings

Você deve ter percebido que alguns métodos e propriedades de Strings são parecidas.

Strings **são**, de certa forma, arrays (são listas de caracteres), então temos métodos que existem tanto para um quanto para outro.

Podemos acessar um caractere de String ao passar seu **índice**, por exemplo.

```jsx
const nome = "Alex"
console.log(nome[2]) //resultado: "e"
```

## Copiando Arrays

Arrays são um pouco mais complicados de copiar do que variáveis comuns. Isso acontece porque o array é salvo pelo JavaScript como um **endereço de memória**, e não como um valor.

Se fizermos a atribuição "comum" ao array, ao alterar um deles, ambos serão alterados.

```jsx
const array1 = [1,2,3]
const array2 = array1

console.log(array1) //resultado: [1,2,3]
console.log(array2) //resultado: [1,2,3]

array1.push(4)

console.log(array1) //resultado: [1,2,3,4]
console.log(array2) //resultado: [1,2,3,4]
```

Então, para criar uma cópia de array, precisamos copiar seus valores. Existem várias formas de fazer isso.

Abaixo, mostramos um exemplo com o método **slice()**.

```jsx
const array1 = [1,2,3]
const array2 = **array1.slice()**

console.log(array1) //resultado: [1,2,3]
console.log(array2) //resultado: [1,2,3]

array1.push(4)

console.log(array1) **//resultado: [1,2,3,4]**
console.log(array2) //**resultado diferente:** [1,2,3]
```

# Resumo

| Propriedades e Métodos | Descrição |
| --- | --- |
| `length` | Retorna o número de elementos em um array. |
| `push(elemento)` | Adiciona um novo elemento ao final de um array. |
| `pop()` | Remove o último elemento de um array e o retorna. |
| `unshift(elemento)` | Adiciona um novo elemento no início do array. |
| `shift()` | Remove o primeiro elemento de um array e o retorna. |
| `splice(i, n)` | Remove ou substitui elementos existentes em um array, a partir de um índice específico (`i`) e pelo número de elementos (`n`) fornecido. `splice()` copia o array. |
| `includes(elemento)` | Verifica se um determinado elemento está presente no array e retorna um valor booleano. |
| `indexOf(valor)` | Retorna o índice da primeira ocorrência de um determinado valor no array. |
| `sort()` | Ordena os elementos de um array em ordem alfabética ou numérica. |
| `join(caractere opcional)` | Converte todos os elementos de um array em uma única string, separados por um caractere opcional especificado. |
| `split(caractere opcional)` | Divide uma string em um array de substrings com base em um caractere de separação opcional especificado. |
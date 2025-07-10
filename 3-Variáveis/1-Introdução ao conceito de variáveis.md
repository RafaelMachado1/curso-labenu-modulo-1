# Introdução ao conceito de Variáveis

Variáveis são elementos fundamentais em programação que nos permitem armazenar e manipular informações. Podemos pensar nelas como caixas ou espaços de armazenamento onde podemos colocar diferentes objetos.

Vamos usar o exemplo da caixa de sapato para ilustrar. Imagine que você tem uma caixa de sapato vazia e você quer usá-la para guardar objetos diferentes, como meias, um lápis e um pequeno brinquedo.

![Untitled](./img%20e%20vídeos/Untitled.webp)

Nesse caso, a caixa de sapato seria a variável. Ela representa um espaço de armazenamento onde você pode colocar diferentes objetos, ou seja, valores diferentes. Você pode colocar as meias na caixa e depois trocá-las por um lápis. A caixa de sapato se adapta ao novo objeto, assim como uma variável pode receber diferentes valores ao longo do programa.

![Untitled](./img%20e%20vídeos/Untitled2.webp)

![Untitled](./img%20e%20vídeos/Untitled3.webp)

Da mesma forma, em um programa de computador, uma variável é um espaço de memória que possui um nome (como o nome “caixa de sapato”) e um tipo de dado associado (como o tipo dos objetos que você coloca na caixa). Você pode armazenar valores diferentes nessa variável ao longo do programa e manipulá-los de acordo com as necessidades.

## Tipos de dados (Valor)

As variáveis no computador podem guardar diversos tipos de dados, entre eles:

1. Números, que chamamos de **number**
2. Texto, que chamamos de **string**
3. Afirmações de verdadeiro ou falso, que chamamos de **boolean**
4. Nulo, que chamamos de **null**
5. indefinido, que chamamos de **undefined**

Chamamos esses tipos de dados de **tipos primitivos.**

## Como criar variáveis no computador usando JavaScript?

Existem duas formas principais de criar(declarar) variáveis em JavaScript: usando duas palavras especiais **`let`** e **`const`**.

Segue abaixo a foma correta de escrever o código**(sintaxe)** para declarar uma variável

**`let`** **nomeDaVariavel** **= valor
`const` nomeDaVariavel = valor**

<aside>
💡 **Legenda**
Em **azul**, é a palavra especial que cria a variável.
Em **negrito** , é onde nomeamos a variável, assim como nomeamos as coisas do mundo, exemplo: “caixa de sapato”.
Em **cor de laranja**, é o sinal de atribuição, ele faz com que o tipo de dado seja guardado na variável.
Em **roxo**, é o tipo de dado a ser guardado (número, texto…).

</aside>

## Boas práticas para criação de variáveis

### Nomear variáveis

Devemos escolher nomes significativos, ou seja, se eu quero declarar minha idade, então usarei **um termo que deixe isto claro.**

exemplo:

```jsx
let minhaIdade = 34
//guarda o número 34 na variável idade
```

Por isso, não podem começar com **números** ou caracteres especiais (123456, #@$%&…).

Para nomear variáveis corretamente também usamos um padrão muito comum em JavaScript, o 

**camelCase.**

1. primeira letra é **minúscula**
2. entre as palavras é **maiúscula**

![Untitled](./img%20e%20vídeos/Untitled4.webp)

exemplo:

```jsx
const nomeDoCurso = "Web Full Stack"
//guarda o texto "Web Full Stack" na variável nomeDoCurso
```

<aside>
🚨 Atenção, usamos barras duplas `//` ou barras com asteriscos `/* */` para fazer comentários no código. Então, sempre que houver barras significa que estamos te explicando algo a respeito do código, nada mais.

</aside>

## Quando usar **const** ou **let ?**

![4.png](./img%20e%20vídeos/4.webp)

![Variáveis.png](./img%20e%20vídeos/Variveis.webp)

# Resumo

1. Variáveis são como caixas de armazenamento onde você guarda diferentes objetos.
2. Tipos primitivos em JavaScript são números, textos, booleanos, nulo e indefinido.
3. Para criar variáveis, use `let` ou `const` seguidos do nome e valor da variável.
4. Escolha nomes significativos para suas variáveis e use o padrão camelCase.
5. Use `const` se o valor não mudará e `let` se precisar atualizá-lo no futuro.
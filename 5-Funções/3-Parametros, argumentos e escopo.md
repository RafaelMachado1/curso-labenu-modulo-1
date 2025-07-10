# Parâmetros, argumentos e escopo

Funções podem receber **entradas**, e caso recebam, essas entradas devem ser usadas no bloco do código dentro da função.

![Untitled](./img%20e%20vídeo/Untitled4.webp)

**Parâmetros** são como **variáveis** criadas na **declaração** da função, em que podemos guardar os argumentos (valores) a serem enviados para a função.

**Argumentos** são os **valores** (strings, numbers, booleanos) passados na **chamada** da função. Cada parâmetro recebe seu valor dos argumentos, seguindo a mesma ordem colocada entre parênteses.

Na prática, os **valores** passados como argumento substituirão as variáveis que estão como **parâmetros** na **declaração** da função.

## Escopo

O escopo determina **quais variáveis serão acessíveis** ao rodarmos o código.

No Javascript temos dois tipos de escopo:

- **Escopo Global**: variáveis no escopo global podem ser acessadas de qualquer lugar do código.
- **Escopo Local**: variáveis no escopo local somente podem ser acessadas **dentro do escopo em que foram declaradas**.

As variáveis definidas dentro de uma **função** possuem **escopo local**

![Untitled](./img%20e%20vídeo/Untitled5.webp)

![Untitled](./img%20e%20vídeo/Untitled6.webp)

![Untitled](./img%20e%20vídeo/Untitled7.webp)

## E, se eu quiser utilizar o resultado de uma função sem utilizar o `console.log`? Confira abaixo 👇🏽

## Retornando valores

Funções podem gerar **saídas**, que podem ser acessadas após a execução:

![Untitled](./img%20e%20vídeo/Untitled8.webp)

- O **envio de uma saída** (chamamos de ***retorno***) acontece usando a palavra chave **`*return*`**, seguida pela variável/valor a ser retornado.
- Uma função só pode retornar **um valor**.
- Quando a função retorna algo, sua **execução é** **interrompida**.

Ou seja, se houver algum código escrito, dentro da função, após o **`return`**, esse código não será executado.

### Imprimir ou retornar?

Quando pede-se para imprimir algo, utilizamos o **`console.log()`.** Quando pede-se para retornar algo, utilizamos o **`return`**.

### Para guardar na cabeça

Uma função opera como uma **caixa preta** que pode receber **valores de entrada** (input/parâmetros/argumentos) e pode devolver **valores de saída** (output/resultado).

`entrada => corpo da função => saída`

### Vídeo complementar:

[parâmetros, Argumentos e Escop.mp4](./img%20e%20vídeo/parâmetros,%20Argumentos%20e%20Escop.mp4)
# Declarando e chamando funções em JS

### Declarando funções

O primeiro passo para criar uma função é **declará-la.**

A declaração **atribui** um **bloco de código a** um **identificador** (ou um nome). O bloco de código é escrito entre **chaves** `{}`. 

![Untitled](./img%20e%20vídeo/Untitled2.webp)

Esta função executará o código entre as chaves quando for **chamada**.

No caso da nossa função de calcular a área de um retângulo, a declaração da função seria algo como:

```jsx
function calcularArea(altura, largura) {
	const area = altura*largura;
	console.log(area);
}
```

### Onde:

- **`function`** e **`calcularArea`** são a **indicação de declaração** e o **identificador da função**, respectivamente;
- **`altura`** e **`largura`**, que estão entre os parênteses, são os **parâmetros**, isto é, os valores que serão utilizados dentro do corpo da função;
- **`const area = altura*largura`** e **`console.log(area)`** são o **corpo da função**. A lógica propriamente dita;

### Chamando funções

Podemos chamar, invocar ou executar uma função usando o seu identificador. Quando fazemos isso, o bloco de código definido na **declaração** é executado. Toda vez que o código encontrar uma chamada da função, o bloco entre as chaves da declaração será executado.

![Untitled](./img%20e%20vídeo/Untitled3.webp)

Então, para resumir:

- Só declarar a função **não executa** o código;
- Você pode **chamar/invocar** e **executar** a função quantas vezes quiser;
- O JavaScript permite executar a função **antes** da sua declaração. Porém, isso deixa o código confuso, **evite**;
- Priorize declarar a função primeiro, e posteriormente executa-lá.

### Vídeo complementar:

[Declaracao_e_Invocacao_de_Funcoe.mp4](./img%20e%20vídeo/Declaracao_e_Invocacao_de_Funcoe.mp4)

No próximo conteúdo, vamos olhar em detalhes os **argumentos** e **parâmetros** das funções.

# Resumo

| Tópico | Dica |
| --- | --- |
| Declaração de função | Use a palavra-chave `function` seguida do identificador da função e escreva o bloco de código entre chaves `{}`. |
| Parâmetros | Defina os parâmetros dentro dos parênteses da declaração da função. |
| Corpo da função | Escreva o código a ser executado entre as chaves `{}`. É nesse bloco que a lógica da função é implementada. |
| Chamada de função | Para executar o código de uma função, utilize seu identificador (nome da função) seguido de parênteses contendo os valores dos argumentos. |
| Boas práticas | Declare a função antes de executá-la e evite executá-la antes de sua declaração para manter a legibilidade do código. |
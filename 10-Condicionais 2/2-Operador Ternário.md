# Operador Ternário

O operador ternário é usando como **um atalho** para escrever uma estrutura `if`. Ele nos permite tomar decisões com base em uma condição e retornar um valor específico dependendo do resultado dessa condição. Podemos pensar no operador ternário como uma pergunta com duas opções de resposta.

A estrutura básica do operador ternário é a seguinte:

```jsx
condicao ? valorSeVerdadeiro : valorSeFalso;

```

A `condicao` é uma expressão que será avaliada como verdadeira ou falsa. Se a `condicao` for verdadeira, o valor após o ponto de interrogação (`?`) será retornado. Caso contrário, o valor após os dois pontos (`:`) será retornado.

![Untitled](./img%20e%20vídeos/Untitled.webp)

Vamos ver um exemplo para entender melhor. 

- Suponha que temos uma variável chamada `idade` e queremos verificar se uma pessoa é maior de idade.
- Se sim, queremos imprimir o valor "Maior de idade", caso contrário, queremos imprimir o valor "Menor de idade".

```jsx
let idade = 20;

idade >= 18 ? console.log("Maior de idade" ): console.log("Menor de idade" );

```

<aside>
💡 O operador ternário pode ser muito útil para escrever decisões simples de forma mais concisa. No entanto, é **importante usá-lo com moderação** e garantir que o código seja fácil de entender para outras pessoas que possam ler o seu código.

</aside>

## Video Complementar

[Ternário-condicionais.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a97818fc-2816-41a5-815c-075edb8e9ebd/Ternrio-condicionais.mp4)

# Resumo

1. O operador ternário é um atalho para escrever uma estrutura **`if-else`**.
2. Ele permite tomar decisões com base em uma condição e retornar um valor específico.
3. Sua estrutura básica é **`condicao ? valorSeVerdadeiro : valorSeFalso`**.
4. É útil quando temos decisões simples e queremos escrever código de forma mais concisa.
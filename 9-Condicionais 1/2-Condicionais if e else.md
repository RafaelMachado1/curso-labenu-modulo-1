# Condicionais if e else

As condicionais `if` e `else` são estruturas utilizadas para tomar decisões em JavaScript. Vamos explicar cada uma delas com exemplos para facilitar a compreensão:

## If

O `if` é a estrutura condicional mais simples. Ele funciona da seguinte forma:

```jsx
if (condicao) {
  // Código a ser executado **se** a condição for verdadeira
}

```

Aqui, **"condicao"** é uma variável que representa um valor booleano que será avaliada. Se o resultado for verdadeiro(`true`), o código dentro do bloco do `if` será executado. Caso contrário, o código será ignorado.

Exemplo:

```jsx
let estaChovendo = true;

if (estaChovendo) {
  console.log("Levo o guarda-chuva");
}

```

Neste exemplo, se o valor da variável "estaChovendo " for `true`, a mensagem "Levo o guarda-chuva" será exibida no console.

## If/Else

O if/else é uma estrutura que permite especificar duas ações diferentes, dependendo do resultado da condição. 

Funciona assim:

```jsx
if (condicao) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}

```

Aqui, se a condição for verdadeira(`true`), o código dentro do bloco do `if` será executado. Caso contrário, o código dentro do bloco do `else`será executado.

Exemplo:

```jsx
let estaChovendo = true;

if (estaChovendo ) {
  console.log("Levo o guarda-chuva");
} else {
  console.log("Levo os óculos de sol");
}

console.log("Continuo o passeio");

//**if** = Se
//**else** = Se não
```

Neste exemplo, se a variável "estaChovendo" for **`true**`  a mensagem "Levo o guarda-chuva" será exibida. Caso for **`false`**,  o bloco dentro do **`else`** será executado e a  mensagem "Levo o guarda-chuva" será exibida.

Veja esse mesmo exemplo no fluxograma abaixo:

![Untitled](./img%20e%20vídeos/Untitled7.webp)

## Video complementar

[if-else.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38a0189f-bf58-469a-bc73-2bc8783ea46b/if-else.mp4)

## **Else if**

Além do `if` e `else`, também podemos usar a estrutura `else if` para adicionar mais condições à sequência de decisões. O `else if` é utilizado quando queremos avaliar uma condição adicional caso a condição anterior seja falsa. 

Funciona assim:

```jsx

if (condicao1) {
  // Código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
	// Código a ser executado se a condição1 for false e condição2 for verdadeira
} else {
	// Código a ser executado se nenhum das condições forem verdadeiras
}
```

Veja o exemplo a seguir:

```jsx
const nota = 75;

if (nota >= 90) {
  console.log("Sua nota é A");
} else if (nota >= 80) {
  console.log("Sua nota é B");
} else {
  console.log("Sua nota é C");
}
```

Neste exemplo, o código avalia a variável "nota" e imprime uma mensagem dependendo do valor. Se a nota for maior ou igual a 90, é exibida a mensagem "Sua nota é A". Se a nota estiver entre 80 e 89, é exibida a mensagem "Sua nota é B". Caso contrário, é exibida a mensagem "Sua nota é C".

![Untitled](./img%20e%20vídeos/Untitled8.webp)

# Resumo

1. A estrutura condicional `if` é utilizada para executar um bloco de código se uma condição for `true`.
2. O bloco "if/else" permite especificar duas ações diferentes, dependendo do resultado da condição. O bloco "if" é executado se a condição for `true`caso contrário, o bloco `else` é executado.
3. A estrutura `else if` é usada para adicionar condições adicionais à sequência de decisões. Ela é avaliada somente se a condição anterior for `false`.
4. É importante entender que as condições são avaliadas em sequência e apenas o bloco de código correspondente à primeira condição verdadeira é executado.
# Operadores relacionais em JS

Em JavaScript, os operadores relacionais são usados para comparar valores e determinar a relação entre eles. Esses operadores retornam um valor booleano, ou seja, verdadeiro ou falso, com base na comparação realizada.

- Operadores Relacionais (ou **Comparadores**) são operadores que permitem comparar valores de variáveis.
- O resultado de uma operação relacional sempre é um valor **booleano**, que diz se a comparação é verdadeira (**true**) ou falsa (**false**).

Aqui estão os operadores relacionais mais comuns em JavaScript:

![Untitled](./img%20e%20videos/Untitled3.webp)

### **Exemplos:**

### Igual (`===`)

```jsx
"1" === "2"// **false**, são diferentes
"2" === "2"// **true**, são iguais
  2 === "2"// **false**, tipo primitivo diferente
```

![Untitled](./img%20e%20videos/Untitled4.webp)

### Diferente(`!==`)

```jsx

```

### Maior(`>`)

```jsx
1 > 2 // **false**, porque 1 é menor que 2
2 > 2 // **false**, porque 2 é igual a 2
3 > 2 // **true**, porque 3 é maior que 2
```

### Menor(`<`)

```jsx
1 < 2 // **true**, porque 1 é menor que 2
2 < 2 // **false**, porque 2 é igual a 2
3 < 2 // **false**, porque 3 é maior que 2
```

### Maior ou igual (`>=`)

```jsx
1 >= 2 // **false**, porque 1 é menor que 2
2 >= 2 // **true**, porque 2 é igual a 2
3 >= 2 // **true**, porque 3 é maior que 2
```

### Menor ou igual (`>=`)

```jsx
1 <= 2 // **true**, porque 1 é menor que 2
2 <= 2 // **true**, porque 2 é igual a 2
3 <= 2 // **false**, porque 3 é maior que 2
```

### Misturando os operadores com variáveis

```jsx
let idade = 18;
let maiorDeIdade = idade >= 18; // verifica se a idade é maior ou igual a 18. guarda o resultado na variável **maiorDeIdade**

let menorDeIdade = idade < 18;//verifica se a idade é menor que 18.guarda o resultado na variável **menorDeIdade**

console.log(maiorDeIdade); // Resultado: true
console.log(menorDeIdade); // Resultado: false
console.log(idade === 18); // Resultado: true
console.log(idade !== 18); // Resultado: false

```

## Vídeo complementar

[Operadores Relacionais.mp4](./img%20e%20videos/Operadores%20Relacionais.mp4)

# Resumo

1. Os operadores relacionais são usados para comparar valores em JavaScript.
2. O resultado de uma operação relacional é sempre um valor booleano: verdadeiro (true) ou falso (false).
3. Os operadores relacionais mais comuns em JavaScript são: igual (===), diferente (!==), maior (>), menor (<), maior ou igual (>=) e menor ou igual (<=).
4. É possível comparar diferentes tipos de dados, mas a comparação também leva em consideração o tipo dos valores.
5. Os operadores relacionais podem ser utilizados com variáveis para realizar comparações e armazenar o resultado em outras variáveis.
# Notion com exemplos

Veja exemplos de operações com os operadores aritméticos (+, -, *, /), relacionais (>, <, >=, <=, ==, !=) e lógicos (&&, ||, !). Aqui será mostrado como é possível combinar esses operadores para criar expressões mais complexas. Além disso é explicado como é possível resolver uma expressão complexa passo a passo, substituindo as operações menores pelos seus resultados, até chegar ao resultado final.

# Operadores aritméticos

```jsx
//exemplos de operações possíveis com operadores aritméticos:

const soma = 7 + 9;
console.log(soma); // imprime 16

const multiplicacaoESoma = 7 + 9 * 2;
console.log(multiplicacaoESoma); // imprime 25

const somaEMultiplicacao = (7 + 9) * 2;
console.log(somaEMultiplicacao); // imprime 32 (parênteses dão prioridade para a soma)

```

# Operadores relacionais

```jsx
console.log(2 > 2); //imprime false
console.log(2 <= 2); //imprime true

const meuBooleano = 3 === "3";
console.log(meuBooleano); //imprime false
```

# Operadores lógicos

```jsx
const meuE = true && false;
console.log(meuE);//imprime false

const meuOu = true || false;
console.log(meuOu); //imprime true

const minhaNegacao1 = !meuE;
console.log(minhaNegacao1); //imprime true

const minhaNegacao2 = !meuOu;
console.log(minhaNegacao2); //imprime false

const negandoFator = true && !meuOu;
//meuOu vale true, portanto !meuOu vale false
console.log(negandoFator);//temos true && false, portanto imprime false

const multiplasOperacoes = true && false && true;
//sabemos que para que uma operação lógica && devolva true,
//todos os seus fatores devem ser true. Aqui, temos um fator false,
//portanto, nosso resultado será false

const multiplasOperacoes = true && false || true;
//neste caso, como temos um || (ou) na operação, o retorno será true, porque
//todas as combinações geram true 
//(true && false) || true = true
//true && (false || true) = true
```

# Combinando tudo

```jsx
const relacaoELogica = ((2+2) < 5) && (6 > 3);
```

Aqui um exemplo mais complexo! Vamos dissecar o código acima, quebrando ele em partes:

temos quatro operações acontecendo:

- `2+2`
- `(2+2) < 5;`
- `6 > 3;`
- `((2+2) < 5) && (6 > 3);`

Podemos resolver esta operação resolvendo as operações menores, e colocando os resultados no lugar das operações. Vamos lá!

Primeiro, temos o 2+2, que como sabemos, vale 4. Então podemos substituir aqui embaixo:

```jsx
(4 < 5) && (6 > 3);
```

Uma operação a menos! Já ficou mais fácil. Agora, vamos resolver as operações relacionais (ou de comparação).

Començando por: **`4 < 5`**. **4** é de fato menor que **5**. Com isso, sabemos que esta operação resulta no booleano **`true`**. 

Depois, temos **`6 > 3`**. **6** é maior que **3**, então também temos um booleano **`true`** por aqui.

Substituindo nossas descobertas na operação, temos algo como:

```jsx
(true) && (true);
```

Olha só, agora já temos uma operação lógica de && simples. No material de operadores lógicos, lembramos que true && true sempre é true.

Então, podemos concluir que `((2+2) < 5) && (6 > 3)`vale **true**!

## Vídeo complementar

https://vimeo.com/808049563/b581634818
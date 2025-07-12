# Exemplos de Laços em JS - I

# Laços while

O exemplo abaixo usa uma string como parâmetro de **verificação de continuação**. O programa faz uma pergunta, e guarda o valor em`resposta`. 

Enquanto `resposta` for diferente de `“limão”`, o laço vai se repetir, exibindo o `console.log()` e fazendo novamente a pergunta do prompt, atualizando o valor da let `resposta`. 

Quando o valor não for mais **diferente de `limão`**, o programa sairá do laço, imprimindo  `"Exato, é um limão!"`

```jsx
let resposta = prompt("Qual é o nome da fruta cítrica verde e azeda?")

while(resposta !== "limão"){
	console.log("Resposta incorreta, vamos tentar de novo!")
  resposta = prompt("Qual é o nome da fruta cítrica verde e azeda?")
}

console.log("Exato, é um limão!")
```

# Laços for

O primeiro exemplo abaixo imprime a **tabuada do 6** no console, **iniciando em 1** e **terminando em 10**. 
O segundo exemplo **também imprime a tabuada do 6**, mas **observe**! Dessa vez, a tabuada **começa no 0** e **termina no 9**.

<aside>
😉 Dê uma olhada no console para ter certeza de que o que explicamos acima é realmente verdadeiro!

</aside>

Por que isso acontece?

Temos dois motivos para analisar:

**a)** O nosso contador, apelidado de **`i`** ,  começa valendo **1** no primeiro laço, e valendo **0** no segundo laço. Essa diferença gera mudanças no início de cada laço (ou seja, o primeiro laço inicia com `6 * 1` e o segundo laço, com `6 * 0`).

**b)** A condição de verificação também difere entre um laço e outro. No primeiro laço, `i ≤ 10`, ou seja, o número 10 ainda está dentro da possibilidade de continuação. Já no segundo laço, `i < 10`, o que faz com que nossa verificação de continuação seja atendida apenas até `i = 9`.

```jsx
for(let i = 1; i <= 10; i++){
	console.log(`6 x ${i} = ${6*i}`)
}

for(let i = 0; i < 10; i++){
	console.log(`6 x ${i} = ${6*i}`)
}
```

## Laços for percorrendo arrays

Laços são muito úteis para percorrer arrays, porque podemos passar nosso **contador** no lugar do **índice** dos arrays. Nesse caso, é muito útil manter nosso contador se iniciando em 0, visto que os arrays sempre começam seus índices com 0.

Outra possibilidade muito interessante que os arrays nos dão ao interagir com laços, é o de deixar nossa verificação de continuação mais dinâmica. Podemos utilizar a propriedade **length** do array para determinar o número que pára a repetição, como no exemplo abaixo.

```jsx
const meuArray = [2, 4, 6, 8, 10]

for(let i = 0; i < meuArray**.length**; i++){ //usando o .length ao invés de 5, que é o número de itens do array)
  console.log(meuArray[i]
}
```

Compare isso com imprimir cada valor individualmente:

```jsx
const meuArray = [2, 4, 6, 8, 10]

  console.log(meuArray[0]
  console.log(meuArray[1]
  console.log(meuArray[2]
  console.log(meuArray[3]
  console.log(meuArray[4]
```

Além de termos escrito mais linhas, no caso de adição ou remoção de itens do array, teremos que reescrever muito mais código.
# Funções de Array

Sabemos que é possível iterar sobre arrays usando loops como **`for`**, **`while`**, **`for...of`**, porém, existem funções específicas para arrays que facilitam a leitura deles e a realização de operações nos seus itens. Neste conteúdo, vamos apresentar dois desses métodos que só podem ser usados em arrays: **`map()`**e **`filter()`. 

Para tornar o conceito mais claro, podemos utilizar a seguinte analogia:**

Imagine que você tem uma caixa com várias frutas diferentes e quer separá-las em uma caixa só com frutas amarelas.

![caixa de fruta original.png](./img%20e%20vídeos/caixa_de_fruta_original.webp)

A função **`map()`** seria como você pegar cada fruta da caixa original, verificar qual é a sua cor e altera-la. No final, você teria a caixa separada com as frutas da cor desejada.

![Untitled](./img%20e%20vídeos/Untitled.webp)

Já a função **`filter()`** seria como você pegar a caixa original e remover todas as frutas que não têm a cor desejada, deixando apenas as frutas com a cor  que você quer na nova caixa.

![Untitled](./img%20e%20vídeos/Untitled1.webp)

Dessa forma, a função **`map()`** serve para **transformar cada elemento do array em outro elemento**, enquanto a função **`filter()`** serve para filtrar apenas os elementos que atendem a determinada condição. 

[](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e)

## `map()`

https://www.canva.com/design/DAFCUAW2VEU/view

### Estrutura do `map`

![Untitled](./img%20e%20vídeos/Untitled2.webp)

```jsx
const pokemons = [
		{nome: "Bulbasaur", tipo: "grama"},
		{nome: "Bellsprout", tipo: "grama"},
		{nome: "Charmander", tipo: "fogo"},
		{nome: "Vulpix", tipo: "fogo"},
		{nome: "Squirtle", tipo: "água"},
		{nome: "Psyduck", tipo: "água"}
]
//nova variável declarada para receber o retorno do map
const nomeDosPokemons = pokemons.map((pokemon, indice, array) =>{
		return pokemon.nome //aqui é definido que o array nomeDosPokemons recebe só o nome
})

//Reforçando a sintaxe:
const novoArray = array.**map**((**parametros**) => {
		//o que precisa ser feito com os parâmetros, como retornar, imprimir, etc.
})

//os parâmetros do map serão **sempre** na seguinte ordem, 
//precisando ser chamado apenas os que serão usados:
array.**map**(**(elemento, indice, array)**=>{})
```

## Vídeo complementar:

[map.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f27c7f1d-1840-4252-8ce8-4a62a246d19b/map.mp4)

## `filter()`

**Definição:** filter significa "filtrar"

**Utilização:** quando queremos criar um NOVO array retirando (ou não) alguns itens do array original

**Output/resultado:** um novo array com tamanho **igual ou menor** ao tamanho do array original

- Precisamos guardar esse array em algum lugar!

**Input/parâmetros:** somente uma função de callback

**O callBack pode receber três parâmetros:**

- primeiro: corresponde ao valor do elemento do array naquela etapa do loop (**item**)
- segundo: o valor do índice daquele elemento (**index**)
- terceiro: o array original em si (**array**)

Esta função deve **retornar** um **boleano** (`true`/`false`)

### Estrutura do `filter`

![Untitled](./img%20e%20vídeos/Untitled3.webp)

Vamos novamente para o exemplo com o array de Pokemons

```jsx
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

const apenasPokemonsDeGrama = pokemons.filter((pokemon, indice, array) => {
   return pokemon.tipo === "grama"
});
```

Veja que o que a função faz é percorrer o array, e com isso, criar um **novo array**, que contenha apenas os itens que atendam à condição que está na linha do return (neste caso, o valor da propriedade `tipo` do pokemon deve ser igual a “grama”. 

O retorno desta função será um array composto por todos os objetos do array que atenderam ao operador booleano.

```jsx
//Reforçando a sintaxe:
const novoArray = array.filter((parametro) => {
		//o que precisa ser feito com os parâmetros, como comparar com alguma condição,
		//retornar, imprimir, etc.
})

//os parâmetros do filter, assim como no map serão **sempre** na seguinte ordem, 
//precisando ser chamado apenas os que serão usados:
array.filter(**(elemento, indice, array)**=>{
		//por exemplo, se temos uma condição, ficaria assim:
		return elemento === condicao
})
```

## Vídeo complementar:

[Filter .mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d246a34a-f7f7-445e-b8b5-b2b465f58129/Filter_.mp4)

### Abaixo, as implementações de cada uma das funções de array que usamos de exemplo:

[WNzLGeP](https://codepen.io/jvalves-labenu/pen/WNzLGeP)

# Resumo

1. Existem funções específicas para arrays que facilitam a leitura deles e a realização de operações nos seus itens, como **`map()`** e **`filter()`**.
2. **`map()`** serve para **transformar** cada elemento do array em outro elemento, enquanto **`filter()`** serve para **filtrar** apenas os elementos que atendem a determinada condição.
3. A função **`map()`** e a **`filter()`**  recebem uma função de callback que tem como parâmetros o elemento, o índice e o array, e retorna um novo array.
4. A função **`map()`**retorna um novo array do mesmo tamanho do original, enquanto a função **`filter()`** retorna um novo array com tamanho igual ou menor, contendo apenas os elementos que atendem à condição especificada.
5. Em ambas as funções o retorno das operações devem ser armazenadas em novas variáveis.
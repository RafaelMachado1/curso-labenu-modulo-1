# Flex containers

O primeiro passo para começar a usar o flexbox é transformar um dos nossos elementos HTML em um contêiner flex. Fazemos isso com a propriedade `display`, que você deve lembrar pela nossa aula de CSS I. Dando o valor `flex` a esta propriedade, dizemos ao navegador de internet que tudo que estiver aninhado naquele elemento deve ser exibido com flexbox, em vez do box-model padrão.

Adicione a linha `display: flex;` ao seu seletor para transformá-lo em um flex container.

```css
div{
	display: flex;
}

.meu-container{
	display: flex;
}

#container{
	display: flex;
}
```

# Orientação do alinhamento em flexbox

O display **flex** é o que chamamos de ferramenta **unidirecional**, isto é, nossos elementos são dispostos em apenas uma direção por vez. Na separação flex padrão, nós temos o que é chamado de **eixo principal** (ou *main axis*) e o **eixo transversal** (ou *cross axis*).

![Untitled](./img/image%204.png)

## Alterando a direção dos eixos no flex

“Direção” se refere ao trecho em que apontamos que o flexbox é uma ferramenta **unidirecional**. Quando nos referimos a direção no flex, queremos saber se o contêiner deve exibir os itens horizontalmente ou verticalmente. Até aqui, estávamos usando os eixos padrão, que mantém a direção horizontal como a principal. Com isso, os itens são sempre exibidos lado a lado, na mesma linha. Uma das coisas mais incríveis do flexbox é que ele consegue transformar linhas em colunas com apenas uma linha de CSS, ao adicionar a propriedade `flex-direction`.

Aqui, os valores possíveis de `flex-direction` são:

- `row` → *linha* (padrão)
- `row-reverse` → *linha reversa*
- `column` → *coluna*
- `column-reverse` → *coluna reversa*

![Untitled](./img/image%205.png)

# Alinhando contêineres flex

Para alinhar os itens do **eixo principal** de um *flex container*, nós utilizamos a propriedade `justify-content`. Podemos usar essa propriedade para centralizar os itens do nosso `#container` do exemplo ali em cima! Seria algo assim:

```css
#container{
	display: flex;
  justify-content: center;
}
```

Isso tem o mesmo efeito de adicionar um `margin: 0 auto` ao elemento `#container`. Mas, diferentemente de usar margins, perceba como fizemos isso adicionando uma propriedade ao **elemento pai** (o contêiner flex) ao invés de aplicar diretamente ao elemento que queremos centralizar (o item flex). Manipular os itens através de seus contêineres, como fizemos, é uma forma comum no flexbox, e é diferente do que vimos até aqui.

Outros valores possíveis para a propriedade `justify-content` são:

- `center`
- `flex-start`
- `flex-end`
- `space-around`
- `space-between`
- `space-evenly`

![Untitled](./img/image%206.png)

Os efeitos de `flex-start` e `flex-end` são parecidos com o `center`, e agrupam os itens do contêiner juntos, seja no começo do contêiner, no fim, ou no centro. Esses posicionamentos são possíveis de forma relativamente fácil utilizando o que já vimos em aulas de CSS anteriores. O flexbox mostra coisas novas quando temos vários itens dentro de um contêiner. Os valores `space-around`, `space-between` e `space-evenly` são os que conseguem mostrar bem os poderes do flex.

É importante frisar que contêineres flex movimentam e diagramam apenas os elementos que são seus **filhos diretos**. Isso significa que podemos agrupar elementos para nos ajudar a criar layouts. Um exemplo abaixo:

![Untitled](./img/image%207.png)

Até aqui, vimos a manipulação do alinhamento horizontal, **que era o eixo principal da nossa flexbox**. Porém, também podemos alterar o **alinhamento vertical** dos itens (neste caso, **o eixo transversal é o vertical**).

O alinhamento do eixo transversal, no caso, eixo vertical, é definido pela propriedade `align-items` de um **container flex**. As opções para o align-items são parecidas com as de justify-content. São elas:

- `center`
- `flex-start`
- `flex-end`
- `stretch`
- `baseline`

![Untitled](./img/image%208.png)

A maior parte dos valores é bem direta ao ponto. Os valores `stretch` e `baseline`valem uma explicação mais longa.

O valor **`stretch`** faz com que cada item do contêiner se estique até o máximo possível da altura do contêiner (quando nosso eixo principal é o horizontal), independentemente de quanto conteúdo exista dentro do elemento.

O `stretch` é o valor padrão do flexbox. Caso nenhum outro valor seja aplicado para `align-items`, ele entra em ação. No entanto, o `stretch` só funciona se houver espaço disponível para que esse elemento cresça. Caso o container tenha apenas o tamanho do conteúdo que existe dentro dele, não há como os itens se esticarem.

O valor **`baseline`** alinha os itens de acordo com a linha de base do texto de cada item, garantindo que o alinhamento aconteça entre o conteúdo dos elementos.

## Importante: considerações sobre alinhamento

Quando alteramos a **direção** de um container, também alteramos como as propriedades `justify-content` e `align-items` afetam nossos elementos. Ao trocar para `column`, por exemplo, `justify-content` gerencia a visualização vertical, e `align-items` gerencia a visualização **horizontal.**

Resumindo: podemos dizer que `justify-content` sempre cuida do **eixo principal** e `align-items` sempre cuida do **eixo transversal.**

![Untitled](./img/image%209.png)

# O flex wrap

O flexbox não apenas consegue exibir itens e alterar sua direção, ordem e tamanho, mas também consegue movê-los em relação ao espaço disponível. Com isso, conseguimos criar uma “visão de galeria”. Para isso, usamos a propriedade `flex-wrap`.

![Untitled](./img/image%2010.png)

Por padrão, todos os elementos vão ficar em uma mesma linha, saindo da área visível da página, se for necessário. Passando o valor `wrap` para a propriedade, os itens vão descer para as próximas linhas, quando não houver espaço na linha de cima. Os valores mais comuns para `flex-wrap` são:

- `nowrap` (padrão)
- `wrap`

# O flex gap

A propriedade `gap` controla explicitamente o espaço entre os itens de um flexbox. Uma coisa importante de se saber sobre o `gap` é que, diferente de margens, ele aplica o espaço apenas **entre os itens**, e não entre os itens e as bordas. Temos três formas possíveis de escrever o `gap`:

- `gap`
- `row-gap`
- `column-gap`

`row-gap` e `column-gap` definem o espaço entre linhas e colunas, especificamente. A propriedade `gap` combina as duas anteriores. Exemplo abaixo:

```css
.container {
  display: flex;
  gap: 10px; /*row-gap e column-gap valem 10px*/
		/* OU */
  gap: 10px 20px; /* row-gap 10px e column gap 20px;*/
		/* OU */
  row-gap: 10px;
		/* OU */
  column-gap: 20px;
}
```

## Video complementar

Faça o fork e clone do repositório ou baixe como zip para acompanhar a explicação da videoaula. 

[GitHub - labenuexercicios/flex-container-exemplo](https://github.com/labenuexercicios/flex-container-exemplo)

[flex-container-compress.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cfc2a41e-9fa3-42bc-afa8-d3b5f817803b/flex-container-compress.mp4)

# Resumo

1. O primeiro passo para usar o flexbox é transformar um elemento HTML em um contêiner flex usando a propriedade `display: flex;`
2. O display "flex" é uma ferramenta unidirecional, ou seja, os elementos são dispostos em apenas uma direção por vez.
3. Na separação flex padrão, existe um eixo principal e um eixo transversal.
4. É possível alterar a direção dos eixos no flex usando a propriedade `flex-direction.`
5. Para alinhar os itens do eixo principal de um flex container, é possível usar a propriedade `justify-content`.
6. É possível alterar o alinhamento vertical dos itens usando a propriedade `align-items`.
7. Contêineres flex movimentam apenas os elementos que são seus filhos diretos.
8. A propriedade **`flex-wrap`**pode ser usada para criar uma "visão de galeria" e permite que os itens sejam movidos em relação ao espaço disponível.
9.  A propriedade **`gap`** controla o espaço entre os itens de um flexbox.
10.  É possível definir o espaço entre as linhas e colunas separadamente usando as propriedades **`row-gap`** e **`column-gap`**.
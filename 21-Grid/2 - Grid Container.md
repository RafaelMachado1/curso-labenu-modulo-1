# Grid Container

# Propriedades do Grid container

Vamos começar definindo o que chamamos de **template** do Grid. Aqui, definimos quantas linhas e quantas colunas teremos, e quais são os seus tamanhos.

## `grid-template`

Para definir o template podemos usar as duas propriedades abaixo:

- `grid-template-rows`: Define a quantidade e tamanho das linhas;
- `grid-template-columns`: Define a quantidade e tamanho das colunas;
- `grid-template`: Versão resumida, que combina as duas propriedades anteriores;

Nesse momento é importante pensar em unidades de medida que ajudem a organizar o tamanho do grid desde o início. Podemos usar pixels, vw, e outras medidas que já vimos. No entanto, o grid tem uma medida muito interessante, pensada apenas para ele: o **`fr`.** `fr` representa uma **fração do espaço restante**. Primeiro os espaços com medidas fixas são definidos, e o que sobrar vai pro `fr`. Abaixo um exemplo, para visualizar melhor:

https://codepen.io/jvalves-labenu/pen/ZEoQZzj

Aqui, uma explicação mais detalhada sobre os tamanhos gerados:

O `container` do exemplo tem 500px x 500px. Sabendo disso, vamos entender o processo, começando pelas propriedades de template grid do contêiner:

![Untitled](./img/image%20copy.png)

Vamos primeiro entender a divisão das **linhas**. 

- 500px estão divididos em 4 partes (ou frações). A primeira linha ocupa 2fr, e cada uma das outras linhas ocupa 1fr. 500px/4 = 125px por fração
- Linha 1: 250px, pois são 2fr
- Linhas 2 e 3: 125px

Agora as **colunas:**

- Temos 500px, e uma das colunas está com valor em pixels. Primeiro resolvemos esta coluna, para dividir o restante em frações. Então 500-100=400px restantes;
- Agora temos 400px para dividir entre 2 partes. 400/2 = 200px cada fr
- Colunas 1 e 2: 200px (1fr)
- Coluna 3: 100px (fixo)

<aside>
💡 Não precisa se preocupar muito com as contas! Vá acompanhando o resultado na tela ao fazer, e alterando quando necessário

</aside>

## `justify-items`

O justify-items determina a posição dos elementos que estão no **eixo das linhas** do nosso grid.

Os valores possíveis para justify-items são:

- stretch (padrão)
- start
- end
- center

O `stretch` só é aplicado se o item do grid não tiver tamanho fixo.

Abaixo, visualizações dos diferentes valores:

![Untitled](./img/image%20copy%202.png)

## `align-items`

A propriedade align-items determina a posição dos elementos no eixo das **colunas** no nosso grid. Os valores possíveis são:

- **stretch (padrão)**
- start
- end
- center

![Untitled](./img/image%20copy%206.png)

## `grid-gap`

O grid gap determina um espaçamento entre as células do grid. Podemos indicar separadamente os espaçamentos entre linhas e entre colunas utilizando o `column-gap` e o `row-gap`, respectivamente.

Para o gap podemos usar qualquer tipo de unidade de medida, como  **px, rem**, porcentagens etc.

Olhemos para o grid abaixo para entender. Nele, o espaçamento entre as linhas é de 20 pixels, e o espaço entre as colunas é de 10px.

![Untitled](./img/image%20copy%204.png)

![Untitled](./img/image%20copy%207.png)

## Video Complementar

Faça o fork e clone do repositório ou baixe como zip para acompanhar a explicação da videoaula. 

[GitHub - labenuexercicios/grid-container-exemplo](https://github.com/labenuexercicios/grid-container-exemplo)

[Grid container.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d931c47-216a-4b07-a736-3071bc4c474e/Grid_container.mp4)
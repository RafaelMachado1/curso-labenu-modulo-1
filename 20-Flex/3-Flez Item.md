# Flex item

# Ordenando itens flex

Por padrão, os itens de um contêiner flex são dispostos na ordem em que estão escritos no HTML. No entanto, a propriedade `order` pode ser aplicada a um item, e alterar a ordem em que este item aparece no contêiner. O valor padrão para esta propriedade é `0`. Quanto maior o valor, mais para o final da lista estará o item.

![Untitled](./img/image%2011.png)

## Tamanhos de item no flexbox

Todos os exemplos até aqui foram com itens que tinham largura e altura fixa. Isso nos ajuda a entender os aspectos de posicionamento do flex. No entanto, outra característica, tão importante quanto, ainda não foi abordada. No flexbox, nós podemos definir medidas *flexíveis* para os elementos do nosso contêiner.

![Untitled](./img/image%2012.png)

As propriedades `flex-grow`, `flex-shrink` e `flex-basis` definem a dimensão de itens individualmente dentro de um contêiner flex. Ou melhor, permitem que os itens tenham dimensões flexíveis. Funciona como uma espécie de “peso”, que diz ao contêiner como ele deve distribuir o espaço restante dentro do contêiner. Por exemplo, um item com “flex 2” crescerá com o dobro da velocidade de um item com “flex 1”. Vamos falar de cada um dos itens, e depois explicar uma forma resumida de lidar com eles:

**`flex-grow`** define a capacidade de um item flex de **crescer**, caso seja necessário. Esta propriedade aceita qualquer valor numérico - sem necessidade de nenhuma unidade de medida - que serve como a proporção do crescimento. Caso todos os itens tenham **1** como valor de flex-grow, todo o espaço restante no contêiner será distribuído igualmente entre os itens. Se um dos itens tiver valor 2, crescerá o dobro do tamanho dos outros itens (ou tentará, ao menos).

**`flex-shrink`** define a capacidade de um item **diminuir** se necessário.

**`flex-basis`** define o tamanho padrão de um elemento antes de o espaço restante ser distribuído. Este valor pode ser um tamanho (20%, 50px etc), ou alguma das palavras reservadas para isso.

Podemos juntar as três características numa mesma propriedade, utilizando a propriedade `flex`. O valor padrão para todos os valores é 0, e a ordem é a mesma apresentada acima

1. flex-grow
2. flex-shrink
3. flex-basis

O segundo e o terceiro parâmetros (flex-shrink e flex-basis) são opcionais!

## Alinhamento de itens individuais

Podemos **sobrescrever** as regras definidas pela propriedade **align-items** do contêiner. Para isso, devemos utilizar a propriedade **align-self** no **item do contêiner** que queremos realinhar individualmente. Os valores possíveis para align-self são exatamente os mesmos que estão disponíveis para align-items, mas só afetam o item que recebeu a propriedade.

![Untitled](./img/image%2013.png)

## Video complementar

Faça o fork e clone do repositório ou baixe como zip para acompanhar a explicação da videoaula. 

[GitHub - labenuexercicios/flex-item-exemplo](https://github.com/labenuexercicios/flex-item-exemplo)

[Flex-item .mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57dba5f9-542e-4000-887c-074f899d6dc2/Flex-item_.mp4)

# Sumário

O conteúdo até aqui teve **bastante coisa nova!** Então vamos deixar aqui um resumão de tudo que foi passado até aqui:

- Use `display: flex;` para criar um contêiner flex.
- Use `justify-content` para definir o alinhamento do eixo principal.
- Use `align-items` para definir o alinhamento do eixo transversal
- Use `flex-direction`para mudar entre linhas e colunas.
- Use  `row-reverse` ou `column-reverse` para inverter a ordem nas linhas e colunas
- Use `order` para personalizar a ordem dos elementos
- Use `align-self` para alinhar elementos individuais no eixo transversal.
- Use `flex` para criar caixas que podem mudar de tamanho, crescendo ou encolhendo

Lembre-se que tudo isso são formas de dizer para o navegador como ele deve exibir elementos HTML. A parte mais complicada vem antes de escrever, é a parte de entender, conceitualmente, o layout da página, e os comportamentos que devem ser definidos para os contêineres e elementos.

Quando um time de design te entregar um *mock* de como a página deve ficar, sua primeira tarefa deve ser desenhar um monte de caixinhas, e pensar em como elas devem se tocar, se empilhar, esticar, encolher etc. Com isso feito, aí sim devemos usar as técnicas aprendidas neste documento.
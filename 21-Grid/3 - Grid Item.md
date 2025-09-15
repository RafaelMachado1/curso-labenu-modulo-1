# Grid item

# Propriedades dos itens do Grid

Assim como no flexbox, aqui também podemos sobrescrever as propriedades do contêiner em itens específicos do grid. Para isso, veremos três propriedades principais. São elas:

- justify-self
- align-self
- grid-row e grid-column

### `justify-self`

Determina a disposição do elemento em relação às **linhas**, sobrescrevendo o **justify-items.** Os valores possíveis são os mesmos do justify-items

![justify-self.png](./img/image%20copy%208.png)

### `align-self`

Determina a disposição do elemento em relação às **colunas**, sobrescrevendo o **align-items.** Os valores possíveis são os mesmos do align-items.

![align-self.png](./img/image%20copy%209.png)

### grid-row e grid-column

Definem em quais divisórias do grid um determinado item começa e termina. Alguns itens importantes:

- Divisórias são as **divisões da malha**
- **Colunas são numeradas da esquerda para a direita**
- **Linhas são numeradas de cima para baixo**
- Numeração começa por 1

Olhando para esta referência, nosso grid teria as numerações abaixo:

![Untitled](./img/image%20copy%2010.png)

Para escrever os valores destas propriedades, temos duas possibilidades:

- Número da divisória de início e número da divisória de final separados por uma barra
    - `grid-column: 2 / 4`
- Número da divisória de início e a palavra chave `span`, com um número que determina quantas células serão ocupadas
    - `grid-column: 2 / span 3`

Abaixo, um exemplo de como esta propriedade se comporta no CSS

![Untitled](./img/image%20copy%2011.png)

Um caso de uso muito comum para este tipo de grid são **mosaicos**, como este:

![Untitled](./img/image%20copy%2012.png)

Por trás deste mosaico, temos um Grid de 8 colunas e 7 linhas.

![Untitled](./img/image%20copy%2013.png)

## Video Complementar

Faça o fork e clone do repositório ou baixe como zip para acompanhar a explicação da videoaula. 

[GitHub - labenuexercicios/grid-item-exemplo](https://github.com/labenuexercicios/grid-item-exemplo)

[Grid item .mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba33acd8-620b-4434-b897-0064f35701e6/Grid_item_.mp4)

# Sumário

O conteúdo até aqui teve **bastante coisa nova!** Então vamos deixar aqui um resumão de tudo que foi passado até aqui:

- Use `display: grid;` para criar um grid.
- Use `grid-template` para definir quantas colunas e linhas existirão, e quais serão seus tamanhos.
- Use `fr` para usar **frações** de tamanho do grid, para dividir os espaços igualmente.
- Use `justify-items` para definir o alinhamento das linhas.
- Use `align-items` para definir o alinhamento das colunas.
- Use `grid-gap` para criar espaços entre os itens do contêiner
- Use `justify-self` para alinhar elementos individuais no eixo das linhas.
- Use `align-self` para alinhar elementos individuais no eixo das colunas.
- Use `grid-row` e `grid-column` para definir tamanhos personalizados dentro de um grid existente.

Novamente, lembre-se que tudo isso são formas de dizer para o navegador como ele deve exibir elementos HTML. A parte mais complicada vem antes de escrever, é a parte de entender, conceitualmente, o layout da página, e os comportamentos que devem ser definidos para a disposição dos itens.

Quando um time de design te entregar um *mock(simulado)* de como a página deve ficar, sua primeira tarefa deve ser desenhar um monte de caixinhas, e pensar em como elas devem se tocar, se empilhar, esticar, encolher etc. Com isso feito, aí sim devemos usar as técnicas aprendidas neste documento.

Além disso, lembre-se que Grid e Flex não são **competidores**, e sim **complementares**. Nós podemos usar ambos ao mesmo tempo em nossos projetos!
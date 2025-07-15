# Posicionamento de elementos

# Propriedades de posição

A propriedade **position** nos permite indicar como queremos que os elementos se posicionem na página. Existem cinco valores possíveis para a propriedade position. Vamos detalhar cada um deles:

### `static`

É a posição padrão do CSS para todos os elementos. Ele segue o fluxo normal de posicionamento de acordo com a ordem dos elementos no HTML. Se houver um elemento block no HTML e logo abaixo outro, esses elementos serão exibidos um abaixo do outro na tela.

### `relative`

Ele continua seguindo o fluxo normal de posicionamento, mas podemos utilizar as propriedades**`top`**, **`bottom`**, **`left`** e **`right`** para deslocar o elemento em relação à sua posição natural (static).

### `fixed`

Retira o elemento do fluxo normal e o posiciona em relação à tela inteira, que chamamos de viewport. Utilizamos as propriedades **`top`**, **`bottom`**, **`left`** e **`right`**para posicionar o elemento.

### `absolute`

Retira o elemento do fluxo natural e o posiciona em relação a outro elemento *relative*
 que o envolve. Utilizamos as propriedades **`top`**, **`bottom`**, **`left`** e **`right`** para posicionar o elemento.

### `sticky`

Posiciona o elemento de tal forma que a rolagem da tela ocorre até que o elemento atinja uma posição específica na tela. Quando isso acontece, o elemento "gruda" na tela. Para indicar onde ele deve "grudar", usamos as propriedades **`top`**, **`bottom`**, **`left`** e **`right`**.

### Propriedades e valores

As propriedades **`top`**, **`bottom`**, **`left`** e **`right`** são utilizadas em conjunto com as **propriedades de posição** para indicar a posição exata de um elemento na página.

- Os valores para **`top`** e **`bottom`** são valores de distância vertical em relação à parte superior e inferior do elemento pai, respectivamente.
- Os valores para **`left`** e **`right`** são valores de distância horizontal em relação à margem esquerda e direita do elemento pai, respectivamente.

**Exemplo no Codepen ilustrando as formas de position**

https://codepen.io/jvalves-labenu/pen/NWMxYdr

## Video complementar

[CSS2_-_Posicionamento.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2197e670-931a-4025-92ef-31d976941d5d/CSS2_-_Posicionamento.mp4)

## Video sobre o `Sticky`

[Sticky.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c48314a-d28f-43a5-ae9d-b78300cb414d/Sticky.mp4)

# Centralização

Centralização é um assunto **complexo**, especialmente enquanto não vemos formas de `display` mais recentes, como Flexbox e Grid. Veremos estas formas em breve, mas por enquanto podemos fazer algumas coisas para centralizar nossos conteúdos na horizontal.

## Centralização Horizontal

Para centralização horizontal, utilizaremos duas técnicas:

### `text-align`

A propriedade CSS **`text-align`** controla o alinhamento horizontal do conteúdo `inline`, como texto, em um elemento pai `block`. No entanto, ela não controla o alinhamento de elementos `block`.

**Funciona para:** texto, imagens, botões e elementos **`inline`**

**Opções:** 

- **"center"** centraliza o conteúdo horizontalmente.
- **"right"** alinha o conteúdo à direita.
- **"left"** alinha o conteúdo à esquerda.
- **"start"** alinha o conteúdo à esquerda ou à direita, dependendo do contexto de escrita. Por exemplo, japoneses leem da direita ******para a esquerda, então em uma página no Japão o “start” colocaria o texto no canto direito.
- **"end"** alinha o conteúdo à direita ou à esquerda, dependendo do contexto de escrita(pense no exemplo no Japão).

### `margin`

A propriedade **`margin`**pode ser usada para centralizar elementos com largura definida que são do tipo **`block`**. Para isso, as margens superior e inferior devem ser definidas como 0, enquanto as margens esquerda e direita devem ser definidas como **`auto`**. Essa técnica funciona para centralização horizontal.

https://codepen.io/jvalves-labenu/pen/QWryrdr

# Resumo

| **Tópico** | **Informação** |
| --- | --- |
| Propriedade **`position`** | Existem cinco valores possíveis: **`static`**, **`relative`**, **`fixed`**, **`absolute`** e **`sticky`**. |
| Propriedades **`top`**, **`bottom`**, **`left`** e **`right`** | São utilizadas em conjunto com as propriedades de posição para indicar a posição exata de um elemento na página. |
| Centralização horizontal | Pode ser alcançada através das propriedades CSS **`text-align`** e **`margin`**. |
| Alinhamento horizontal do conteúdo **`inline`** | Pode ser controlado pelas propriedades **`center`**, **`left`**, **`right`**, **`start`** e **`end`**, quando utilizadas em conjunto com a propriedade **`text-align`**. |
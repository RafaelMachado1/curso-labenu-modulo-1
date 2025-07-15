# Pseudoclasses

# Pseudoclasses

Pseudoclasses são seletores que permitem modificar a estilização de um elemento em **estados especiais** da página, como quando clicamos ou passamos o mouse sobre ele. Para usá-las, basta escrever o nome da pseudoclasse depois do nosso seletor. Abaixo, veja alguns exemplos de pseudoclasses.

### `:active`

Representa quando o elemento é ativado pelo usuário (normalmente, por um clique).

```css
div:active{
	 color:orange;
}
```

### `:hover`

Representa quando o mouse está sobre o elemento.

```css
.botao:hover{
	  background-color: orange;
}
```

- Exemplo no **Codepen**
    
    https://codepen.io/jvalves-labenu/pen/poVgaWv
    

### Relembrando: seletor universal `*`

Permite que sejam atribuídos um conjunto de regras de estilização para **todos** os elementos.

```css
* {
		margin: 0;
		padding: 0;
}
```

<aside>
💡 **Dica:**Lembre-se de que, se a mesma regra for escrita em um elemento específico, ela sobrescreverá a regra do seletor **`*`**. A regra específica de cada elemento é **mais forte** que a regra do seletor universal **`*`.**

</aside>

# Video complementar

[CSS2_-_PseudoClasses.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1aa92649-e5a0-45f0-8bf5-9054cbcb58d6/CSS2_-_PseudoClasses.mp4)

# Resumo

1. As pseudoclasses são seletores que permitem modificar a estilização de um elemento em estados especiais da página, como quando clicamos ou passamos o mouse sobre ele.
2. Para usá-las, basta escrever o nome da pseudoclasse depois do nosso seletor.
3. Os exemplos de pseudoclasses incluem **`:active`** (representando quando o elemento é ativado pelo usuário) e **`:hover`** (representando quando o mouse está sobre o elemento).
4. O seletor universal `*` atribui um conjunto de regras de estilização para todos os elementos.
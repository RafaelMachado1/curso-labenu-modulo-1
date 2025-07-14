# Tags: elementos de texto, listas e tabela

# **Elementos de texto**

- **Títulos**: Para colocar títulos utilizamos as tags de **heading**
    
    ```jsx
    <h1>Sou um título h1</h1>
    <h2>Sou um título h2</h2>
    <h3>Sou um título h3</h3>
    <h4>Sou um título h4</h4>
    <h5>Sou um título h5</h5>
    <h6>Sou um título h6</h6>
    ```
    
    ![titulos.gif](./img/titulos.gif)
    
- **Parágrafos**: Para colocar **parágrafos** (ou seja, textos que não são títulos) utilizamos a tag **p**
    
    ```html
    <p>Sou um parágrafo</p>
    ```
    
    Resultado: 
    
    ```markdown
    Sou um parágrafo
    ```
    
- **Negrito:** afeta só a aparência do texto deixando ele destacado(bold)
    
    ```html
    <p>Olá, **<b>**turma!**</b>** </p>
    ```
    
    Resultado: 
    
    ```markdown
    Olá, **turma!**
    ```
    

- **Maior importância:** adiciona a aparência e tem lógicas por trás que ajuda em alertas e urgências na página.
    
    ```html
    <p>Urgente! **<strong>** Hoje é feriado, mas haverá aula!**</strong>**.</p>
    ```
    
    Resultado: 
    
    ```markdown
    Urgente!, **Hoje é feriado, mas haverá aula!**
    ```
    

- **Itálico:** i/em
    
    ```html
    <p><em>Itálico</em></p>  **OU**   <p><i>Itálico</i></p>
    ```
    
    Resultado:
    
    ```markdown
    *Itálico*
    ```
    

- **Sublinhado:** u
    
    ```html
    <p>Esta é uma <u>Frase sublinhada</u></p>
    ```
    
    Resultado:
    
    ```markdown
    Esta é uma Frase sublinhada
    ```
    

# **Elementos de Listas 🗄**

- Listas podem ser feitas utilizando três tags: **ol**, **ul** e **li**
    - ol **⇒  lista ordenada**
    - ul **⇒  lista não-ordenada**
    - li **⇒  item de lista**

⇒ Exemplo de lista ordenada:

```html
<ol> 
	<li>Item 1</li>
	<li>Item 2</li>
</ol>
```

Resultado:

```markdown
1. Item 1
2. Item 2
```

⇒ Exemplo de lista não-ordenada:

```html
<ul> 
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
```

Resultado:

```markdown
- Item 1
- Item 2
```

# **Elementos de Tabela 🍽**

- **Tabela:** A tag que define uma tabela HTML é: `<table> </table>`
- **Linha:** Para criar uma linha usamos a tag **t**able **r**ow: `<tr> </tr>`
- **Conteúdo:** Conteúdo de tabela é colocado na tag **t**able **d**ata: `<td>Conteúdo</td>`
    
    ### Exemplo:
    
    | Maçã | R$2,00 |
    | --- | --- |
    | Banana | R$1,00 |
    
    ```html
    <table>
    	<tr>
    		<td>Maçã</td>
    		<td>R$2,00</td>
    	<tr>
    	<tr>
    		<td>Banana</td>
    		<td>R$1,00</td>
    	</tr>
    </table>
    ```
    

- Títulos de colunas: A tag **t**able **h**eader, permite definir títulos para as colunas da nossa tabela: `<th>Título</th>`
    
    ### Exemplo:
    
    | **Fruta** | **Preço** |
    | --- | --- |
    | Maçã | R$2,00 |
    | Banana | R$1,00 |
    
    ```html
    <table>
          <tr>
            **<th>**Fruta**</th>
            <th>**Preço**</th>**
          </tr>
          <tr>
            <td>Maçã</td>
            <td>R$2,00</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>R$1,00</td>
          </tr>
        </table>
    ```
    
    ## Resumo
    
    1. Existem diversas tags HTML para trabalhar com textos, incluindo títulos, parágrafos, negrito, itálico e sublinhado. Essas tags ajudam a estruturar e formatar o conteúdo de uma página web.
    2. As listas são úteis para organizar informações em uma página, e podem ser criadas com as tags `<ul>` e `<ol>`. Cada item da lista é representado pela tag `<li>`.
    3. As tabelas são usadas para organizar dados em colunas e linhas. A tag `<table>` define uma tabela, e cada linha é representada pela tag `<tr>`. Cada célula da tabela é representada pela tag `<td>`. Também é possível usar a tag `<th>` para definir títulos de colunas.
# Introdução a Strings

Strings são os tipos referentes  a **textos**. Strings são  o que chamamos de **cadeias (sequências) de caracteres**. As formas mais comuns de escrever strings são:

**Aspas duplas** 

```jsx
const nome = "Labenu"
```

**Aspas simples**

```jsx
const nome = 'Labenu'
```

**Crase (template string)**

```jsx
const nome = `Labenu`
```

Ambas as formas são válidas e produzem o mesmo resultado.

A diferença principal entre aspas simples e aspas duplas está no uso dentro da string. Se você quiser incluir aspas simples ou duplas dentro da string, você precisa usar o outro tipo de aspas para delimitar a string.

Por exemplo:

```jsx
let mensagem1 = "Ela disse: 'Olá, como vai você?'";
let mensagem2 = 'Ele respondeu: "Estou bem, obrigado!"';

/*
Aqui, usamos aspas duplas para delimitar a string em **mensagem1**, pois a citação dentro da string usa aspas simples. E usamos aspas simples para delimitar a string em **mensagem2**, pois a citação dentro da string usa aspas duplas
*/
```

### **Template Strings**

Agora, em relação às template strings, elas são uma forma mais avançada de criar strings em JavaScript. As template strings são delimitadas por crases (``) em vez de aspas simples ou duplas. Elas permitem que você insira **expressões ou variáveis** dentro da string, usando a sintaxe **`${variável}`**.

```jsx
let nome = "João";
let idade = 25;
let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem) //resultado: Olá, meu nome é João e eu tenho 25 anos.

/*
Nesse caso, usamos uma template string para criar a mensagem, onde as variáveis ${nome} e ${idade} são substituídas pelos valores das variáveis.
*/
```

### **Concatenando**

Podemos juntar várias strings para formar uma nova. Chamamos esse processo de **concatenação** e utilizamos o sinal de **+** para fazê-lo.

```jsx
const saudacao = "Olá";
const nome = "João";
const mensagem = saudacao + " " + nome + "!"; // Concatenação
console.log(mensagem); // Resultado: Olá João!
```

### **Aspas nas aspas**

Também podemos usar aspas simples e duplas dentro das nossas strings. Para fazer isso, é necessário utilizar o caractere **`\**` antes de usar as aspas.

```jsx
const texto = "Ela disse: \"Olá!\"";
console.log(texto); // Resultado: Ela disse: "Olá!"
```

### **Quebra de linha**

E, por fim, podemos usar a combinação **`\n`** para criar uma quebra de linha dentro de uma mesma string.

```jsx
const texto = "Primeira linha\nSegunda linha";
console.log(texto);
// Resultado:
// Primeira linha
// Segunda linha
```

<aside>
💡 Para aprimorar ainda mais o seu aprendizado, recomendamos que você reescreva os códigos no seu ambiente de desenvolvimento VSCode e observe os resultados obtidos.

</aside>

## Vídeo complementar

[string-declaracao-concatenacao-template-strings.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0be6adc9-9e77-48f6-9ad5-ae8cad1d1386/string-declaracao-concatenacao-template-strings.mp4)

# Resumo

| Formas de string | Descrição | Exemplo |
| --- | --- | --- |
| Aspas duplas | Utilizadas para delimitar strings | `const nome = "Labenu"` |
| Aspas simples | Alternativa às aspas duplas para delimitar strings | `const nome = 'Labenu'` |
| Crase (template) | Permite a criação de template strings, possibilitando a interpolação de variáveis dentro da string | `const nome = `Labenu`` |
| Template Strings | Permite a concatenação de variáveis dentro de uma string utilizando a sintaxe `${}` | `const mensagem = `Bem-vindo(a) à ${nome}!`` |
| Concatenação | Processo de juntar várias strings para formar uma nova string, usando o operador `+` | `const mensagem = saudacao + " " + nome + "!"` |
| Aspas nas aspas | Utilização de aspas simples ou duplas dentro de uma string, utilizando o caractere de escape `\\` | `const texto = "Ela disse: \"Olá!\"";` |
| Quebra de linha | Inserção de quebra de linha dentro de uma mesma string utilizando a sequência de escape `\\n` | `const texto = "Primeira linha \n Segunda linha";` |
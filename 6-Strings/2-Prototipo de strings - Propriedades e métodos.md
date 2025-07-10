# Protótipos de strings: Propriedades e métodos

Strings também são objetos internos do Javascript e, por isso, possuem algumas ferramentas já criadas. Nós podemos usar essas ferramentas para manipular as strings ou conseguir mais informações sobre elas.

<aside>
💡 **Importante:**

- Chamamos este **objeto** interno de protótipo.
- As **informações** sobre o objeto são **propriedades**.
- As **ações** que realizamos são **métodos.**
</aside>

Vamos falar mais sobre objetos, propriedades e métodos ao decorrer do curso, mas por enquanto o jeito fácil de lembrar é:

- **tem** `()` no final? é **método**
- **não tem** `()` no final? é **propriedade**

As propriedades e métodos de String são recursos fornecidos pelo JavaScript para manipular e trabalhar com textos. Eles permitem que você execute várias operações, como:

1. Obter o comprimento de um texto;
2. Converter letras para maiúsculas ou minúsculas;
3. Remover espaços em branco;
4. Substituir parte de uma string por outra; 
5. Verificar se uma determinada sequência de caracteres está presente em uma string. 

## Algumas propriedades e métodos

### **Length (Comprimento)**:

A propriedade `length` retorna o número de caracteres em uma string. 

Por exemplo:

```jsx
let texto = "Olá, mundo!";
let tamanho = texto.length;
console.log(tamanho); // Resultado: 12

```

### **toUpperCase (Letras maiúsculas)**

O método `toUpperCase()` converte todos os caracteres de uma string em letras maiúsculas. 

Por exemplo:

```jsx
let nome = "joão";
let nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo); // Resultado: "JOÃO"

```

### **toLowerCase (Letras minúsculas)**

O método `toLowerCase()` converte todos os caracteres de uma string em letras minúsculas. 

Por exemplo:

```jsx
let nome = "MARIA";
let nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo); // Resultado: "maria"

```

### **trim (Remover espaços em branco)**

O método `trim()` remove os espaços em branco no início e no final de uma string. Isso é útil para limpar entradas de usuário ou manipular strings formatadas. 

Por exemplo:

```jsx
let texto = "   Olá, mundo!   ";
let textoLimpo = texto.trim();
console.log(textoLimpo); // Resultado: "Olá, mundo!"

```

### **replace e replaceAll (Substituir)**

O método `replace()` substitui uma parte de uma string por outra. Você pode usar uma string de pesquisa para encontrar a parte que deseja substituir e uma string de substituição para especificar o novo valor. O método `replace()` substitui apenas a primeira ocorrência, enquanto o método `replaceAll()` substitui todas as ocorrências. 

Por exemplo:

```jsx
//substitui apenas a primeira ocorrência

let frase = "Eu gosto de maçãs.";
let novaFrase = frase.replace("maçãs", "laranjas");
console.log(novaFrase); // Resultado: "Eu gosto de laranjas."

//substitui todas as ocorrências

let texto = "banana, banana, maçã";
let novoTexto = texto.replaceAll("banana", "laranja");
console.log(novoTexto); // Resultado: "laranja, laranja, maçã"

```

### **includes (Verificar se está incluso)**

O método `includes()` verifica se uma determinada sequência de caracteres está presente em uma string. Ele retorna um valor booleano (verdadeiro ou falso) com base na verificação. 

Por exemplo:

```jsx
let frase = "O JavaScript é uma linguagem de programação poderosa.";
let temJavaScript = frase.includes("JavaScript");
console.log(temJavaScript); // Resultado: true

let texto = "Olá, mundo!";
let temOla = texto.includes("ola");
console.log(temOla); // Resultado: false

```

Essas são apenas algumas das propriedades e métodos disponíveis para manipular strings no JavaScript. Eles podem ser combinados e utilizados de diferentes maneiras para realizar tarefas importantes.

<aside>
💡 Para aprimorar ainda mais o seu aprendizado, recomendamos que você reescreva os códigos no seu ambiente de desenvolvimento VSCode e observe os resultados obtidos.

</aside>

## Vídeo Complementar

[prototipo-string-explicação.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f939409-2413-46e9-bbdb-991afb02d0ce/prototipo-string-explicao.mp4)

# Resumo

| Propriedade/Método | Descrição |
| --- | --- |
| `length` | Retorna o número de caracteres em uma string |
| `toUpperCase()` | Converte todos os caracteres de uma string em letras maiúsculas |
| `toLowerCase()` | Converte todos os caracteres de uma string em letras minúsculas |
| `trim()` | Remove os espaços em branco no início e no final de uma string |
| `replace()` | Substitui parte de uma string por outra |
| `replaceAll()` | Substitui todas as ocorrências de uma string por outra |
| `includes()` | Verifica se uma sequência de caracteres está presente em uma string |
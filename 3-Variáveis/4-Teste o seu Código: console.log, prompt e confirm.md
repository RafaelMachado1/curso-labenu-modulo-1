# Teste o seu código: console.log, prompt e confirm

A partir daqui, vamos usar frequentemente as ferramentas **Devtools** e **Live Server** juntamente com dois comandos importantes em nosso curso: **`console.log()`** e **`prompt()`**. Então antes de começarmos faça os passos a seguir:

1. Crie uma pasta com 2 arquivos: `index.html` e `index.js`
2. Conecte o `.html` ao `.js` 
3. Clique com o botão direito do mouse em cima do `index.html` e escolha a opção “Open with Live Server”.

<aside>
💡 Deixei o seu VScode e navegador aberto, vamos começar a testar os nossos códigos.

</aside>

## c**onsole.log()**

O console.log é uma ferramenta muito útil para verificar o que está acontecendo dentro do nosso código. Quando utilizamos console.log, podemos imprimir uma mensagem ou dados na aba “Console” do Devtools. Isso nos permite verificar se uma variável está recebendo o valor correto, por exemplo.

Para usar console.log e testar o seu código, siga os passos abaixo:

1. Abra o arquivo **`index.js`**;
2. Declare uma variável usando a palavra-chave **`const`**;
3. Atribua uma string "Olá mundo!" para essa variável;
4. Na linha seguinte, digite **`console.log()`**;
5. Adicione a variável criada dentro dos parênteses: **`console.log(nomeDaVariável)`**

  6. Vá até a aba “Console” do devtools e verifique. O que aconteceu?

<aside>
💡 Aqui é esperado que haja uma mensagem Olá mundo! sendo impressa na aba “Console”.

</aside>

```jsx
const mensagem = "Olá mundo!"

console.log(mensagem)

// imprime : Olá mundo!  -> isso é um **comentário** e será ignorado na execução do código
```

<aside>
💡 Detalhe: **Comentários** São estruturas que permitem escrevermos textos que **serão ignorados** durante a execução do programa. Eles devem começar com **`//`** ou estar entre **`/* */`**

</aside>

## Prompt()

Muitas vezes em nossos sites, a gente vai querer que o usuário consiga inserir dados para a gente fazer alguma operação. Para isso, utilizamos o `prompt()`.

Ao digitar o comando `prompt("qual é o seu nome?")` vai acontecer:

1. Aparecerá uma caixa de diálogo no navegador com a mesma string digitada dentro dos parênteses, solicitando ao usuário que escreva algum texto;
    
    ![Untitled](./img%20e%20vídeos/Untitled6.webp)
    
2. O `prompt()` recebe o que o usuário digitou, que sempre vem no formato de uma **string**;
    
    ![Untitled](./img%20e%20vídeos/Untitled7.webp)
    
3. Então podemos guardar-lo em uma variável e utilizá-lo como quisermos. No caso abaixo fizemos a impressão da variável `nomeDoUsuario` com o `console.log`.
    
    ![Untitled](./img%20e%20vídeos/Untitled8.webp)
    

## Vídeo complementar

[Prompt e console.mp4](./img%20e%20vídeos/Prompt%20e%20console.mp4)

<aside>
💡 Podemos imprimir mais de uma coisa no console separando elas por vírgula
No código abaixo será adicionado um espaço entre as palavras.

```jsx
const nome = "Fulana"
const idade = 21
console.log("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos")
// Olá! Meu nome é Fulana e eu tenho 21 anos
```

</aside>

## Confirm()

O **`confirm()`** em JavaScript exibe uma caixa de diálogo com uma mensagem e botões de "Ok" e "Cancelar". Ele retorna um valor booleano - `true` se o usuário clicou em "Ok" e`false` se clicou em "Cancelar". A sintaxe é a seguinte:

```jsx
confirm("Mensagem");
```

Onde "Mensagem" é a mensagem que será exibida na caixa de diálogo.

Exemplo de uso:
Se um usuário preencher um formulário de inscrição em um evento, ao clicar no botão de envio, pode aparecer uma mensagem de confirmação usando o **`confirm`**. A mensagem pode perguntar se o usuário tem certeza de que deseja se inscrever no evento e ter duas opções: OK e Cancelar. Se o usuário clicar em OK, os dados serão enviados e se ele clicar em Cancelar, a ação será cancelada e os dados não serão enviados.

```jsx

const resultado = confirm("Quer participar do evento da Labenu?");
console.log(resultado) 
//caso o usuário clique em "ok", a impressão será **true 
//** se ele clicar em "cancelar" será **false**
```

![Untitled](./img%20e%20vídeos/Untitled9.webp)

No exemplo acima, a variável **`resultado`** irá receber o valor booleano retornado pelo método **`confirm()`**. Se o usuário clicar em "Ok", a variável recebe**`true`**, caso contrário, o código guardará **`false`**.

## Resumo

1. O **`console.log()`** é uma ferramenta útil para verificar dados e mensagens no processo de desenvolvimento de software.
2. É possível utilizar o `console.log` para imprimir o valor de variáveis e verificar se elas estão recebendo os valores corretos.
3. Comentários são estruturas que permitem escrever textos que serão ignorados durante a execução do código e são identificados pelos símbolos `//` ou `/* */.`
4. O **`prompt()`** é um código utilizado para receber dados do usuário em um site.
5. Ao utilizar o **`prompt()`**, uma caixa de diálogo é exibida no navegador, solicitando que o usuário insira um texto.
6. Os dados inseridos pelo usuário são sempre retornados como uma **string**, podendo ser armazenados em uma variável e utilizados posteriormente.
7. O **`confirm()`** exibe uma caixa de diálogo com botões "Ok" e "Cancelar" e sempre retorna um valor booleano.
8. É comumente usado em formulários para solicitar a confirmação do usuário antes de executar uma ação importante.
9. A sintaxe é simples e o valor de retorno booleano pode ser armazenado em uma variável para uso posterior.

## **Muito Bem!**

**A seguir, vamos para a Verificação de Aprendizagem!**
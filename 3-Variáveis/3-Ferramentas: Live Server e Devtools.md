# Ferramentas: Live Server e Devtools

<aside>
💡 A partir daqui vamos falar sobre duas ferramentas muito úteis para quem trabalha com desenvolvimento web:  o **Live Server** e ****as **DevTools**.  Não se preocupem em aprender tudo dessas ferramentas agora, pois vamos usa-las até o final do módulo 2.

</aside>

# Live Server

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) é uma ferramenta que funciona como uma extensão do Visual Studio Code (VScode), que permite que você visualize os resultados das suas implementações de código em tempo real. Geralmente, os resultados são vistos no navegador da internet e também podem ser acessados no DevTools.

### Por que usar o Live Server?

**Problema**

A ferramenta é útil porque, ao criar um programa, é comum que sejam feitas alterações e testes frequentes. Para cada mudança realizada, seria necessário atualizar manualmente a tela do navegador para ver os resultados atualizados. Isso pode ser um processo cansativo e demorado, especialmente se forem necessárias muitas alterações. Por exemplo, se houver 50 mudanças no código, seria necessário atualizar o navegador manualmente 50 vezes.

**Solução**

A solução para esse problema é o uso do Live Server. Ele atualiza a página do navegador automaticamente, assim que você alterar e salvar o código. Isso economiza tempo e esforço, permitindo que você se concentre mais na criação do seu programa do que na atualização constante do navegador.

### Instale o Live Server

1. Abra o Visual Studio Code (VScode) em seu computador.
2. Clique em "Extensions" (ou aperte `Ctrl+Shift+X`) no menu lateral esquerdo do VScode.
3. Na barra de pesquisa que aparecerá, digite "Live Server".
4. Encontre a extensão "Live Server" e clique em "Install".
5. Aguarde a instalação ser concluída e, em seguida, reinicie o VScode.
    
    ![instalar Live Server.gif](./img%20e%20vídeos/instalar%20Live%20Server.gif)
    

### Configure o seu ambiente para testar os códigos

Para testar o código com o Live Server precisamos do VSCode e uma nova pasta com dois arquivos:

1. **`index.html**` ⇒ Primeiro arquivo que o navegador olha
2. **`index.js`** ⇒ Arquivo onde escreveremos nosso código JS
    - o arquivo JS também pode ser chamado **`script.js`**

**Obs:** os dois arquivos devem estar na mesma pasta

![criando arquivos.gif](./img%20e%20vídeos/criando%20arquivos.gif)

### **index.html - O que é esse arquivo?**

O navegador precisa de uma **página HTML** para rodar o seu código, por esse motivo precisamos criar esse arquivo e conectar com o arquivo `index.js`.

Para gerar um **esqueleto básico** do arquivo HTML, podemos usar alguns **atalhos**, como:

- **`!`**
- **`html: 5`**

![criando html.gif](./img%20e%20vídeos/criando%20html.gif)

Conecte o arquivo `.html` com o arquivo `.js`

![editando html.gif](./img%20e%20vídeos/editando%20html.gif)

Ao final o seu arquivo `index.html` deverá ficar como o exemplo abaixo:

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    **<script src="index.js"></script> // conecta os arquivos index.js com o index.html**
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

<aside>
💡 Mais pra frente no curso discutiremos como criar e editar este arquivo com mais detalhes! Por enquanto vamos cria-lo e focar nossos estudos no `index.js`

</aside>

**Por ultimo, abra o arquivo index.html com o Live Server:**

1. Clique com o botão direito do mouse em cima do`index.html`
2. Escolha a opção “Abrir com o Live Server” ou em inglês “Open with Live Server”
3. Uma janela do seu navegador deverá abrir. 

![Untitled](./img%20e%20vídeos/Untitled5.png)

## Video Complementar

https://www.loom.com/share/279677590c494de7bcb67c0c3212dae6

# **O que são as Devtools?**

As DevTools são um conjunto de ferramentas que podem ser acessadas diretamente nos navegadores Google Chrome e Firefox. Elas ajudam a editar e diagnosticar problemas nas páginas da web que você está criando. No nosso curso, vamos focar na DevTools do Google Chrome.

## Abrindo o DevTools do Chrome

Existem diferentes maneiras de abrir as DevTools, dependendo do que você precisa fazer.

- Por exemplo, se você precisa trabalhar com o CSS de uma página, pode clicar com o botão direito do mouse em um elemento da página e selecionar "Inspecionar elemento". Isso abrirá a aba "Elementos" nas DevTools, onde você pode ver e editar o código HTML e CSS da página.
- Outra opção é usar um atalho de teclado, que pode variar dependendo do seu sistema operacional. Se estiver usando um Mac, pode apertar `Cmd+Option+C` para abrir as DevTools na aba "Elementos". Se estiver usando o Windows ou Linux, deve apertar `Ctrl+Shift+C`.
- Se você precisa rodar JavaScript na aba “Console”, pode usar outro atalho de teclado. No Mac, aperte `Cmd+Option+J` para ir direto para o painel de Console das DevTools. No Windows ou Linux, deve apertar `Ctrl+Shift+I`.

Com essas dicas, você pode usar as DevTools para trabalhar de forma mais eficiente e corrigir problemas em suas páginas da web.

## Vídeo complementar

O vídeo abaixo mostra brevemente como vamos usar o devtools e a parte de console nas próximas aulas. Vamos apresentar mais ferramentas do Devtools durante o curso. Até lá!

[DevTools.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e723c53a-11b1-4ed3-bfd1-fa1887b852ce/DevTools.mp4)

## Resumo

1. O **Live Server** é uma extensão para o Visual Studio Code que permite visualizar em tempo real os resultados das alterações no código;
2. Com Live Server, não é necessário atualizar manualmente a página do navegador a cada alteração no código;
3. Para usar o Live Server, é necessário instalar a extensão, criar os arquivos HTML e JS e conectar os dois para obter os resultados desejados.
4. As **DevTools** são ferramentas que ajudam a editar e diagnosticar problemas em páginas da web no Google Chrome e Firefox.
5. Há diferentes maneiras de abrir as DevTools, como clicar com o botão direito do mouse em um elemento para editar o código HTML e CSS, usar atalhos de teclado para abrir o painel de Console ou selecionar "Inspecionar" para ver informações sobre um elemento.
6. As DevTools permitem trabalhar de forma mais eficiente e corrigir problemas em suas páginas da web.

As ferramentas  **Live Server** e as **DevTools** trabalham juntas para ajudar no desenvolvimento de páginas web de forma mais eficiente e produtiva.

Prontinho! Tudo certinho para testar os seus códigos, então vá para seção  “**Teste o seu código: console.log e prompt**”
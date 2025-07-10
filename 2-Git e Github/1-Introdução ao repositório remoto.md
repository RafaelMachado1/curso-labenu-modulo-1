# Introdução ao repositório remoto

<aside>
<img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" alt="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" width="40px" /> Parabéns por completar a primeira etapa do curso de Fundamentos - Web Full Stack! Agora é hora de mergulhar mais a fundo no mundo do Git e do GitHub. Agora, vamos adicionar um novo ingrediente à mistura: o GitHub.

</aside>

## **Anteriormente...**

![Untitled](./img%20e%20vídeos/Untitled.png)

Na última aula, vimos alguns tópicos:

- Como usar o terminal
- O que é git e github
- Como clonar um repositório
- Como criar uma branch
- Como entrar nessa branch

Depois disso, escrevemos o nosso código e agora precisamos **subir** as mudanças que foram feitas lá no **repositório remoto**

# **Staging Area**

A staging area(ou **área de preparação**) é uma área para irmos adicionando o nosso trabalho conforme ele vai ficando pronto.

Quando terminamos tudo que queremos fazer, subimos o que tem na staging area para o repositório remoto.

![Untitled](./img%20e%20vídeos/Untitled.webp)

## **Comandos**

Aqui veremos os comandos relacionados a colocar os arquivos na **staging area**

### 01 - **`git status`**

Mostra lista de arquivos modificados, removidos ou criados que ainda não estão na staging area

### 02 - **`git add`<nome do arquivo>**

Envia as modificações de um determinado **arquivo** para staging area.

### 03 - **`git add -- all`**

Adiciona todos os arquivos modificados, removidos ou criados **no repositório** local para a staging area

### 04 - **`git add .`**

Adiciona todos os arquivos modificados, removidos ou criados **na pasta** onde você se encontra para a staging area

### 05 - **`git commit -m` "Mensagem"**

Demarca uma versão do seu projeto com os arquivos que estiverem na staging area. A mensagem deve descrever as modificações realizadas

# **Subindo para o repositório remoto**

Depois de criar o seu commit com o pacotinho de mudanças que você quer subir, podemos dar o comando de push!

### 01 - Subir um projeto no github

Para subirmos o projeto para o repositório remoto precisamos dar o comando **`git push`**.

### 02 - **carregamento**

O comando **`git push**` carrega os **commits** locais para o repositório remoto.

### 03 - **sintaxe**

**`git push origin**` <nome da branch>

<aside>
💡 **Origin** é o endereço do repositório remoto e já vem configurado quando fazemos o clone de um repositório.

</aside>

### Dicas importantes

- Quando criamos uma branch do projeto, em algum momento iremos querer que as modificações feitas nessa ramificação sejam **mescladas** com a branch principal.
- Para isso é necessário criar um **pull request.**
- Criar um Pull Request gera um pedido para as pessoas do time que devem **revisar** as alterações no código num processo chamado de **Code Review**.

# **Abrindo um PR (projeto)**

Ao subir uma nova Branch para o github, é possível compará-la com a branch principal e abrir um Pull Request.

**Exemplo parte 1/2**

![Untitled](./img%20e%20vídeos/Untitled2.webp)

**Exemplo parte 2/2**

![Untitled](./img%20e%20vídeos/Untitled3.webp)

## **Fazendo o “merge pull request”**

Depois do **Code Review**, o código pode ser mesclado. Basta clicar no botão merge pull request, se não houverem conflitos. Caso existam, **devem ser resolvidos no código**.

Depois de mesclado o projeto, é importante sempre atualizar o repositório local. Fazemos isso com o comando**`git pull`**.

# Resumo

| Comando | Descrição |
| --- | --- |
| `git status` | Mostra a lista de arquivos modificados, removidos ou criados que ainda não estão na staging area. |
| `git add <arquivo>` | Adiciona as modificações de um determinado arquivo para a staging area. |
| `git add --all` | Adiciona todos os arquivos modificados, removidos ou criados no repositório local para a staging area. |
| `git add .` | Adiciona todos os arquivos modificados, removidos ou criados na pasta atual para a staging area. |
| `git commit -m "Mensagem"` | Demarca uma versão do projeto com os arquivos que estão na staging area, fornecendo uma mensagem descritiva das modificações. |
| `git push` | Envia os commits locais para o repositório remoto. |
| `git push origin <nome da branch>` | Envia os commits locais para o repositório remoto na branch especificada. |
| `git pull` | Atualiza o repositório local com as alterações do repositório remoto. |
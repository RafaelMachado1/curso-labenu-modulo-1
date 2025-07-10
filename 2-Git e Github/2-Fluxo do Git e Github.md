# Fluxo do Git e Github

# Fluxo das alterações no Git

![Untitled](./img%20e%20vídeos/Untitled4.webp)

## Fase 1 - Diretório de trabalho

Sempre que **clonamos** ou fazemos **git pull** em um repositório que tem Git, ele tem uma "foto" de como estão todas as coisas (quais são os arquivos e o que tem escrito neles etc). Chamamos este estado de ***tracked*** (rastreado)

É como se recebêssemos do repo remoto uma caixa com brinquedos, e uma fotografia da disposição atual destes brinquedos.

![Untitled](./img%20e%20vídeos/Untitled5.webp)

<aside>
💡 **NOTA:** É importante que criemos outras *branches* para alterar o estado atual das coisas. O que a branch faz é criar uma **linha do tempo alternativa**, onde nossas ações com a caixa dessa linha do tempo, não afetam a linha do tempo principal (a **main**).

</aside>

![Untitled](./img%20e%20vídeos/Untitled6.webp)

Quando há alguma alteração neste estado - **criação**, **edição** ou **remoção** de um arquivo - o Git fica ciente e anota. Cada alteração é indicada por uma palavra diferente:

- ***untracked***: Arquivo novo, portanto, não visto na fotografia
- ***modified**:* Arquivo que não está mais como na fotografia
- ***deleted**:* Arquivo que existia na fotografia, mas não existe no momento

![Untitled](./img%20e%20vídeos/Untitled7.webp)

## Fase 2 - Stage area (preparação)

Quando fazemos **git add** em nosso diretório de trabalho, o que estamos fazendo é tirar uma nova foto, para atualizar o que está sendo **rastreado**. O nome "formal" para essa foto é **staging area** (área de preparação)

![Untitled](./img%20e%20vídeos/Untitled8.webp)

## Fase 3 - Commit (comprometer)

Podemos atualizar a foto (**fazer git add**) quantas vezes forem necessárias, e quando estiver tudo certo, devemos nos **comprometer** com a foto, e criar um **selo** para ela, indicando quais foram as mudanças. Este é o processo de **commit**, e depois disso já podemos enviar nossa caixa para o repo remoto.

![Untitled](./img%20e%20vídeos/Untitled9.webp)

## Fase 4 - Push(envio)

Com tudo isso feito, podemos **enviar** nossa caixa atualizada para o endereço do repositório remoto. Fazemos isso com o comando **git push origin <<nome-da-branch>>**

![Untitled](./img%20e%20vídeos/Untitled10.webp)

## Fase 5 - Pull request e Merge

Chegando no repo remoto, precisamos **pedir** para que as alterações sejam verificadas, e após a verificação, **mesclar** a versão alterada com a principal, para que da próxima vez que houver um clone, a caixa chegue com as novas alterações. Estas ações são, respectivamente: o **Pull Request** e o **Merge.**

![Untitled](./img%20e%20vídeos/Untitled11.webp)

Agora, ao fazer **git pull** **origin main** do repositório remoto, os arquivos que serão baixados serão os da versão principal do repositório remoto, que estão na branch **main** do repo. Então, nossa caixa e os brinquedos devem estar atualizados!

[]()

![Untitled](./img%20e%20vídeos/Untitled12.webp)

### Video complementar sobre Pull request e Merge

[Fluxo de Git e Github (1).mp4](./img%20e%20vídeos/Fluxo%20de%20Git%20e%20Github%20(1).mp4)

# Resumo

Aqui está uma tabela com os principais pontos do texto sobre o fluxo do Git e GitHub:

| Fase | Descrição |
| --- | --- |
| Fase 1 | - O repositório tem um estado inicial chamado "tracked". As alterações podem ser "untracked" (arquivo novo), "modified" (arquivo modificado) ou "deleted" (arquivo removido). |
| Fase 2 | - Ao usar o comando "git add", as alterações entram na "staging area" (área de preparação). Uma nova foto é tirada para atualizar o que está sendo rastreado. |
| Fase 3 | - Após adicionar as alterações, é feito o "commit" para criar um selo indicando as mudanças. O commit registra as alterações de forma permanente no histórico do Git. As alterações podem ser enviadas para o repositório remoto. |
| Fase 4 | - O comando "git push" é usado para enviar as alterações para o repositório remoto. As alterações são enviadas para o endereço do repositório remoto. É possível enviar as alterações para uma branch específica. |
| Fase 5 | - No repositório remoto, é feito um "Pull Request" para solicitar a verificação das alterações. Após a verificação, é realizado o "merge" das alterações com a versão principal. As alterações são disponibilizadas para futuros clones. |
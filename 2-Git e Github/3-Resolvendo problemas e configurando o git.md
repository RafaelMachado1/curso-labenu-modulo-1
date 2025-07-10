# **Resolvendo problemas e configurando o GIT**

Aqui vamos abordar problemas comuns que podem ocorrer ao configurar e utilizar o Git e o GitHub. Ao longo do processo de versionamento e colaboração em um projeto, é possível enfrentar dificuldades relacionadas à configuração de nome e e-mail do usuário, gerenciamento de credenciais e autenticação no GitHub. Felizmente, cada um desses problemas tem uma solução específica.

## **Problema 1:** Erro na configuração do **user.name/email**

1. Para resolver, verifique as configurações com o comando **git config -list**
2. Verificar se o [user.name](http://user.name/) **não está** user.nome **e se está igual** ao username do **github.**
3. Cheque se o **user.email** é o mesmo que está em sua conta do GitHub

## **Problema 2:** Credencial antiga associada no computador

Para resolver **abrir o gerenciador de credenciais** (Mac e Windows) e **apagar** a credencial antiga. Logo após fazer alguma alteração para poder realizar um commit e um push.

Durante o push provavelmente o **git irá pedir uma nova autenticação.**

Utilizar o username correto e usar o token de autenticação.

## **Problema 3:** Sem token de autenticação,Token expirado ou sem as permissões adequadas

Para resolver ir em developer settings no perfil, criar um **novo token** e selecionar as permissões corretas. Verifique o tutorial de configuração de autenticação abaixo:

[Configurando **a autenticação do GitHub**](https://www.notion.so/Configurando-a-autentica-o-do-GitHub-c0e21af3f0974af29f0691a8ef9a8cfd?pvs=21)

# **Cheat-sheet fluxo de trabalho git**

<aside>

💡 Um "cheat sheet" (folha de cola) é um documento ou recurso que fornece um resumo rápido e fácil de informações importantes ou dicas úteis sobre um determinado tópico. Geralmente, é uma folha impressa ou um arquivo digital que contém uma lista de atalhos, comandos, fórmulas ou instruções que podem ser consultados rapidamente quando você precisa realizar uma tarefa específica.

</aside>

### **Trabalhando a partir do github**

1. Forkar o Repositório remoto
2. `git clone` link do repo
3. `git checkout -b` nome da branch
4. Realizar alterações no código
5. `git add .`
6. `git commit -m` mensagem do commit
7. `git push origin` nome da branch
8. abrir o github
9. Abrir o PR
10. verificar conflitos
11. fazer a mesclagem

### **Atualizando um repo que já existe**

1. `git pull`
2. `git checkout` nome da branch
3. Realizar alterações no código
4. `git add .`
5. `git commit -m` mensagem do commit
6. `git push origin` nome da branch
7. abrir o github
8. Abrir o PR
9. verificar conflitos
10. fazer a mesclagem
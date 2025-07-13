# Postinho de Vacinação - JS

<aside>
💡 Esse material tem como **objetivo** oferecer uma orientação para que você realize uma breve revisão de conceitos de Javascript.

</aside>

**O material está dividido em 3 partes:**

**Parte 1 →** Alguns textos que podem ajudar com os conceitos mais básicos. 

**Parte 2 →** O projeto para fixar os conceitos aprendidos em JS.

**Parte 3 →** Referências para caso você deseje aprofundar seus conhecimentos.

---

## Parte 1 - Conceitos

- **Tipos de Dados em javaScript**
    
    Neste tutorial, vamos explicar os possíveis tipos de dados em programação JavaScript, quais os tipos de informações existem e como são classificados.
    
    Por isso, é necessário a gente classificar alguns tipos de dados, informações.
    
    **No JavaScript, vamos lidar com os seguintes tipos de dados:**
    
    - Números
        
        Esse é o mais óbvio tipo de dado. Seu dia de nascimento é um número, seu salário é um número.  Basicamente, temos dois tipos de números:  
        
        - **Inteiro**: 1, 2, 3, 4, 5, 2112, -10 etc
        - **Decimais**: São os quebrados, em nossa língua portuguesa usamos eles separados por vírgulas: Preço: R$ 1,99 Mas em programação, usamos ponto no lugar de vírgula: 1, 99 para gente é 1.99 em computação, ok ?
    - String
        
        Strings são, nada mais nada menos, que textos. Uma palavra, uma frase, um caractere (como  ! @ # $ % "+ _ []/ etc).  Uma string é sempre representada por algo que está dentro de aspas. Exemplos de strings:  
        
        - "Olá mundo"
        - "a"
        - "@"
        - "[]"
        
        Mas, veja bem:
        
        Número: 2112
        
        String   : "2112"
        
        Faz sentido você dividir o número 2112 com outro número, o resultado é um número também, é a nossa boa e velha Matemática. Mas não faz sentido dividir "2112" por um número, pois é uma string, um texto!
        
    - Boleano
        
        Os *Booleans* ou Booleanos podem assumir dois valores apenas:  
        
        1. *True*
        2. *False*
        
        Ou seja, verdadeiro e falso. E eles são muuuuuito importantes! Também são chamados de
        
        *valores lógicos*
        
        . Vamos usar bastante os Booleanos quando formos estudar testes e laços (loopings), bem em breve.
        
        Convencionalmente, o número 0 é sinônimo de falso e tudo que for diferente de 0 (como 1, -1, 2, 3, 4, 5...) é verdadeiro.
        
    - Null
        
        É a representação do vazio, do nada.
        
        String nula: ""
        
        Uma variável que não recebeu nenhum valor ou tipo de dado, é iniciada como nula 
        ex: **const número=**
        
        *Null*
        
        O vazio é um importante tipo de dado também.
        
    - Objeto
        
        São as 'coisas'. Uma imagem é um objeto, um botão é um objeto, um parágrafo específico pode ser um objeto. É uma representação geral de alguma 'coisa'.
        **Sintaxe:**
        
        ```markdown
        const nomeDoObjeto**={**
        propriedadeA: "Valores de A",
        propriedadeB: "Valores de B",
        propriedadeC: "Valores de C"
        **}**
        ```
        
    - Funções
        
        Por fim, temos as funções, que são blocos de código, específicos, que fazem uma tarefa específica e podem ser 'chamados' para serem executados.
        Sintaxe: 
        a-)**Função:**
         `function nomeDaFuncao(parâmetros){}`
        b-)**Arrow function** 
        `const nomeDaFuncao=(parâmetros)⇒{}`
        
- **Operadores de comparação**
    
    Quando estudamos as [operações matemáticas em JS](https://www.javascriptprogressivo.net/2018/07/Operacao-Matematica-JavaScript-Soma-Subtracao-Multiplicacao-Divisao.html),, aprendemos sobre os operadores de atribuição, pois sempre que usamos eles, estávamos fazendo uma atribuição.
    
    Por exemplo:
    
    var idade = 21 ;
    
    Esse operador, de igualdade, está atribuindo o valor 21 para a variável **idade**. É como se você desse uma ordem ao JavaScript.
    
    Agora, em vez de dar uma ordem, vamos fazer **perguntas** ao JavaScript. Porém ele tem uma peculiaridade: só responde **True** ou **False**. Ou seja, ele só responde Verdadeiro ou Falso, o JS é um bicho bem direto.
    
    Para fazer essas perguntas, usaremos 6 operadores, os ditos comparison operators, que são:
    
    - **=== (igualdade)**
        
        Este operador é usado para saber se dois valores são iguais. Se for, o JavaScript te responde com **true** e se não forem, com **false**.
        
        Se digitar no console do JS: 1 == 1  ele retorna um verdadeiro.
        
        Já se digitar: 1 == 2 ele retorna falso.
        
        ### Diferença entre comparação e atribuição: = e ==
        
        É bem comum e bem fácil as pessoas se confundirem entre atribuir e comparar.
        
        Por exemplo, ao usar os operadores **=** e **==**
        
        Quando fazemos:
        
        **a = b ;**
        
        Estamos dizendo: "Ei JS, faça com que **a** receba o valor de **b** , é uma ordem!"
        
        Já quando fazemos:
        
        **a == b ;** Estamos dizendo: "Ei, JS **a** é igual **b** ????"
        
        Ou seja, quando atribuímos, damos uma ordem, o JavaScript obedece e ponto final, acabou. Porém, quando fazemos uma comparação, estamos fazendo uma **pergunta** . E o que você espera quando faz uma pergunta? Uma **resposta** . E é isso que o JS faz: te dá uma resposta, responde **true** ou **false** , ou seja, a comparação tem um retorno, sempre, ok?
        
    - **!== (desigualdade)**
        
        O operador de diferente é o **`!==`** e ele retorna **true** quando dois valores que estamos comparados são diferentes e retorna **false** quando eles não são diferentes!
        
    - **> (maior que)**
        
        Agora os próximos operadores são os mesmo que você já aprendeu na escola. O **`>`**
        
        é o símbolo de 'maior que'.
        
        Quando fazemos:
        
        **a > b**  O JS retorna verdadeiro se o valor de **a** for maior que de **b**, apenas.
        
        Se for igual ou menor, retorna **false**
        
        2 > 1 : **true**
        
        2 > 2 :**false**
        
        2 > 3 :f**alse**
        
        O JavaScript é tão esperto, que compara até strings:
        
        'b' > 'a' :**true**
        
        'b' > 'c' :**false**
        
        Ou seja, ele comparou ordem alfabética! Que sabido!
        
    - **>= (maior ou igual)**
        
        Esse operador retorna verdadeiro caso um valor seja igual ou maior que o outro.
        
        Só retorna falso mesmo se for menor:
        
        2 >= 1:**true**
        
        2 >= 2:**true**
        
        2 >= 3:**false**
        
        Bem simples e óbvio.
        
    - **< (menor)**
        
        Se entendeu o operador de maior,  facilmente vai entender esse.
        
        **a**<**b** Retorna verdadeiro caso o valor de **a** seja menor que **b**, e falso em todo caso contrário (se **a** for igual a **b** ou se for maior que **b** )
        
        1 < 1 : **false**
        
        1 < 2 : **true**
        
    - **<= (menor ou igual)**
        
        No operador de menor ou igual, o JS retorna **true** caso o primeiro valor seja menor ou até se for igual. Só vai retorna **false** se o primeiro valor for maior que o segundo:
        
        1 <= 1 :**true**
        
        1 <= 2 :**true**
        
        1 <= 0 :**false**
        
- **Operadores Lógicos**
    
    **Operadores Lógicos AND ( && ), OR ( || ) e NOT ( ! ) em JavaScript**
    Vamos aprender sobre os operadores lógicos de AND, OR e NOT, simbolizados por && , || e ! .
    
    Com eles, nossos testes condicionais ficarão bem mais simples e poderosos. Eles vão nos ajudar, principalmente, sempre que precisarmos fazer várias comparações em nossos testes condicionais. Agora, com esses operadores, vamos poder fazer vários testes ao mesmo tempo e combinar tudo numa operação só.
    
    - **Operador AND( &&)**
        
        ## Operador lógico AND: &&
        
        **And**, em inglês, significa "E". Exemplo: isso **e** aquilo
        
        Ele funciona da seguinte maneira:
        
        Unimos mais de uma expressão, usando o operador
        
        **&&**
        
        ```
        if (condicao1 && condicao2){
           codigo;
        }
        ```
        
        Agora, esse **IF** só será verdadeiro se a condição1 for verdadeira **E** a condição2 **TAMBÉM** for verdadeira. Se qualquer uma delas for falsa, todo o teste condicional será **falso**.
        
        Não existem limites para o tanto de testes que podemos usar com o operador **&&**:
        
        ```
        if (condicao1 && condicao2 && condicao3 &&...){
           codigo;
        }
        ```
        
        ```jsx
        Tabela verdade: AND &&
        
        Condição 1                Condição 2         Resultado
           Verdade                 Verdade             Verdade
           Verdade                  Falso               Falso
           Falso                     Verdade             Falso
           Falso                      Falso              Falso
        ```
        
    - **Operador OR( || )**
        
        **OR** em inglês significa OU. A sintaxe para usar o operador || é: 
        
        ```
        if (condicao1 || condicao2){
           codigo;
        }
        ```
        
        Se a condição1 **OU** condição2 for verdadeira, todo o teste condicional será verdadeiro. Faz, sentido, não é?
        
        Se um for falso e o outro for verdade, o resultado é verdade ( **true**).
        
        ```jsx
        Tabela verdade: OR ||
        
        Condição 1            Condição 2                Resultado
           Verdade             Verdade                  Verdade
           Verdade             Falso                    Verdade
           Falso               Verdade                  Verdade
           Falso               Falso                    Falso
        ```
        
    - **Operador NOT( ! )**
        
        **NOT** em inglês significa não, é a negação.
        
        Sempre que colocamos esse operador perto de alguma condição, ele altera o valor dela de **verdadeiro** para **falso** (true para false) ou o contrário, de **falso** para **verdadeiro** .
        
        Veja:
        
        ```
        if(true){
           [esse codigo sempre executa];
        }
        
        if(!true){
           [esse codigo nunca executa];
        }
        ```
        
- **Condicional**
    - **Condicional com if**
        
        A estrutura, o protótipo do comando IF, em JavaScript, é:
        
        ```
        if (condicao) {
           codigo ;
           codigo ;
        }
        ```
        
        Primeiro, digitamos o comando **if**. Em seguida, é necessário vir um teste, uma comparação: foi por isso que estudamos operadores de comparação no tutorial passado de nosso Curso de JavaScript, pois o teste condicional  **IF** só funciona com uma expressão de comparação.
        
        Caso a condição retorne **true** (ou seja, seja verdadeira), o código entre os colchetes { } será executado. Caso a condição retorne **false** , o código dentro dos colchetes não é executado. Este bloco inteiro de IF é pulado e o script continua rodando normalmente, como se aquele trecho não existisse.
        
        Uma maneira ainda mais simples e fácil de entender a instrução **if** é pensar em sua tradução.
        
        If  significa `se`, em português. Então, a lógica é assim: "
        
        **se**  isso é verdade, executar a seguinte instrução ;
        
        **se** isso for falso, não fazer nada, pular a instrução seguinte".
        
    - **Condicional com if else**
        
        A sintaxe do uso das instruções **if** e **else** é a seguinte:
        
        ```
        if (teste){
            código caso o teste seja verdadeiro ;
        }else{
            código caso o teste seja falso ;
        }
        ```
        
        A lógica do IF continua a mesma, o que muda é o **else** , que vem sempre depois do **if** (e nunca sozinho).
        
        Vamos lá, entender o que se passa:
        
        1. Comando **if** é introduzido
        2. Um teste condicional é realizado (geralmente usando [operadores de comparação](http://www.javascriptprogressivo.net/2018/07/Operador-Comparacao-JS-Igual-Diferente-Menor-Maior.html))
        3. Caso o teste retorne **true** (verdade) o código que vem ao **if** é executado
        4. Caso o teste retorne **false** (falso), o código que vem depois do **else** que é executado
        
        ## O que é e Para que serve o IF e ELSE em JavaScript
        
        No tutorial anterior, quando aprendemos a usar a instrução **if**, vimos que o código dentro dela só executava se o teste fosse verdadeiro, caso fosse falso, o código ficava inutilizado, o JS simplesmente pulava ele.
        
        Com a instrução **else**, isso não ocorre mais.
        
        Agora ou acontece uma coisa ou acontece outra.
        
        Um dos códigos sempre é executado.
        
        Se parar para pensar, é isso que acontece o tempo inteiro quando usamos qualquer software ou sistema. Quando digita sua senha e tenta fazer login, ou ela tá certa ou tá errada, ou seja, é ou é **true** ou é **false**.
        
- **Laços e Loops**
    
    Quantas vezes você já abriu seu navegador? E seu player de música? Aliás, quantas vezes sua música favorita já foi executada em seus dispositivo? E seu relógio digital, quantas vezes ele contou  de 1s até 59s? E os minutos? Horas? Quantas vezes você já abriu e digitou num documento do Word? Quantas vezes já preencheu uma célula no Excel?
    
    Se você parar pra reparar, você **repete** muita coisa.
    
    Seu computador é uma verdadeira máquina de repetir, num verdadeiro
    
    looping infinito de execução.
    
    E é isso que iremos aprender nesta seção de nosso
    
    **curso de JavaScript** : como criar, usar e manipular laços e loopings, para rodarmos milhões e milhões de vezes determinados códigos, com pouquíssimas linhas de código, deixando nossos scripts cada vez mais complexos e poderosos.
    
    - **While**
        
        O WHILE é um comando, uma estrutura de repetição, que em inglês significa 'enquanto'.Basicamente ela funciona assim: enquanto uma condição for satisfeita, ela fica repetindo e repetindo um determinado trecho de código.
        
        Através deste laço ou loop, conseguimos que um mesmo pedaço de código se repita quantas vezes desejarmos.
        
        A declaração do laço while, em JavaScript, é:
        
        ```
        while(teste){
           [codigo]
           [codigo]
           [codigo]
        }
        
        ```
        
        Ou seja, primeiro digitamos **while**, depois algum teste condicional (como fazemos com o IF), em seguida um trecho de código entre chaves.
        
        O laço while funciona assim: ele verifica o **teste**.
        
        Se for verdadeiro, ele executa o código.
        
        Depois, faz o teste condicional novamente e enquanto for true, vai continuar a executar de novo, de novo e de novo o código entre chaves.
        
        O laço while só para de executar quando o teste der falso.
        
        ⚠️Atenção: Cuidado com os loops infinitos. Se não colocarmos uma incrementação (n++) que faça o teste chegar ao fim a função não vai parar de rodar e isso pode esquentar seu computador. 
        
    - **For**
        
        Assim como o [laço while](https://www.javascriptprogressivo.net/2018/12/Laco-WHILE-JavaScript-O-que-e-Como-usar.html), ele é uma estrutura de repetição.
        
        Ou seja, ele serve para repetir um determinado trecho de código por quantas vezes você quiser, ou seja, um loop.
        
        Por padrão, ele recebe três informações:
        
        1. Algo que acontece antes, como a inicialização de uma variável
        2. Um teste condicional
        3. Algo que vai ocorrer depois de cada iteração
        
        Calma, com os exemplos, você vai entender melhor.
        
        A estrutura do laço for é, portanto:
        
        ```jsx
        **for**( inicio ; teste ; depois){
           [codigo];
           [codigo];
           [codigo];
        }
        ```
        
        ## Como Funciona o Laço FOR
        
        O **inicio** ocorre no começo do laço.
        
        Normalmente é usado para se inicializar uma variável, um contador é o exemplo mais comum de uso.
        
        Então, ocorre um teste condicional, como ocorre no IF e no laço WHILE.
        
        Se este teste for **true**, então o código entre chaves é executado.
        
        Ao término dessa execução (iteração), ocorre o código **depois**, geralmente é um incremento ou decremento ou outra operação do tipo, no contador, por exemplo.
        
        Então o **teste** é feito novamente e enquanto for verdadeiro, o código entre chaves é executado, e a cada final de iteração, se executa o comando **depois**. E assim vai, até o teste ser **FALSO** e o JavaScript sai do laço FOR.
        
    - **Operadores de incremento e decremento**
        
        ### **Operadores de Incremento e Decremento: ++ e - -**
        
        Os chamados operadores de atribuição composta nada mais são que meios, maneiras ou atalhos, para escrevermos expressões de atribuição. Vamos usar bastante eles a partir de agora, principalmente em nossa seção de [laços e loopings em JS](https://www.javascriptprogressivo.net/p/lacos-e-loops-em-javascript.html).
        
        No tutorial anterior, sobre o [laço while em JavaScript](https://www.javascriptprogressivo.net/2018/12/Laco-WHILE-JavaScript-O-que-e-Como-usar.html), fizemos uso de uma expressão: 
        **( **Ver no material de referência)**
        
        **count = count + 1**
        
        Isso quer dizer o seguinte: o novo valor de count vai ser igual ao anterior somado de 1.
        
        Ou seja, se antes count = 1
        
        Depois de : count = count + 1
        
        O valor de count vai ser 2.
        
        Se count=10
        
        E fazemos: count = count + 1
        
        Temos: count = 11
        
        Ou seja, pegamos o valor anterior e adicionamos um.
        
        Podemos abreviar essa expressão:
        
        **count = count + 1** para simplesmente: **count++**
        
        O operador **++** é dito de incremento, ele aumenta o valor da variável em uma unidade.
        
        Existe também o operador de decremento: **--**
        
        Que é o mesmo que fazer: **count = count - 1**
        
        Ou seja, o novo valor de **count** é o valor antiga, subtraído de 1.
        
        O código abaixo, por exemplo, faz uma contagem regressiva, de 10 até 1:
        
        ## Operadores de atribuição aritmética: +=, -=, *=, /= e %=
        
        += e -=
        
        Assim como adicionamos um: **count = count + 1**
        
        Podemos adicionar outro valor, como 2: **count = count + 2**
        
        Isso pode ser abreviado para:
        
        **count += 1**
        
        **count += 2**
        
        Se quisermos subtrair o valor y de x podemos fazer tanto:
        
        **x = x - y**
        
        Como: **x -= y**
        
        O mesmo vale para multiplicação e divisão:
        
        x = x * y
        
        Abreviando: **x *= y
        (veja mais no Material de Referência)**
        

---

## Parte 2 - Hora de praticar 💪🏾

### É hora de colocar em prática o que aprendemos em JS. Programação só se aprende praticando (e muitoooooooo) 🏋🏾
Vamos lá?

Para os exercícios vamos usar o boilerplate revisãoJs-postinho, disponível abaixo:

[revisãoJs-postinho.rar](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3dbf5ee2-879a-4e2a-ad5d-2bc8d11d5bba/revisoJs-postinho.rar)

- Exercício 1 - Operadores de comparação
    
    a-) O exercício "a" está completo, e servirá de exemplo para os próximos. 
    
    Escreva uma funções e imprima no console os resultados do comparador de desigualdade a!==b 
    
    ```jsx
    function checarDesigualdade(a, b) {
    
        return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
    
     }
    
    console.log(checarDesigualdade(1, 2));
    ```
    
    b) Compare a igualdade entre  "a" e "b" e imprima o resultado no console usando a template string como no exemplo acima
    ⚠️Atenção, não esqueça de passar os valores de a e b como parâmetros da função. 
    
    c)Faça uma função chamada "verificaSeEMaior" e verifique se o parâmetro "a" é maior que o parâmetro "b" use ao final da função um console.log chamando a função dentro e passando os valores de "a" e "b"
    
    ```jsx
    console.log(verificaSeEMaior(1, 2));
    ```
    
- Exercício 2 - Operadores de comparação
    
     Agora sem usar o código apenas com seus conhecimentos escreva `true` ou `false` para as comparações abaixo:
    
    exemplo 1>2 = false
    
    a-) 1==='1'
    
    b-) 1=='1'
    
    c-) 'a'==='b'
    
    d-) 'b'>'a'
    
     e-) 0!==null
    ⚠️Atenção, as respostas devem ser escritas no código em forma de comentários
    

### 💉A partir daqui faremos funções que poderiam ser usadas para ajudar a organizar a vacinação do postinho de saúde.

- Exercício 3 - Condicional - **Cadastro de usuário**
    
    Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:
    
    - Usuários maiores de 18 anos
    - A senha deve ter no mínimo 6 caracteres
    - E que a nacionalidade seja brasileira.
- Exercício 4 - Condicional - **Login do usuário**
    
    Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”
    
    - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
    - Caso a senha seja inválida imprima no console (Senha Inválida)
- Exercício 5 - Condicional - **Primeira dose**
    
    Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. E retorne a mensagens a seguir dependendo da vacina tomada.   
    
    ```jsx
    `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    ```
    
    Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.
    
    - Coronavac = 28 dias
    - Astrazenica = 90 dias
    - Pfizer = 90 dias
    
    ```jsx
    let tempo = ""
    let data = ""
    ```
    
    ⚠️Atenção: A data pode estar escrita neste formato "01/08/2021" ( o mais simples possível) neste momento do curso. 
    
- Exercício 6 - Loop+Condicional -**Segunda dose**
    
    Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor da propriedade `imunização` para **“completa”** para isso vamos te fornecer uma lista de usuários.
    
    ```jsx
    const usuarios = [
           { nome: "Artur", imunizacao: "incompleta" },
           { nome: "Barbara", imunizacao: "incompleta" },
           { nome: "Carlos", imunizacao: "incompleta" }
    ]
    ```
    
    💡Dica:  para acessar os valores guardados em cada propriedade de um objeto use a notação do ponto chamando pelo nome da propriedade.
     **Ex:**  
    
    - objeto.nome // "Bárbara"
    - objeto.vacina // "astrazenica"
    
     
    
- Exercício 7 - Loop+Condicional - **Aviso aos atrasados**
    
    As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem para elas no app.
    Escreva uma função que **leia a lista de usuários** e **verifique** se a imunização está completa ou não e caso não esteja completa,  **imprima no console** uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.
    
    ```jsx
    `Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    ```
    
    pare este exercício vamos te fornecer uma  lista de usuários. 
    
    ```jsx
    const usuarios = [
           { nome: "Artur", imunizacao: "incompleta" },
           { nome: "Barbara", imunizacao: "completa" },
           { nome: "Carlos", imunizacao: "incompleta" }
    ]
    ```
    
- DESAFIO
    
    Refatore as funções dos exercícios 3 a 7 para que salvem as informações coletadas em um único array “usuários” e usem este array para exibir as mensagens e fazer as validações pedidas .
    
    Para isso será usado o array - `usuarios` abaixo:
    
    ```jsx
    const usuarios = [
        {
            nome: "Artur",
            ano: 2000,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "pfizer",
            imunizacao: "incompleta"
        },
        {
            nome: "Bárbara",
            ano: 1984,
            nacionalidae: "brasileira",
            senha: "labenu",
            vacina: "astrazenica",
            imunizacao: "completa"
        },
        {
            nome: "Carlos",
            ano: 1999,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "coronavac",
            imunizacao: "incompleta"
        }
    
    ]
    ```
    
    - Exercício 3 - refatorado
        
        No desafio ao invés de cadastrar o usuário enviando diretamente do código para o array, você vai adicionar as informações recebidas pelo prompt ao objeto `usuario` e então ao array `usuarios.`
        
         
        
    - Exercício 4 - refatorado
        
        No desafio, o exercício 4 deve ser refatorado para ler a lista de `usuarios` e comparar o **valor que vem do prompt** com a propriedade **senha.** 
        Caso encontre uma senha compatível deve devolver as mesmas mensagens.
        
    - Exercício 5 - refatorado
        
        Neste exercício você deve adicionar à cada usuário da lista `usuarios` as informações **vacina** e **imunização.** 
         A propriedade ****imunização deve receber um valor padrão **"incompleta"** além de devolver a mensagem anteriormente programada. 
        
    - Exercício 6 - refatorado
        
        Neste exercício você deve receber um nome de usuário por parâmetro, verificar se este nome existe na lista `usuarios` e  caso exista mudar o valor do parâmetro **imunização** para **"completa"**
        
    - Exercício 7 - refatorado
        
        Pense em outra forma diferente da primeira de ler a lista e devolver a mesma mensagem; mesmo
        

<aside>
⚠️ **IMPORTANTE:** Em caso de dúvidas**, mandem no canal fórum do Discord!** Nenhuma dúvida é boba, perguntar faz parte do processo de aprendizagem!

</aside>

---

## Parte 3 - Referências 📚

- **Nessa última parte, há algumas referências para caso você queira se aprofundar** 😉
    
    [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
    
- **Algumas das explicações acima foram retiradas do link abaixo**
    
    [JavaScript Progressivo](https://www.javascriptprogressivo.net/)
    

---

- 😎 Possíveis resoluções dos exercícios
    
    [revisãoJS-postinho-gabarito.rar](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68a49612-a667-410c-89a6-bddf42ba2b5f/revisoJS-postinho-gabarito.rar)
# Aprofundamento em Laços

## Conceituando Laços

**Laços** (ou Loops) são estruturas de programação que permitem representar **ações** **que se** **repetem.**

**Exemplos:**

- **Aniversário**: todo ano fazemos aniversário
- **Corrida de bike em um circuito**: os ciclistas percorrem inúmeras vezes o mesmo circuito
- **Comer**: pegar a comida no garfo, levar até a boca, mastigar, engolir

Dentro da programação, precisamos pensar em laços como estruturas com os seguintes elementos:

- Um **começo;**
- Um **valor de inicialização;**
- Uma **condição de continuação;**
- Um **conjunto de ações** a ser repetido;
- Um **incremento.**
    
    ![fluxograma Port.png](./img%20e%20vídeos/fluxograma_Port.webp)
    

**Exemplo ⇒ Corrida**

- **Começo:** estouro do alarme de início da corrida
- **Inicialização:** começa com a primeira volta
- **Condição de continuação**: enquanto não completar **X** voltas
- **Ação**: ciclistas pedalarem
- **Incremento**: aumentar uma volta a cada vez que os ciclistas completarem o circuito
- **Fim:** as **X** voltas são dadas, acaba a corrida

![bike (1).gif](./img%20e%20vídeos/bike_(1).gif)

**Exemplo ⇒ Robô na esteira**

- **Começo:** entrada do robô no circuito
- **Inicialização:** começa com as barras de energia vazias
- **Condição de continuação**: enquanto não completar todas as barras de energia
- **Ação**: robô corre
- **Incremento**: aumentar uma  barra de energia
- **Fim:** todas as barras são completamente preenchidas e o robô sai do circuito

![bK2.gif](./img%20e%20vídeos/bK2.gif)

## Vídeo Complementar

[Loops I - Sobre-conceito- edit.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1edb7d9b-60e8-4358-82a2-16afa7ce5776/Loops_I_-_Sobre-conceito-_edit.mp4)

## Laços Infinitos

**Laço infinito** é um loop que **nunca** acaba. Normalmente isto acontece devido a algum **erro** de lógica de programação. O laço infinito pode acontecer quando:

- **Esquecemos** de colocar o **incremento** da variável
- As **condições** de continuação **não** fazem muito **sentido**

**O que fazer quando isso acontece**:

1. Tentem **fechar a aba** onde ele está rodando
2. Tentem **fechar o navegador** todo
3. Abram o **gerenciador de tarefas** (isso depende do SO)
4. Desligue o computador
5. E se nada der certo...

![brincadeira, galera! tudo deve voltar ao normal depois da reinicialização da máquina! 😅](https://thumbs.gfycat.com/PointlessFrailBetafish-size_restricted.gif)

brincadeira, galera! tudo deve voltar ao normal depois da reinicialização da máquina! 😅

Por isso, incentivamos que, durante o aprendizado de laços, você utilize o [**Python Tutor**](http://pythontutor.com/visualize.html#mode=edit) para construir a lógica dos exercícios.

O **Python Tutor** é uma plataforma online que **roda o código linha a linha** e previne laços infinitos. Ou seja, você pode testar seu código primeiro no Python Tutor e, em caso de loops infinitos, corrigir o problema sem afetar o funcionamento do seu computador. 😉

<aside>
💡 **Obs:** apesar do nome, o Python Tutor oferece a possibilidade de escrevermos códigos em diferentes linguagens, incluindo o Javascript.

</aside>

## Vídeo Complementar

[loop-infinito-python-tuto-edit.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91dcea64-4a11-4962-b044-daeb23227b5c/loop-infinito-python-tuto-edit.mp4)

# Resumo

1. Entenda o conceito de laços (ou loops) como estruturas de programação que representam ações repetitivas.
2. Identifique os elementos essenciais de um laço, como o **começo**, **valor de inicialização**, **condição de continuação**, **conjunto de ações** e **incremento**.
3. Esteja ciente dos **laços infinitos**, que ocorrem quando há erros de lógica de programação, como esquecer o incremento da variável ou criar condições de continuação que não fazem sentido.
4. Utilize ferramentas como o **Python Tutor** para construir a lógica dos exercícios e evitar laços infinitos, testando e corrigindo problemas sem prejudicar o funcionamento do seu computador.
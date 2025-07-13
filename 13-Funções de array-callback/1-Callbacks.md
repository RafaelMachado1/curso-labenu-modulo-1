# Callbacks

<aside>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVR4Ae3WAURDQRzH8RqSIEAJEAIEQEBoolSJpirBogASTCjboAQAxpC1CG3RmrFJz2gGBrbKZgOIKSoxPdv+/Y7hdbbdue0MenzA2O+L8971EVFPtfxB5rGvbJ7CcZ/46X4Ahk+AGmb0BYjHmRzYdAfw47x5fQHiccavL0A8zmR0BbBxN5DAq5aAy1jyYHl7NycR8GYdrB/ZNmG/o4CrRGoaasFYsiYR8cSN1xqmlQIwbIMsECMREebGqSELNpWAJSBGMmLHOs5ZUgkIAvEuokZtYcOZ58Y/3g+HHBiqAjURVAkoADUTiBqmNSKwN+nHiAnUQkEloAIkijhzTmUE40xFJYCEInfPpmfohY2IqASU242H4/f578iq+XMzZ9Y9g3lBQFklIC0cv10kRiIirRLgBeKF4g9F6/ifCPdAsUWAVyVgHKrW8euEUfqKrFXYYFPh2QoiStx4FcZVX8U+4bg4wtfJt2AYCi3HxREFGO7oa4gDN/EZWS9yI2Kh2SIO5kRX7gP4wzEwgCQZMNbNGxGL6AcHPLYZToED+rXeijEwAnbYarDDqP5bseDRGoDT7IJzSS4dAQaQJOM/QC2gB34BKrXpQIVQnlUAAAAASUVORK5CYII=" alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVR4Ae3WAURDQRzH8RqSIEAJEAIEQEBoolSJpirBogASTCjboAQAxpC1CG3RmrFJz2gGBrbKZgOIKSoxPdv+/Y7hdbbdue0MenzA2O+L8971EVFPtfxB5rGvbJ7CcZ/46X4Ahk+AGmb0BYjHmRzYdAfw47x5fQHiccavL0A8zmR0BbBxN5DAq5aAy1jyYHl7NycR8GYdrB/ZNmG/o4CrRGoaasFYsiYR8cSN1xqmlQIwbIMsECMREebGqSELNpWAJSBGMmLHOs5ZUgkIAvEuokZtYcOZ58Y/3g+HHBiqAjURVAkoADUTiBqmNSKwN+nHiAnUQkEloAIkijhzTmUE40xFJYCEInfPpmfohY2IqASU242H4/f578iq+XMzZ9Y9g3lBQFklIC0cv10kRiIirRLgBeKF4g9F6/ifCPdAsUWAVyVgHKrW8euEUfqKrFXYYFPh2QoiStx4FcZVX8U+4bg4wtfJt2AYCi3HxREFGO7oa4gDN/EZWS9yI2Kh2SIO5kRX7gP4wzEwgCQZMNbNGxGL6AcHPLYZToED+rXeijEwAnbYarDDqP5bseDRGoDT7IJzSS4dAQaQJOM/QC2gB34BKrXpQIVQnlUAAAAASUVORK5CYII=" width="40px" /> Meus queridos estudantes, as dificuldades que possam encontrar ao lidar com o conceito de callback em JavaScript são naturais e fazem parte da trajetória de aprendizado. Não se desesperem diante dos obstáculos, pois é justamente neles que encontramos oportunidades para crescer e compreender melhor o mundo da programação. Saibam que não estão sozinhos nessa jornada. Estamos aqui para nos apoiarmos mutuamente, compartilhando conhecimentos e aprendendo juntos. **Lembrem-se sempre de ter paciência consigo mesmos e de celebrar cada pequeno avanço**, **pois é assim que vamos nos tornando cada vez mais proficientes.**

</aside>

## Callbacks: Passando funções como parâmetros

Na aula sobre funções, aprendemos que é possível atribuir funções a variáveis, o que chamamos de **expressão de função**. Vamos revisar rapidamente essa sintaxe:

```jsx
const darOiParaMundo = function(){
	console.log("Olá, mundo!");
}

darOiParaMundo();
darOiParaMundo();
darOiParaMundo();
```

Também vimos na aula sobre funções que os argumentos são passados quando chamamos uma função e se transformam em parâmetros da função. Vamos dar uma olhada nisso também!

```jsx
function calcularArea(altura, largura){
// A "altura" e a "largura" são os parâmetros da função
	const area = altura*largura;
	console.log(area);
}

calcularArea(3,2);//argumentos são os números passados na chamada da função "3" e "2"
```

Agora que revisamos, vamos **COMBINAR** esses dois conceitos, porque veja só:

- **FUNÇÕES** podem ser atribuídas a **VARIÁVEIS**
- **FUNÇÕES** esperam receber **VARIÁVEIS** como entrada

portanto:

## ✨**FUNÇÕES** podem receber **FUNÇÕES** como entrada!!!!✨😲

As funções que são passadas como argumento para outras funções são chamadas de **callback**

<aside>
💡 **Callback significa "ligar de volta"/"retornar"**

</aside>

Elas recebem este nome porque são usadas no **fim** da função principal ou **depois de uma etapa** importante dela.

## Para facilitar, uma analogia

Imagine que você é o proprietário de uma pizzaria e possui uma equipe composta por um atendente e um pizzaiolo. 

O processo de atendimento ao cliente é dividido em três etapas: 

1. Anotar o pedido.
2. Preparar a pizza. 
3. entregar as pizzas.

Dentro das etapas podemos pensar em um fluxo parecido com este:

1. 📝Anota pedido 
2. 📨 Envia pedido para pizzaiola, indicando qual pizza precisa ser feita
3. 🍕Pizzaiola faz a pizza do pedido 
4. 📦 Passa para a pilha de entregas 
5. 🚚Entrega a pizza

Nesse caso, precisamos que a pessoa responsável por fazer as pizzas saiba qual pizza precisa ser feita e conclua o processo de preparação da pizza. Somente depois disso podemos entregá-la.

No entanto, quando trabalhamos com outras pessoas, precisamos aguardar que elas concluam suas tarefas antes de prosseguirmos com o processo. Por exemplo, o pizzaiolo precisa terminar a preparação da pizza antes que ela possa ser entregue.

O mesmo ocorreria se tivéssemos, por exemplo, uma pessoa responsável pela entrega. Teríamos que fornecer instruções de entrega (deixar na portaria, encontrar a pessoa na porta, encontrar a pessoa na portaria, etc.), cada uma com seu respectivo passo a passo.

## Exemplos de callback

Imagine que temos as funções abaixo para o pizzaiolo.

```jsx
const fazerPizzaMucarela = function(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}

const fazerPizzaPepperoni = function(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("adicionando pepperoni e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}

function fazerCalzoneMucarela(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("dobrando a massa...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}
```

Na hora de enviar o pedido, podemos utilizar o seguinte código como exemplo:

```jsx
function fazerPedido(executarPedido){
	//"executarPedido" é o parâmetro
   console.log("avisando pizzaiolo");
   executarPedido();
}

```

Observe que `executarPedido` está sendo **chamada** como uma função, embora sua definição não esteja explicitamente declarada na função `fazerPedido`. Isso ocorre porque a definição de `executarPedido` será determinada quando `fazerPedido` for **chamada**. 
Veja o exemplo abaixo:

```jsx
fazerPedido(fazerPizzaMucarela);//"fazerPizzaMucarela" é o argumento
fazerPedido(fazerCalzoneMucarela); // "fazerCalzoneMucarela" é o argumento

```

No exemplo acima, temos duas **chamadas** de função, onde o **argumento** passado é exatamente o **identificador** da função. Observe que os argumentos passados não possuem os **parênteses**. Isso indica que as funções ainda não estão sendo **executada/chamadas**!

A função, seja ela `fazerPizzaMucarela` ou `fazerCalzoneMucarela`, será **chamada** quando o JavaScript atingir a linha `executarPedido()`.

## Como fazer

- A função abaixo verifica se um número é divisível por 2. Se ele for, realiza a divisão. Senão, não faz nada
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/578d0d11-d72d-4e18-bfb5-ab152adf55b5/Untitled.png)
    

- Podemos criar uma função responsável por imprimir caso um número seja par
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d84c172a-902b-402d-abfd-32d8aaa50699/Untitled.png)
    

- Juntando as duas, para que a função seja executada apenas quando o número for par, podemos recebê-la como parâmetro na verificaPar
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e774489c-0cff-4427-b14d-f52b4c9aa521/Untitled.png)
    

- O código então fica assim:
    
    ```jsx
    const verificaPar = (numero, imprimir) => {
    	if(numero % 2 ===0){
    		const resultado = numero/2;
    		imprimir(resultado)
    	}
    }
    
    const imprimeMensagem = (valor) =>{
       console.log("O resultado da sua conta é", valor);
    }
    
    //chamada da função
    verificaPar(2, imprimeMensagem);
    ```
    
    Utilizando uma função não-nomeada como parâmetro, ficaria assim:
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4277e0be-c627-406d-a2be-6e06212e3d69/Untitled.png)
    

Dica:

```jsx
//A chamada de uma função com uma função de callback não nomeada, ficaria assim:
//esse **()=>{}** dentro do parâmetro é a sintaxe da função de callback. 
//isso é feito por que ela não tem um nome(identificador)
nomeDafuncao(**()=>{}**)

//caso ela receba um parâmetro, recebe nos parênteses, como as demais funções:
nomeDafuncao(**(parametro)=>{}**)

//dentro das chaves, colocamos o que essa função irá realizar.
// por exemplo, imprimir o parâmetro:
nomeDafuncao(**(parametro)=>{
		console.log(parametro)
}**)

//ainda, caso a função que recebe a função de callback tenha outro parâmetro (ou mais)
//ele vem dentro dos parênteses da função, mas fora dos parênteses da função de callback.
nomeDafuncao(parametroDaFuncao, **(parametroDoCallback)=>{
		console.log(parametroDaFuncao, parametroDoCallback)
}**)
```

### E por que isso é importante?

Nem sempre o JavaScript vai conseguir executar nossos códigos de forma **instantânea**. Por vezes, vamos precisar que algum processo **termine antes de prosseguir**, **e os callbacks são formas simples de garantir que nosso código vai seguir a ordem esperada.**

Outro caso, que é o que vamos ver agora, é quando vamos lidar com **arrays**. O JavaScript tem, internamente um sistema de funções feitas para lidar especificamente com arrays, e é disso que o próximo material fala.

## Vídeo complementar

[Callback.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76326010-4318-4efb-9855-17f1a36c59e6/Callback.mp4)

## Resumo

1. As funções podem ser guardadas em variáveis através do uso da sintaxe de expressão de função.
2. Callbacks são funções passadas como argumentos para outras funções
3. As callbacks são usadas no fim da função principal ou após uma etapa importante dela para completar uma tarefa, ou seja, **a callback espera/depende de outro processo terminar** **para depois ser executada.**
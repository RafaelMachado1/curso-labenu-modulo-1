# Switch-case

Para ilustrar a próxima estrutura condicional, vamos considerar o seguinte problema. Suponha que você trabalha em um mercado, e precisa estruturar a área dos preços de fruta. 

Criamos um sistema que recebe o nome da fruta, e para cada fruta, devemos atribuir um valor para uma variável `preco`. Neste sistema, as frutas cadastradas e possíveis são:

- Banana: R$ 5.00 a dúzia
- Laranja: R$ 4.50 a bacia
- Maçã: R$ 7.00 a bacia
- Limão: R$ 3.00 a bacia
- Melão: R$ 6.00 a unidade
- Melancia: R$ 10.00 a unidade
    
    ![Flowchart (2).jpg](./img%20e%20vídeos/Flowchart_(2).webp)
    

Vamos pensar em como poderíamos fazer esta separação utilizando a estrutura de `if/else if/else`

```jsx
let preco;

const fruta = prompt("digite o nome da fruta");

if(fruta === "banana"){
	preco = 5;
}else if(fruta === "laranja"){
	preco = 4.5;
}else if(fruta === "maçã"){
	preco = 7;
}else if(fruta === "limão"){
	preco = 3;
}else if(fruta === "melão"){
	preco = 6;
}else if(fruta === "melancia"){
	preco = 10;
}else{
	console.log("fruta não encontrada");
}
```

A estrutura de `switch` permite que possamos escrever essa sintaxe de forma mais simples. Observe o mesmo código escrito com a estrutura de `switch`.

```jsx
let preco;

const fruta = prompt("digite o nome da fruta");

switch(fruta){
	case "banana":
		preco = 5;
		break;
	case "laranja":
		preco = 4.5;
		break;
	case "maçã":
		preco = 7;
		break;
	case "limão":
		preco = 3;
		break;
	case "melão":
		preco = 6;
		break;
	case "melancia":
		preco = 10;
		break;
	default:
		console.log("fruta não encontrada");	
}
```

## Vamos entender as novas sintaxes:

**`switch(termo)`**
A palavra `switch` espera entre parênteses a expressão a ser comparada. Esta expressão normalmente é uma string ou um número, e a operação relacional é uma operação de “igual” (===).

`case`

Cada `case` é uma **possibilidade** de valor para o termo que estamos buscando. Caso o valor do case seja igual ao termo, o código descrito abaixo da palavra `case` será executado;

`break`

A palavra `break` interrompe a execução do switch caso o termo tenha sido encontrado, e o código tenha sido executado. Usamos isso para não precisar mais percorrer o switch após atender nosso case.

`default`

a palavra default descreve a sequência de código que deve ser executada se nenhum dos `cases` atender ao nosso `switch`. No nosso caso, se o nome passado para a variável `fruta` não for igual a nenhuma das frutas que temos.

### Vídeo Complementar:

[switchCase1.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7884b65-724d-4fbe-a049-9deed8d30243/switchCase1.mp4)

## Resumo

1. Considere usar switch-case quando tiver muitas opções possíveis para uma variável ou expressão, em vez de uma série de if-else if-else.
2. Sempre inclua um caso padrão `default` em seu switch-case para lidar com entradas de usuário inesperadas ou imprevistas.
3. Use `break` em cada case para garantir que apenas o código necessário seja executado e evitar comportamentos inesperados.
4. Lembre-se de que os valores de cada case podem ser expressões em si mesmos, como variáveis, constantes ou chamadas de função.
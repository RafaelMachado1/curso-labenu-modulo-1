# If com operadores lógicos

## Ifs dentro de ifs

Em certas situações, é imprescindível levar em conta múltiplas condições para garantir que nossa decisão esteja correta. Vamos abordar o seguinte cenário:

**A fim de ter aprovação do curso, é requerido que o estudante obtenha uma nota igual ou superior a 6, além de ter uma frequência igual ou superior a 75%.**

![Flowchart.jpg](./img%20e%20vídeos/Flowchart.webp)

Observe que neste problema existem **duas** condições que devem ser cumpridas.

Para resolver essa situação, é possível utilizar uma estrutura de `if` dentro de outra estrutura de `if`, o que é conhecido como **aninhamento**.

Exemplo:

```jsx
const nota = 6;
const porcentagemPresenca = 82;

if(nota >= 6){
	console.log("Nota ok");

	if(porcentagemPresenca >= 75){
		console.log("presença ok! Estudante passou!");
	} else{
		console.log("presença abaixo! Estudante reprovou!");
	}
} else{
	console.log("Nota abaixo! Estudante reprovou!");
}
```

### Simplificando

Podemos simplificar o caso anterior utilizando os **operadores lógicos**. Vejamos:

As expressões `nota >= 6` e `porcentagemPresenca >= 75` são **operações relacionais** que retornam valores **booleanos**. Esses valores booleanos podem ser combinados usando **operadores lógicos**, como **E**, **OU** e **NÃO**, para realizar operações lógicas entre eles.

Exemplo com **E**

```jsx
if(expressao1 && expressao2){
//caso ambos os valores gerem true, o código do bloco é executado
}
```

Exemplo com **OU**

```jsx
if(expressao1 || expressao2){
//caso um dos valores gere true, o código do bloco é executado
}
```

Exemplo com **NÃO**

```jsx
if(!expressao1){
//caso a expressão tenha valor false, o código do bloco é executado
}
```

No caso anterior, poderíamos ter algo como:

```jsx
const nota = 6;
const porcentagemPresenca = 82;
//operação com "E", para simplificar
if(nota >= 6 && porcentagemPresenca >= 75){
	console.log("Estudante aprovou");

} else{
	console.log("Estudante reprovou");
}
```

## Vídeo complementar

[Vídeo explicativo sobre condicionais com operadores lógicos.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/039ac329-e691-4cc7-8cd0-a0477306cd28/if_com_operador-edit.mp4)

Vídeo explicativo sobre condicionais com operadores lógicos.

## Resumo

1. É possível aninhar `if` dentro de `if` para lidar com várias condições.
2. Os operadores lógicos podem ser usados para simplificar os `if` aninhados.
3. É possível utilizar operações relacionais, que retornam valores booleanos, em conjunto com operadores lógicos.
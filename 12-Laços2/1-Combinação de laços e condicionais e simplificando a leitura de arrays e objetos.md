# Combinação de laços e condicionais e simplificando a leitura de arrays e objetos

<aside>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVR4Ae3WAURDQRzH8RqSIEAJEAIEQEBoolSJpirBogASTCjboAQAxpC1CG3RmrFJz2gGBrbKZgOIKSoxPdv+/Y7hdbbdue0MenzA2O+L8971EVFPtfxB5rGvbJ7CcZ/46X4Ahk+AGmb0BYjHmRzYdAfw47x5fQHiccavL0A8zmR0BbBxN5DAq5aAy1jyYHl7NycR8GYdrB/ZNmG/o4CrRGoaasFYsiYR8cSN1xqmlQIwbIMsECMREebGqSELNpWAJSBGMmLHOs5ZUgkIAvEuokZtYcOZ58Y/3g+HHBiqAjURVAkoADUTiBqmNSKwN+nHiAnUQkEloAIkijhzTmUE40xFJYCEInfPpmfohY2IqASU242H4/f578iq+XMzZ9Y9g3lBQFklIC0cv10kRiIirRLgBeKF4g9F6/ifCPdAsUWAVyVgHKrW8euEUfqKrFXYYFPh2QoiStx4FcZVX8U+4bg4wtfJt2AYCi3HxREFGO7oa4gDN/EZWS9yI2Kh2SIO5kRX7gP4wzEwgCQZMNbNGxGL6AcHPLYZToED+rXeijEwAnbYarDDqP5bseDRGoDT7IJzSS4dAQaQJOM/QC2gB34BKrXpQIVQnlUAAAAASUVORK5CYII=" alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVR4Ae3WAURDQRzH8RqSIEAJEAIEQEBoolSJpirBogASTCjboAQAxpC1CG3RmrFJz2gGBrbKZgOIKSoxPdv+/Y7hdbbdue0MenzA2O+L8971EVFPtfxB5rGvbJ7CcZ/46X4Ahk+AGmb0BYjHmRzYdAfw47x5fQHiccavL0A8zmR0BbBxN5DAq5aAy1jyYHl7NycR8GYdrB/ZNmG/o4CrRGoaasFYsiYR8cSN1xqmlQIwbIMsECMREebGqSELNpWAJSBGMmLHOs5ZUgkIAvEuokZtYcOZ58Y/3g+HHBiqAjURVAkoADUTiBqmNSKwN+nHiAnUQkEloAIkijhzTmUE40xFJYCEInfPpmfohY2IqASU242H4/f578iq+XMzZ9Y9g3lBQFklIC0cv10kRiIirRLgBeKF4g9F6/ifCPdAsUWAVyVgHKrW8euEUfqKrFXYYFPh2QoiStx4FcZVX8U+4bg4wtfJt2AYCi3HxREFGO7oa4gDN/EZWS9yI2Kh2SIO5kRX7gP4wzEwgCQZMNbNGxGL6AcHPLYZToED+rXeijEwAnbYarDDqP5bseDRGoDT7IJzSS4dAQaQJOM/QC2gB34BKrXpQIVQnlUAAAAASUVORK5CYII=" width="40px" /> Caro(a) aprendiz de loops em JavaScript, este é um conteúdo que geralmente leva tempo para ser aprendido, então é normal que você tenha dificuldades nesse momento do curso. Mas lembre-se de que as maiores conquistas vêm após superar os maiores desafios. Mesmo que pareça difícil no início, não desista. Mantenha-se firme, persista diante das dificuldades e transforme-as em oportunidades de crescimento. Acredite no seu potencial e no poder de aprendizado que você possui. O futuro está esperando por você.

</aside>

# for+if e for+for

## Combinando laços e condicionais

Podemos colocar laços dentro de condicionais, e o contrário também (condicionais dentro de laços). O funcionamento de ambos segue o mesmo. Veja exemplo abaixo:

```jsx
//Código que percorre o array e verifica se é par, imprimindo uma mensagem de número par, caso não seja imprime a mensagem do número impar:

const numeros = [08, 37, 39, 50, 59, 60];

for(let i = 0; i < numeros.length; i++){
	
	if(numeros[i]%2 === 0) {
		console.log("o número é par");
	}else{
		console.log("o número é ímpar");
	}

}

//No console.log a resposta será:
o número é par
o número é ímpar
o número é ímpar
o número é par
o número é ímpar
o número é par
```

### Combinando laços e laços

E também podemos utilizar um laço dentro de outro. Suponha que temos um array, e este array tem outros arrays dentro dele. Para iterar por eles, podemos utilizar um for dentro de outro, desta forma:

```jsx
//Código que percorre cada item do 'arrayDeArrays' com o primeiro laço e com o segundo, percorre cada array dentro dele e imprime seus números no console.log()
const arrayDeArrays = [
[2, 4, 6, 8, 10],
[3, 6, 9, 12, 15],
[4, 8, 12, 16, 20],
[5, 10, 15, 20, 25]
];

for(let i = 0; i < arrayDeArrays.length; i++){

	for(let j = 0; j < arrayDeArrays[i].length; j++){
		console.log(arrayDeArrays[i][j]);
	}

}
//No console.log a resposta será:
2
4
6
8
10
3
6
9
12
15
4
8
12
16
20
5
10
15
20
25
```

### **Vídeo Complementar**

[Vídeo explicativo sobre como usar o `for` aninhado.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52643ad3-0d8b-4222-be77-53c23f0aec3b/lacos-aninhadosmp4.mp4)

Vídeo explicativo sobre como usar o `for` aninhado.

# **for… of**

Outra forma de simplificar a leitura dos elementos do array é utilizando o loop **for...of…**

O loop for...of **percorre arrays**, alocando o **valor** de cada posição do array em uma variável, permitindo executar alguma ação para cada valor distinto.

Exemplo:

### **`for of`**

```jsx
const numeros = [14, 67, 89, 15, 23]

for(let numero of numeros){
	console.log(numero); //será impresso o valor de cada item do array: 14, 67 ...
}
/*aqui, numero recebe o valor
do índice a cada repetição*/
```

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D1802%253A196%26node-id%3D1811%253A396%26viewport%3D621%252C536%252C0.42%26scaling%3Dscale-down-width%26starting-point-node-id%3D1802%253A197

### **Vídeo complementar**

[Vídeo explicativo sobre como usar o **`for of`** **com arrays.**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d122ae7-33fc-4507-8e0c-5da441082972/for-of-arrays.mp4)

Vídeo explicativo sobre como usar o **`for of`** **com arrays.**

# for… in

Uma forma de simplificar a leitura dos elementos do array é utilizando o loop **for... in…**

O loop for...in **percorre arrays e objetos** , alocando o índice de cada posição do array, ou a chave de cada objeto, em uma variável, permitindo executar alguma ação para cada valor distinto.

Exemplo:

## **`for in` com arrays**

```jsx
const numeros = [14, 67, 89, 15, 23]

for(let i in numeros){
	console.log(i);//será impresso apenas o indice do array: 0, 1, 2 ...
	console.log(numeros[i]); //será impresso o valor de cada indice: 14, 67, 89...
}
/*aqui, i recebe o índice a cada repetição*/
```

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D1811%253A433%26node-id%3D1814%253A2%26viewport%3D163%252C270%252C0.31%26scaling%3Dscale-down-width%26starting-point-node-id%3D1811%253A434

### **Vídeos complementar**

[Vídeo explicativo sobre como usar o **`for in`** **com arrays**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20ba18c4-b65b-42ae-bef6-da84e1c96ed6/for-in-arraysmp4.mp4)

Vídeo explicativo sobre como usar o **`for in`** **com arrays**

## **`for in` com objetos**

```jsx
const pessoa = {
	nome:"Astrodev",
	idade:40
}

for(let i in pessoa){
 console.log(i) //será impresso apenas a chave de cada propriedade: nome, idade.
	console.log(pessoa[i]);//será impresso o valor de cada propriedade:"Astrodev", 40.
}
/*aqui, i recebe chave do objeto a cada repetição*/

```

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fix7WI086W1BuOiRrmc9RGX%2FGIFS%3Fpage-id%3D1798%253A2%26node-id%3D1802%253A72%26viewport%3D503%252C375%252C0.17%26scaling%3Dscale-down-width%26starting-point-node-id%3D1798%253A3

[Vídeo explicativo sobre como usar o **`for in` com objetos**](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6bf98cf7-9a5a-442a-af64-9fbdf569392e/for-in-objetos.mp4)

Vídeo explicativo sobre como usar o **`for in` com objetos**

`for of` e `for in` podem parecer bem fáceis de confundir (pois são mesmo). Para facilitar, deixamos aqui um exemplo interativo no **Codepen**. Observe as impressões no console para entender mais claramente a diferença.

[diferença for in e for of](https://codepen.io/jvalves-labenu/pen/MWGjWpK)

# Resumo

| Loop | Utilização | Características |
| --- | --- | --- |
| `for` | Iteração com base em uma condição | Controla o fluxo usando uma variável de controle, uma condição e uma expressão de atualização. Adequado para iterações com um número conhecido de repetições. |
| `for...of` | Iteração em elementos de um array | Permite iterar diretamente sobre os elementos de um array. Simples de usar e não requer controle de índice. |
| `for...in` | Iteração nas propriedades de um objeto | Itera sobre as propriedades de um objeto. Útil para acessar e manipular cada propriedade individualmente. |
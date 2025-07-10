# Contextualizando funções

## Motivação

Neste conteúdo vamos explicar sobre as funções no contexto de JavaScript.

Vamos começar com um exemplo prático: como calcular a área de um retângulo? Sabemos que a fórmula para calcular a área é multiplicar a altura pela largura:

**`area** = **altura** x **largura**`

Então, podemos escrever um código que calcula a área de um retângulo, como demonstrado abaixo.

```jsx
const altura = 2;
const largura = 3;
const area = altura*largura;
console.log(area);
```

Mas e se precisarmos calcular a área de vários retângulos? Será que copiar e colar o mesmo código várias vezes é uma solução eficiente? 

Para calcular a área de dois retângulos, basta repetir a mesma lógica para ambos

```jsx
const altura1 = 2;
const largura1 = 3;
const area1 = altura1*largura1;
console.log(area1);

const altura2 = 5;
const largura2 = 2;
const area2 = altura2*largura2;
console.log(area2);
```

Para calcular a área de **seis** retângulos, basta repetir a mesma lógica para todos?

![Untitled](./img%20e%20vídeo/Untitled.webp)

Fazer os cálculos dessa forma gera alguns problemas:

- Copiar e colar código é chato
- Código fica muito comprido e difícil de ler
- Nomes de variáveis não podem se repetir
- Se precisarmos mudar a lógica, teremos que mudar **em todos os lugares do código**

A solução para isso são as **funções**!

## E o que é uma função?

Uma função é um bloco de código que pode ser chamado (ou invocado) a partir do seu nome. Permite reutilizar variáveis.

A estrutura de uma função segue a estrutura abaixo:

```jsx
function calcularArea(altura, largura){
	const area = altura*largura;
	console.log(area);
}

calcularArea(3,2);
```

onde:

![Untitled](./img%20e%20vídeo/Untitled1.webp)

### Vídeo complementar:

https://www.youtube.com/watch?v=MyMM6xCviBk&t=775s

No próximo conteúdo, vamos entender mais como funcionam as declarações e chamadas de função no JavaScript!

## Dicas

1. **Reutilização de código**: Funções evitam repetição, permitindo reutilizar blocos de código.
2. **Organização e legibilidade**: Funções dividem o código em blocos menores e mais legíveis, facilitando a compreensão.
3. **Evitar duplicação de código**: Parâmetros em funções permitem personalizar o comportamento, evitando a repetição de código.
4. **Facilidade de manutenção**: Modificações podem ser feitas em um único lugar, simplificando a manutenção do código.

###
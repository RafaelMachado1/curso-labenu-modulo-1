# Introdução as estruturas condicionais

<aside>
⚠️ **Aviso importante!**
Antes de começar a estudar condicionais, recomendamos que reserve um tempo para revisar os [**operadores relacionais](https://www.notion.so/Operadores-relacionais-em-JS-5012ca7b2e8749869092bb722d88a299?pvs=21)** e [**lógicos](https://www.notion.so/Operadores-l-gicos-63766a0499c44aff9be653ee0f3b1135?pvs=21).** Esses conceitos são fundamentais para compreender e utilizar corretamente as condicionais. Além disso, você terá um melhor aproveitamento deste conteúdo sobre condicionais.

</aside>

# Condicionais

Você já percebeu que muitas vezes ao dia temos que tomar decisões que **dependem de outros fatores?**

Veja um exemplo :

**Eu estou saindo de casa para um passeio na praça:**

- **Se** estiver chovendo:
    - Levo o guarda-chuva
- **Senão**:
    - Levo o óculos de Sol

![créditos arteprog.space](./img%20e%20vídeos/Untitled.webp)

créditos arteprog.space

Nesse exemplo, a condicional é utilizada para determinar qual item (guarda-chuva ou óculos de sol) deve ser levado com base nas **condições** climáticas. A decisão tomada **depende do fator** específico observado (chuva ou sol) e isso guia a ação que você deve tomar para se preparar adequadamente para o passeio.

## Definindo condicionais

Até agora, vimos que o JS executa o código linha por linha de forma **sequencial**

exemplo:

![Untitled](./img%20e%20vídeos/Untitled1.webp)

```jsx
//INÍCIO DO CÓDIGO

//ETAPA 1
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}

//ETAPA 2
console.log(meuCarro.marca); // Saída: 'Toyota'
console.log(meuCarro.cor); // Saída: 'Prata'
console.log(meuCarro.ano); // Saída: 2021

//FIM DO CÓDIGO
```

As condicionais são **estruturas** do JS que nos dão o poder de decidir se a próxima linha de código deve ou não ser executada.

![Untitled](./img%20e%20vídeos/Untitled2.webp)

Condicionais são **estruturas** usadas para fazer escolhas baseadas em critérios.

Em outras palavras, elas permitem realizar uma determinada **ação** dependendo de uma **condição**

**Exemplo:** baseado na **condição** de estar chovendo eu vou realizar a **ação** de levar o guarda-chuva.

# Árvores de Condição

Podemos usar fluxogramas para representar condições

![Untitled](./img%20e%20vídeos/Untitled3.webp)

A maneira esquemática de representar condicionais utilizando fluxogramas:

![Untitled](./img%20e%20vídeos/Untitled4.webp)

Podemos **encadear** várias condições antes de chegar a uma resposta.

![Untitled](./img%20e%20vídeos/Untitled5.webp)

Depois de percorrer **condições**, você chega à uma conclusão. E, a partir da **conclusão**, você pode realizar alguma **ação**

![Untitled](./img%20e%20vídeos/Untitled6.webp)

## Video complementar

https://www.youtube.com/watch?v=oWuwfNMwXeY

# Resumo

1. As condicionais permitem que tomemos decisões em nosso código com base em determinadas condições. 
2. Podemos executar diferentes ações dependendo se uma condição é verdadeira(sim) ou falsa(Não).
# Exemplos práticos: acessando dados em estruturas complexas

Em JavaScript, podemos criar estruturas de dados complexas, como objetos que contêm outros objetos, objetos dentro de arrays, e até mesmo arrays de objetos. No começo, isso pode parecer confuso, mas vamos usar uma abordagem simples para entender melhor.

exemplo de estrutura:

```jsx
const meuObjetoComplexo = {
  propriedade1: "valor1",
  propriedade2: 50,
  propriedade3: [1, 2, 3],
  propriedade4: {
    propriedade1: "valor1",
    propriedade2: "valor2",
  },
  propriedade5: [
    {
      propriedade1: "valor1",
      propriedade2: "valor2",
    },
    {
      propriedade1: "valor1",
      propriedade2: "valor2",
    },
  ],
};
```

Vamos imaginar essas estruturas como uma espécie de "caminho" para chegar às informações que desejamos. Podemos pensar em cada nível da estrutura como uma etapa do caminho.

Para percorrer esse caminho e acessar as informações, utilizamos dois símbolos especiais: **o ponto (`.`) e os colchetes (`[]`).** Eles nos permitem navegar pelas diferentes etapas da estrutura.

A ideia é **combinar o uso desses símbolos** para percorrer nosso caminho e acessar as informações desejadas. Podemos usar pontos para acessar propriedades de objetos e colchetes para acessar elementos de arrays.

Exemplo:

```jsx
//Nós queremos acessar o brinquedo "osso"

const paiDePet = {
    nome: "Caio Texeira",
    pet: {
        nome: "Lupin",
        raca: "Salsicha",
        idade: 1,
        brinquedos:["bolinha", "mordedor", "osso"]
    }
}

/**/1. acessamos o "objeto pet" a partir da variável "paiDePet"**
**paiDePet.pet** 

**//2. acessamos a propriedade brinquedo** 
paiDePet.pet.**brinquedos**

**//3. Acessamos o índice em que está o brinquedo "osso"**
paiDePet.pet.brinquedos**[2]**
```

Experimente navegar pelo slide interativo abaixo e veja como o caminho foi percorrido dentro do objeto por meio de cada comando.

https://docs.google.com/presentation/d/e/2PACX-1vR8-r_RvA8Zz0icaEilBXJDl6SHrVDMqn1bd7sTxUX8I3n4iyBBbJ-YbrlsOKM7aRrEmUbVGazt7NWv/pub?start=false&loop=false&delayms=3000

Lembrando que é importante prestar atenção na estrutura da sua estrutura de dados, ou seja, verificar se você está acessando uma propriedade de um objeto ou um elemento de um array.

<aside>
💡 Experimente no seu VScode: 
1 - Como podemos acessar o valor "bolinha" do objeto paiDePet?
2 - Como podemos acessar a idade do pet?

</aside>

Veja outros exemplos usando variável:

![Untitled](./img%20e%20videos/Untitled2.webp)

Com essa abordagem, fica mais simples compreender como acessar informações em estruturas complexas em JavaScript.

## Video complementar

[aprofundamento_em_objetos_editado.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b6ebec0-cf21-4682-bc15-107a72c27fab/aprofundamento_em_objetos_editado.mp4)

# Resumo

1. **Entenda a estrutura:** Analise a hierarquia dos objetos e arrays para visualizar o caminho que você precisa percorrer.
2. **Use pontos para objetos:** Acesse propriedades de objetos usando o ponto (por exemplo, **`objeto.propriedade`**).
3. **Use colchetes para arrays:** Acesse elementos de arrays usando colchetes e o índice correspondente (por exemplo, **`array[indice]`**).
4. **Combine pontos e colchetes:** Em estruturas complexas, como objetos dentro de objetos, use pontos e colchetes para acessar informações específicas.
5. **Pratique:** Crie exemplos, faça testes e explore diferentes acessos para se familiarizar com a manipulação de objetos e arrays em JavaScript.
# Acessando e redefinindo propriedades de objetos em JavaScript

# Acessando valores nos objetos

Existem duas formas principais de acessar os valores que foram guardados em um objeto JavaScript: 

1. Notação de ponto (`.`)  
2. Notação de colchetes (`[]`).

### Notação de Ponto (`.`):

A notação de ponto é a forma mais comum e simples de acessar as propriedades de um objeto. Você usa um ponto seguido pelo nome da propriedade para acessá-la. 

Exemplo:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}

console.log(meuCarro.marca); // Saída: 'Toyota'
console.log(meuCarro.cor); // Saída: 'Prata'
console.log(meuCarro.ano); // Saída: 2021

/*
Nesse exemplo, usamos a notação de ponto para acessar as propriedades **marca**, **cor** e **ano** do objeto **meuCarro** e imprimimos seus valores no console.
*/
```

### Notação de Colchetes (`[]`)

A notação de colchetes é usada quando você precisa acessar uma propriedade de um objeto usando uma expressão ou quando o nome da propriedade contém caracteres especiais. Você coloca o nome da propriedade entre colchetes. 

Exemplo:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}

console.log(meuCarro['marca']); // Saída: 'Toyota'
console.log(meuCarro['isFlex']); // Saída: true

/*
Nesse exemplo, usamos a notação de colchetes para acessar as propriedades marca e **isFlex** do objeto **meuCarro** e imprimimos seus valores no console.
*/
```

![Objetos - Introdução (1).jpg](./img%20e%20videos/Objetos_-_Introduo_(1).webp)

<aside>
💡 A escolha entre a notação de ponto e a notação de colchetes depende do contexto e das necessidades do seu código. Em geral, **a notação de ponto é mais comumente usada**, mas a notação de colchetes é útil  quando as propriedades têm nomes inválidos para a notação de ponto.

</aside>

# Redefinindo valores de propriedades no objeto

Vamos aprender a redefinir os valores das propriedades de um objeto nas duas formas de acesso: notação de ponto (`.`) e notação de colchetes (`[]`).

### Redefinindo valores de propriedades usando a notação de ponto (`.`):

Com a notação de ponto, podemos redefinir o valor de uma propriedade diretamente usando o nome do objeto, seguido por um ponto (`.`), e, em seguida, o nome da propriedade que desejamos alterar, seguido do operador de atribuição (=) e o novo valor que queremos atribuir à propriedade.

Exemplo usando a notação de ponto para redefinir o valor da propriedade `cor` do objeto `meuCarro`:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}

meuCarro.cor = 'Azul';
console.log(meuCarro.cor)// Saída: 'Azul'

/*
Neste exemplo, redefinimos o valor da propriedade cor do objeto meuCarro para **"Azul"**. Agora, se acessarmos o valor da propriedade cor, ele será "Azul".
*/
```

### Redefinindo valores de propriedades usando a notação de colchetes (`[]`):

Com a notação de colchetes, também podemos redefinir o valor de uma propriedade, mas usando uma string que contém o nome da propriedade entre colchetes. Dentro dos colchetes, colocamos a string com o nome da propriedade que queremos alterar, seguido do operador de atribuição (`=`) e o novo valor que queremos atribuir à propriedade.

Exemplo usando a notação de colchetes para redefinir o valor da propriedade `ano` do objeto `meuCarro`:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}
meuCarro['ano'] = 2022;
console.log(meuCarro['ano'])//Saída: 2022

/*
Neste exemplo, redefinimos o valor da propriedade ano do objeto meuCarro para 2022. 
Agora, se acessarmos o valor da propriedade ano, ele será 2022.
*/
```

# Adicionando propriedades ao objeto

Para adicionar propriedades a um objeto em JavaScript, você pode usar três  sintaxe diferentes:

- Notação de ponto (`.`)
- Notação de colchetes (`[]`).
- Espalhamento(`...`)

### Adicionando propriedades com (`.`)

Aqui está um exemplo prático de como adicionar uma nova propriedade ao objeto `meuCarro` que mencionamos anteriormente:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
};

meuCarro.modelo = 'Corolla';
/*
Nesse exemplo, adicionamos a propriedade **"modelo"** ao objeto **"meuCarro"** e atribuímos o valor **'Corolla'** a essa nova propriedade. Agora, o objeto **"meuCarro"** possui a propriedade **"modelo"** com o valor **'Corolla'**.
*/
```

### Adicionando propriedades com (`[]`)

Você também pode adicionar propriedades dinamicamente com base em variáveis. 

Veja um exemplo:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
};

meuCarro['preco'] = 25000;

/*
Nesse exemplo, adicionamos a propriedade **"preco"** usando a notação de colchetes **[]** para adicionar dinamicamente a nova propriedade ao objeto **"meuCarro"**.

Agora, o objeto **"meuCarro"** possui as propriedades **"marca"**, **"cor"**, **"ano"**, **"classe"**,     **"isFlex"**, **"modelo"** e **"preco"**, cada uma com seu respectivo valor.
*/
```

### Adicionando propriedades com **a sintaxe de espalhamento**(`...`)

Para adicionar propriedades a um objeto usando a **sintaxe de espalhamento (spread operator)**, você pode criar um novo objeto que inclua as propriedades existentes e as novas propriedades que deseja adicionar. O operador de propagação (`...`) é usado para copiar todas as propriedades de um objeto existente para um novo objeto.

Aqui está um exemplo de como adicionar propriedades a um objeto usando o operador de propagação:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
};

const novoCarro = {
  ...meuCarro,  // Copia todas as propriedades do objeto meuCarro
  modelo: 'Corolla',
  preco: 25000
};

```

Nesse exemplo, criamos um novo objeto chamado `novoCarro` que contém todas as propriedades do objeto `meuCarro` usando o operador de propagação `...meuCarro`. Em seguida, adicionamos as novas propriedades `modelo` e `preco` ao novo objeto.

Agora, o objeto `novoCarro` tem as mesmas propriedades do objeto `meuCarro`, além das novas propriedades `modelo` e `preco`.

O uso do operador de propagação permite criar um novo objeto sem modificar diretamente o objeto existente. Isso é útil quando você deseja adicionar propriedades sem alterar o objeto original.

<aside>
💡 É importante mencionar que, se houver uma propriedade com o mesmo nome no objeto original e no novo objeto, o valor da propriedade **no novo objeto** substituirá o valor do objeto original.

</aside>

## Video complementar

[acessando-objetos.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0d75bf6-3667-456e-b84d-08c14bb45779/acessando-objetos.mp4)

# Resumo

| Tópico | Pontos Cruciais |
| --- | --- |
| Acessando valores nos objetos | - Notação de ponto 
Exemplo: `meuCarro.marca;`

- Notação de colchetes 
Exemplo: `meuCarro['marca'];` |
| Redefinindo valores de propriedades | - Notação de ponto 
Exemplo: `meuCarro.cor = 'Azul';`

- Notação de colchetes 
Exemplo: `meuCarro['cor'] = 'Azul';` |
| Adicionando propriedades ao objeto | - Notação de ponto
Exemplo: `meuCarro.nomeDaNovaPropriedade = 'valor';`

- Notação de colchetes
Exemplo: `meuCarro['nomeDaNovaPropriedade'] = 'valor';`

- Sintaxe de espalhamento (Spread Operator)
Exemplo: `const novoCarro = {...meuCarro, nomeDaNovaPropriedade: 'valor'};` |
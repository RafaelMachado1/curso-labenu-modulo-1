# Introdução a objetos em JS: Armazenando e modelando o mundo real

Em JavaScript, um objeto é uma estrutura de dados que pode armazenar informações e funcionalidades que tem ligações entre elas. Com os objetos conseguimos criar  códigos com base em modelos do mundo real de forma mais intuitiva.

<aside>
💡 Uma comparação entre variáveis e objetos: As variáveis em JavaScript armazenam valores simples, como números, strings ou booleanos, um objeto armazena várias variáveis e funções, que são chamadas de **propriedades e métodos**.

</aside>

Abaixo, um exemplo da vida real do que pode ser considerado um objeto. 

### Carro

**propriedades:**

- **marca:** toyota
- **cor:** prata
- **ano**: 2021
- **classe:** Sedan
- **é flex?:** sim

![](https://1.bp.blogspot.com/-niSkfeIyMZ4/XUCfFRZgtEI/AAAAAAAAB6A/nU6tILlvBUs9W7Rht_ZmzSD_UorLNsBrwCLcBGAs/s1600/Toyota-Prius-2020+%282%29.jpg)

Podemos nomear cada parte do nosso objeto da seguinte forma:

![Untitled](./img%20e%20videos/Untitled.webp)

- **Propriedades** são características do objeto, como cor, tamanho, peso, etc.
- As propriedades são semelhantes a variáveis, pois elas têm um nome e um valor associado.

# Criando um objeto

Para declarar um objeto em JavaScript, você pode usar a sintaxe de chaves `{}`. Dentro dessas chaves, você pode definir as propriedades e os valores do objeto separados por vírgulas.

Aqui está um exemplo básico de como declarar um objeto chamado **"meuCarro"** com as suas propriedades:

```jsx
const meuCarro = {
  marca: 'Toyota',
  cor: 'Prata',
  ano: 2021,
  classe: 'Sedan',
  isFlex: true
}
```

Neste exemplo, o objeto **"meuCarro"** possui cinco propriedades: `marca`, `cor`, `ano`, `classe` e `isFlex`. Você pode atribuir valores a cada uma delas usando a sintaxe `propriedade: valor`.

![Untitled](./img%20e%20videos/Untitled1.webp)

## Vídeo complementar

[declaracao-objeto.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba0a3dfd-25cf-489e-855a-6493d9e1ab21/declaracao-objeto.mp4)

# Resumo

1. Diferencie variáveis e objetos: Variáveis armazenam valores simples, enquanto objetos armazenam propriedades e métodos.
2. Identifique as propriedades do objeto: Propriedades representam características do objeto, como marca, cor, ano, classe e é flex.
3. Use **`{}`** para declarar objetos: Utilize a sintaxe de chaves para declarar objetos em JavaScript.
4. Atribua valores às propriedades: Utilize **`propriedade: valor`** para atribuir valores às propriedades do objeto.
5. Aplique objetos em situações reais: Use objetos para modelar o mundo real de forma intuitiva em seus projetos.
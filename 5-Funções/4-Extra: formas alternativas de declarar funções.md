# Extra: formas alternativas de declarar funções

<aside>
<img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" alt="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" width="40px" /> Se você está enfrentando dificuldades ao aprender sobre funções, lembre-se de que você não está só. Muitos estudantes encontram obstáculos nesse conteúdo. A chave para superar essas dificuldades é a prática constante e a paciência consigo mesmo(a). Não desanime diante dos desafios, pois cada obstáculo superado representa um avanço no seu aprendizado. **Lembre-se de que a persistência é a chave para o sucesso.

Pratique, experimente e peça ajuda quando necessário.**

</aside>

### Função não-nomeada

Podemos atribuir a declaração de uma função a uma variável. Chamamos isso de **expressão de função, função anônima**, ou **função não-nomeada.**

Expressões de função são uma forma **diferente** (mas bem parecida) de se declarar funções

Deve ser atribuída a uma **variável** e é **invocada** da mesma forma que a declaração, mas usando o nome da variável atribuída, como no exemplo abaixo:

```jsx
const calcularArea = function(altura, largura){
	const area = altura*largura;
	console.log(area);
}

calcularArea(3,2);
```

## Arrow function

Tipo de **expressão de função** com **sintaxe ainda mais simplificada.** Por ser uma expressão, sempre deve ser atribuída a uma variável para ser invocada. Nessa forma, o modo de chamada da função continua o mesmo. Chamamos *arrow function* devido ao sinal de `=>` que precede as chaves.

Exemplo abaixo:

```jsx
const calcularArea = (altura, largura) => {
	const area = altura*largura;
	console.log(area);
}

calcularArea(3,2);
```

## Observações

Assim como com as variáveis, as funções devem ter **nomes significativos**.

- Verbos no infinitivo, indicado uma **ação**
- camelCase
- Cada função deve, idealmente, realizar **apenas uma tarefa**.
- Se sua função tiver muitas responsabilidades, você deve fazer uma função para cada uma das responsabilidades
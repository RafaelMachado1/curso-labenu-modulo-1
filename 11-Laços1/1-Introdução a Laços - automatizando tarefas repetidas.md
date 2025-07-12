# Introdução a Laços: automatizando tarefas repetitivas

**Laços** (ou Loops) são estruturas fundamentais na programação que permitem **automatizar tarefas repetitivas**. Vamos usar o exemplo do relógio para entender melhor.

Antigamente, usávamos ampulhetas para medir o tempo.

![](./img%20e%20vídeos/Untitled.webp)

Quando a areia esgotava-se de uma câmara, o tempo era considerado decorrido. No entanto, era necessário virar manualmente a ampulheta para reiniciar a contagem do tempo. É importante ressaltar que **a ampulheta dependia da nossa intervenção para reiniciar a contagem**.

![](./img%20e%20vídeos/a510.gif)

Com o avanço da tecnologia, a ampulheta evoluiu para os relógios mecânicos e, posteriormente, para os relógios digitais.

![](./img%20e%20vídeos/What-time-is-it1.gif)

Eles substituíram amplamente as ampulhetas e os relógios mecânicos devido à sua maior precisão e facilidade de uso. Vale destacar que, **uma vez programados, os relógios executam automaticamente a tarefa de contar o tempo**, sem a necessidade de nossa intervenção repetitiva.

Vantagens do relógio digital:

1. Os relógios desempenham a mesma função que as ampulhetas.
2. São mais precisos e **automáticos**.
3. Eliminam a necessidade de interferência manual repetida.
4. **Ganhamos tempo**, pois não precisamos interferir manualmente.

Em resumo, a automatização por meio da programação de relógios nos permitiu otimizar nosso tempo e realizar a contagem de forma mais precisa. **É exatamente isso que os loops fazem:** **eles assumem a tarefa repetitiva por nós e reduzem nossa carga de trabalho ao escrever códigos repetitivos**.

## Exemplo de um problema de código

Veja um exemplo simples de como o loop pode colaborar na escrita de código:

**Problema:** Imprima no console um elemento de cada vez do array de números.

**Sem loop:**

![Untitled](./img%20e%20vídeos/Untitled1.webp)

**Com loop:**

![Untitled](./img%20e%20vídeos/Untitled2.webp)

**Ambos os exemplos atingem o mesmo resultado**, imprimindo um elemento de cada vez do array de números no console. A diferença é que o exemplo com loop é mais eficiente e escalável, pois evita a repetição manual de `console.log()` para cada elemento do array. Além disso, com o loop o código ocupa apenas **quatro linhas de código** para resolver o problema, enquanto que sem o loop usamos **onze linhas de código.**

Imagine se você tivesse que fazer isso para um array de 100 elementos sem usar loops?
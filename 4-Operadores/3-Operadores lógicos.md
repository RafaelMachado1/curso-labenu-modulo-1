# Operadores lógicos

<aside>
<img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" alt="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" width="40px" /> É perfeitamente normal que os operadores lógicos sejam confusos no início. Prepare-se para enfrentar esse desafio de frente, sabendo que pode levar várias tentativas até que tudo se encaixe. Lembre-se de que essa barreira é comum no mundo da programação, então não se assuste se encontrar dificuldades ao longo do caminho, pois é justamente nesses obstáculos que o aprendizado acontece e o crescimento ocorre.

</aside>

## Introdução

Operadores lógicos são usados para fazer combinações ou avaliar condições com base em valores booleanos. Eles nos permitem tomar decisões mais complexas em nossos programas. 

Para entender melhor, imagine que você tem duas perguntas com respostas "sim" ou "não". Os operadores lógicos ajudam a combinar essas respostas para tomar decisões.

# Os três operadores lógicos principais

1. **E lógico (`&&`)**
    
    Imagine que você tem duas perguntas, "Você está com fome?" e "Você tem dinheiro?". Se você quiser comer um lanche, ambas as respostas precisam ser "sim". O operador lógico **`&&`** verifica se ambas as condições são verdadeiras. Se ambas as respostas forem "sim", o resultado será verdadeiro (true); caso contrário, será falso (false).
    
2. **OU lógico (`||`)**
    
    Agora, suponha que você tem duas opções para comer: pizza ou hambúrguer. Você só precisa de uma resposta "sim" para escolher um dos dois. O operador lógico **`||`** verifica se pelo menos uma das condições é verdadeira. Se uma das respostas for "sim", o resultado será verdadeiro (true); apenas se ambas forem "não", o resultado será falso (false).
    
3. **NÃO lógico (`!`)**
    
     Às vezes, você precisa inverter uma resposta. Por exemplo, você tem a pergunta "Você não quer sobremesa?". Se a resposta for "sim" (ou seja, você não quer sobremesa), você pode inverter essa resposta usando o operador lógico "!". O resultado será o oposto da resposta original. Portanto, se a resposta original for verdadeira (true), a resposta invertida será falsa (false) e vice-versa.
    

![Operadores Lógicos.jpg](./img%20e%20videos/Operadores_Lgicos.webp)

### exemplos:

![Operadores Lógicos (1).jpg](./img%20e%20videos/Operadores_Lgicos_(1).webp)

## Tabela verdade

Uma tabela-verdade é uma forma de mostrar o resultado de uma combinação de expressões lógicas que tem valor de **verdadeiro** ou **falso**.

Elas são cruciais porque avaliam expressões lógicas e mostram relações entre variáveis. Abaixo, temos as tabelas verdade para o caso de duas variáveis, **A** e **B**, usando as operações **E**, **OU** e **NÃO**.

Tabelado o operador **E**

| A |  B | A **`&&`** B  |
| --- | --- | --- |
| **true** | **true** | **true** |
| **true** | **false** | **false** |
| **false** | **true** | **false** |
| **false** | **false** | **false** |

Tabelado o operador **OU**

| A |  B | A **`ou`** B  |
| --- | --- | --- |
| **true** | **true** | **true** |
| **true** | **false** | **true** |
| **false** | **true** | **true** |
| **false** | **false** | **false** |

Tabelado o operador **Não**

| A |`!` A  |
| --- | --- |
| **true** | **false** |
| **false** | **true** |

## Vídeo complementar

[Operadores Lógicos.mp4](./img%20e%20videos/Operadores%20Lógicos.mp4)

# Resumo

1. Operadores lógicos são usados para combinar ou avaliar condições com base em valores booleanos.
2. Os três operadores lógicos principais são o E lógico (&&), o OU lógico (||) e o NÃO lógico (!).
3. O E lógico verifica se duas condições são verdadeiras e retorna verdadeiro apenas se ambas forem verdadeiras.
4. O OU lógico verifica se pelo menos uma das condições é verdadeira e retorna verdadeiro se uma das condições for verdadeira.
5. O NÃO lógico inverte o valor de uma expressão booleana, transformando verdadeiro em falso e falso em verdadeiro.
6. As tabelas de verdade mostram o resultado de combinações de expressões lógicas usando os operadores E, OU e NÃO. Essas tabelas são úteis para avaliar expressões lógicas e entender as relações entre as variáveis.
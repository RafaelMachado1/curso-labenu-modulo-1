# **Tipos de dado﻿s primitivos**

<aside>
💡 As variáveis do JS assumem tipos que representam o que pode ser inserido nela:

**Números**: qualquer número, e em qualquer formato
**Textos:** que são chamados de **strings
Booleanos:** representam apenas dois valores possíveis  **true** ou **false**

</aside>

## **Números**

Também chamado de **number**, pode ser qualquer tipo e formatação.

**Sintaxe:**

```jsx
**let** idade = 32
**let** temperatura = -10
**let** preco = 3.50
```

Como podemos observar, os números podem ser de diferentes formatos: **1, 2, 4.5, 432, -62.5**

## **Strings**

São os tipos que representam conjuntos de caracteres (**texto).**

**Sintaxe:**

```jsx
**const** nome = "Fulano"
**let** estadoCivil = "Solteiro"
```

Como podemos observar, todo texto deve estar **entre aspas.** Caso contrário, não será lido como texto.

## **Booleanos**

São tipos que só assumem os valores **true** ou **false.**

**Sintaxe:**

```jsx
**let** souMenorDeIdade = true
```

Como podemos observar, diferente de número e strings, em booleanos só é possível ter dois resultados.

## **Tipos para o que não tem tipo??**

![Variáveis - Tipos de dados primitivos (1).png](./img%20e%20vídeos/Variveis_-_Tipos_de_dados_primitivos_(1).webp)

## **Transformando um tipo primitivo em outro tipo**

Podemos descobrir o tipo de uma variável `let` ou `const` usando **typeof**

**Sintaxe:**

```jsx
**const** got **=** "Game Of Thrones"
**const** temporadasDeGot **=** 8

//usando typeof para verificar tipo
**typeof** got //será exibido **string**
**typeof** temporadasDeGot // será exibido **number**
```

E caso o tipo não seja o que precisamos, podemos **transformá-lo**. Chamamos esta operação de **casting**

**Sintaxe:**

```jsx
**const** temporadasDeGot **=** 8
**const** textoTemporadasDeGot **= String**(temporadasDeGot)

**typeof** temporadasDeGot //será exibido **number**
**typeof** textoTemporadasDeGot //será exibido **string**
```

No entanto, nem sempre as transformações darão certo. O que acontece, por exemplo, se tentarmos converter para **número** a String "cinco"?

```jsx
const numeroConvertido = Number("cinco");
//o valor NaN será guardado na variável **numeroConvertido**
```

<aside>
💡 `NaN` é um tipo especial de valor numérico, que diz que um valor, apesar de ser do tipo Number, não é realmente um número. `NaN`, significa **N**ot **a** **N**umber (Não é um Número).

</aside>

## Video complementar

https://www.youtube.com/watch?v=pvZPaUVPIGk

# Resumo

1. Os tipos de dados em JavaScript incluem números, strings e booleanos.
2. Os números podem ser de diferentes formatos, positivos ou negativos, inteiros ou decimais.
3. As strings representam conjuntos de caracteres e devem estar entre aspas.
4. Os booleanos têm apenas dois valores possíveis: true (verdadeiro) ou false (falso).
5. É possível verificar o tipo de uma variável usando o operador typeof 
6. Podemos transformar um tipo em outro usando o casting. No entanto, nem todas as transformações serão bem-sucedidas, como tentar converter uma string que não representa um número em um número, resultando em NaN (Not a Number).
// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
     
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(numero => numero % 2 ===0 )  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter(numero => numero % 2 === 0).map(numero => numero ** 2);

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);
    const maiorDivisivelPorMenor = maior % menor === 0;
    const diferenca = maior - menor;

    const resultado = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,
    };
    return resultado;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 
 
  const arrayDePares = []; 

 
  for (let i = 0; i < n; i++) {
    
   
    const numeroPar = i * 2;
    
    
    arrayDePares.push(numeroPar);
  }

 
  return arrayDePares; 
  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
  
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  }
  
 
  if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  }
   
  else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
  if (!array || array.length < 2) {
    return [];
  }
      
  const arrayOrdenado = [...array].sort((a, b) => a - b);
    
  const segundoMenor = arrayOrdenado[1];
  
  const segundoMaior = arrayOrdenado[arrayOrdenado.length - 2];
  
  return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const elencoFormatado = filme.atores.join(', ');
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elencoFormatado}.`;
    return chamada;

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  };

  return pessoaAnonima;  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
  return pessoas.filter(pessoa => {    
    const temPermissao = pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
     
   
    return temPermissao;
  });
   
   
  
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(pessoa => 
    !(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
  );
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // Usamos .forEach para percorrer cada objeto 'cliente' no array 'contas'.
  contas.forEach(cliente => {
    // 1. Calcular o total de compras do cliente.
    // Usamos o método .reduce() para somar todos os valores no array 'compras'.
    // O '0' no final é o valor inicial do acumulador 'soma'.
    const totalCompras = cliente.compras.reduce((soma, compra) => soma + compra, 0);

    // 2. Atualizar o saldoTotal do cliente, subtraindo o total de compras.
    // Estamos modificando diretamente a propriedade do objeto original.
    cliente.saldoTotal -= totalCompras;

    // 3. Esvaziar o array de compras do cliente.
    // Atribuir um novo array vazio ou definir o .length como 0 são formas de limpar.
    cliente.compras = [];
  });

  // 4. Retornar o array original, que agora está modificado.
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   // 1. Criamos uma cópia do array original para não modificá-lo.
  // Usar o spread operator '[...consultas]' é uma forma moderna de fazer isso.
  const consultasCopia = [...consultas];

  // 2. Usamos o método .sort() na cópia.
  // A função de callback (a, b) => ... define como comparar dois elementos.
  consultasCopia.sort((a, b) => {
    // 3. O método a.nome.localeCompare(b.nome) é a forma correta de comparar strings.
    // - Retorna um número negativo se 'a.nome' vem antes de 'b.nome'.
    // - Retorna um número positivo se 'a.nome' vem depois de 'b.nome'.
    // - Retorna 0 se forem iguais.
    return a.nome.localeCompare(b.nome);
  });

  // 4. Retornamos o array copiado e agora ordenado.
  return consultasCopia;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   // 1. Criamos uma cópia do array original para não modificá-lo.
  const consultasCopia = [...consultas];

  // 2. Usamos o método .sort() na cópia.
  consultasCopia.sort((a, b) => {
    // 3. Para cada consulta 'a' e 'b', precisamos converter suas datas
    //    em um formato que possa ser comparado corretamente.

    // A. Separamos a string da data em [dia, mês, ano]
    const partesDataA = a.dataDaConsulta.split('/'); // Ex: "04/05/2021" -> ["04", "05", "2021"]
    const partesDataB = b.dataDaConsulta.split('/'); // Ex: "02/07/2021" -> ["02", "07", "2021"]

    // B. Criamos objetos Date do JavaScript no formato "AAAA-MM-DD", que é universal.
    // O construtor do Date aceita (ano, mês - 1, dia). Mês é baseado em zero (0=Janeiro).
    const dataA = new Date(partesDataA[2], partesDataA[1] - 1, partesDataA[0]);
    const dataB = new Date(partesDataB[2], partesDataB[1] - 1, partesDataB[0]);

    // 4. Agora podemos simplesmente subtrair as datas.
    // A subtração de dois objetos Date resulta na diferença em milissegundos.
    // - Se dataA < dataB, o resultado é negativo.
    // - Se dataA > dataB, o resultado é positivo.
    // - Se forem iguais, o resultado é 0.
    // Isso se encaixa perfeitamente no que o .sort() espera.
    return dataA - dataB;
  });

  // 5. Retornamos o array copiado e agora ordenado.
  return consultasCopia;
}
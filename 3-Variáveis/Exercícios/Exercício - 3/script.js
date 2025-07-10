/*
 * Exercício 3: Programa de Cadastro de RH
 * Lógica do programa em arquivo separado.
 */

// Solicitando todas as informações ao usuário
const nomeCompleto = prompt("a) Qual seu nome completo?");
const dataNascimento = prompt("b) Qual sua data de nascimento (dd/mm/aaaa)?");
const endereco = prompt("c) Qual seu endereço?");
const cpf = prompt("d) Qual seu CPF?");
const escolaridade = prompt("e) Qual sua escolaridade?");
const possuiCHN = prompt("f) Possui CNH? (Sim/Não)");

// g) Para a quantidade de filhos, usamos casting com Number()
// O prompt retorna uma string, e Number() a converte para número.
const quantosFilhos = Number(prompt("g) Quantos filhos(as) possui?"));

const cargoAtual = prompt("h) Qual seu cargo atual?");

// i) Para o salário, também usamos casting com Number()
const salario = Number(prompt("i) Qual seu salário?"));

// j) A função confirm() retorna um valor booleano (true para OK/Confirme, false para Cancelar)
const recebeComissao = confirm("j) Recebe comissão? (Clique em OK para 'Sim' ou Cancelar para 'Não')");

// k) Para o ano, também usamos casting com Number()
const anoAdmissao = Number(prompt("k) Qual o ano de sua admissão?"));


// Imprimindo o TIPO de cada variável no console
console.log("--- Análise dos Tipos de Variáveis ---");
console.log("Tipo de 'nomeCompleto':", typeof nomeCompleto);
console.log("Tipo de 'dataNascimento':", typeof dataNascimento);
console.log("Tipo de 'endereco':", typeof endereco);
console.log("Tipo de 'cpf':", typeof cpf);
console.log("Tipo de 'escolaridade':", typeof escolaridade);
console.log("Tipo de 'possuiCHN':", typeof possuiCHN);
console.log("Tipo de 'quantosFilhos':", typeof quantosFilhos);
console.log("Tipo de 'cargoAtual':", typeof cargoAtual);
console.log("Tipo de 'salario':", typeof salario);
console.log("Tipo de 'recebeComissao':", typeof recebeComissao);
console.log("Tipo de 'anoAdmissao':", typeof anoAdmissao);


// Criando o relatório final usando Template Literals (crases ``)
const relatorio = `
===== RELATÓRIO DO COLABORADOR =====

Nome Completo: ${nomeCompleto}
Data de Nascimento: ${dataNascimento}
Endereço: ${endereco}
CPF: ${cpf}
Escolaridade: ${escolaridade}
Possui CNH: ${possuiCHN}
Quantidade de Filhos: ${quantosFilhos}
Cargo Atual: ${cargoAtual}
Salário: R$ ${salario.toFixed(2).replace('.', ',')}
Recebe Comissão: ${recebeComissao ? 'Sim' : 'Não'}
Ano de Admissão: ${anoAdmissao}

====================================
`;

// Imprimindo o relatório no console
console.log("\n\n--- Relatório Completo ---");
console.log(relatorio);

// Exibindo o relatório na página HTML
// 1. O script encontra o elemento <pre> no HTML usando seu ID.
const elementoRelatorio = document.getElementById('relatorio-final');
// 2. O script atualiza o conteúdo de texto do elemento com a nossa variável 'relatorio'.
elementoRelatorio.textContent = relatorio;
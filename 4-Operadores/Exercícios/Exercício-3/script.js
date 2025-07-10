/*
=================================================
  Exercício 3 - Script para a página HTML
=================================================
*/

// --- Parte 1: Operações Lógicas ---

// a) 5 é maior que 20 e também é menor que 2;
const operacaoA = 5 > 20 && 5 < 2;
document.getElementById('resultA').textContent = operacaoA;

// b) 5 é igual a 5 ou é igual a “5”;
const operacaoB = 5 === 5 || 5 === "5";
document.getElementById('resultB').textContent = operacaoB;

// c) negação de (vinte é maior que cinquenta)
const operacaoC = !(20 > 50);
document.getElementById('resultC').textContent = operacaoC;

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacaoD = !(20 > 50 || 50 > 60);
document.getElementById('resultD').textContent = operacaoD;


// --- Parte 2: Cálculo de Salário ---

// Dados base
const salarioFixo = 2000.00;
const numeroFilhos = 2;
const auxilioCrechePorFilho = 45.50;
const percentualComissao = 0.10;
const percentualDescontoINSS = 0.05;

// Vendas mensais
const vendas = {
    janeiro: 5784.50,
    fevereiro: 3418.41,
    marco: 4124.10,
    abril: 1874.00,
    maio: 7000.00,
    junho: 9450.00
};

// 1. Calcule o salário fixo mais o auxílio creche
const totalAuxilioCreche = numeroFilhos * auxilioCrechePorFilho;
const salarioComAuxilio = salarioFixo + totalAuxilioCreche;
document.getElementById('salarioComAuxilio').textContent = `R$ ${salarioComAuxilio.toFixed(2)}`;

// 2. Calcule a comissão de janeiro
const comissaoJaneiro = vendas.janeiro * percentualComissao;
document.getElementById('comissaoJaneiro').textContent = `R$ ${comissaoJaneiro.toFixed(2)}`;

// 3. Calcule o desconto do INSS em janeiro
const baseCalculoINSSJaneiro = salarioFixo + comissaoJaneiro;
const descontoINSSJaneiro = baseCalculoINSSJaneiro * percentualDescontoINSS;
document.getElementById('descontoINSSJaneiro').textContent = `R$ ${descontoINSSJaneiro.toFixed(2)}`;

// 4. Calcule e exiba o salário de todos os meses
const reportContainer = document.getElementById('monthly-report-container');
let somaTotalSalarios = 0;
const meses = Object.keys(vendas);

for (const mes of meses) {
    const totalVendasMes = vendas[mes];
    const comissaoMes = totalVendasMes * percentualComissao;
    const salarioBrutoMes = salarioFixo + comissaoMes;
    const descontoINSSMes = salarioBrutoMes * percentualDescontoINSS;
    const salarioLiquidoMes = salarioBrutoMes + totalAuxilioCreche - descontoINSSMes;
    somaTotalSalarios += salarioLiquidoMes;

    // Cria um novo parágrafo para cada mês e o adiciona ao container
    const mesParagrafo = document.createElement('p');
    const nomeMesFormatado = mes.charAt(0).toUpperCase() + mes.slice(1);
    mesParagrafo.textContent = `${nomeMesFormatado}: R$ ${salarioLiquidoMes.toFixed(2)}`;
    reportContainer.appendChild(mesParagrafo);
}

// 5. Calcule e exiba a média do salário
const mediaSalarial = somaTotalSalarios / meses.length;
document.getElementById('mediaSalarial').textContent = `R$ ${mediaSalarial.toFixed(2)}`;
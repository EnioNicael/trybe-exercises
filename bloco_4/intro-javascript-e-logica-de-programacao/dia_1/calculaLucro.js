/**
 * Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 */

let custoDoProduto = 100;
let valorDeVendaProduto = 142;

if (custoDoProduto < 0 || valorDeVendaProduto < 0) {
  console.log('Erro!');
} else {
  let imposto = (custoDoProduto * 20) / 100;
  let valorCustoTotal = custoDoProduto + imposto;

  let lucro = (valorDeVendaProduto - valorCustoTotal) * 1000;

  console.log(lucro);
}

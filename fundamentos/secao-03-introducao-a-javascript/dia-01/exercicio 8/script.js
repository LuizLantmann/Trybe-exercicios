const num1 = 3;
const num2 = 13;
const num3 = 87;

let isOdd = true;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  isOdd = false;
}
console.log(isOdd);

// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto
// e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá
// ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%. 4

// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz
// parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
const custo = 10;
const valorVenda = 20;

if (custo >= 0 && valorVenda >= 0) {
  const custoTotal = custo * 1.2;
  const lucroTotal = (valorVenda - custoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("o valor não pode ser negativo");
}

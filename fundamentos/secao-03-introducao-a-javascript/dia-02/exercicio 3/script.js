let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let n3 = 0;

//Some todos os valores contidos no array e imprima o resultado;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20,
// imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  soma += numbers[i];
}
let n2 = soma / numbers.length;
console.log(n2);
if (n2 > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
for (index = 0; index < numbers.length; index++) {
  if (numbers[index] > n3) {
    n3 = numbers[index];
  }
}
console.log(n3);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum,
// imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;
for (indice = 0; indice < numbers.length; indice++) {
  if (numbers[indice] % 2 !== 0) {
    impares += 1;
  }
}
if (impares === 0) {
  console.log("nenhum valor impar encontrado");
} else {
  console.log(impares);
}
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let n4 = numbers[0]; // selfnote: ao buscar o menor valor começar pelo indice 0 do array
for (let ind = 0; ind < numbers.length; ind++) {
  if (numbers[ind] < n4) {
    n4 = numbers[ind];
  }
}
console.log("o menor valor é", n4);
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let num = [];
for (let x = 1; x <= 25; x++) {
  num.push(x);
}
console.log(num);
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let y = 0; y < num.length; y++) {
  console.log(num[y] / 2);
}

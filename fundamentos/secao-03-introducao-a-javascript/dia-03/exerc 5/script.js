// 1 -
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let arrayNum = [];
// let soma = 0;
// for (index = 1; index <= 50; index += 1) {
//   arrayNum.push(index);
//   soma += index;
// }
// console.log(soma);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let array = [];
// for (index = 2; index <= 150; index += 1) {
//   if (index % 3 === 0) {
//     array.push(index);
//   }
// }
// if (array.length === 50) {
//   console.log("Mensagem secreta parabens");
// }
// console.log(array);

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima
// o resultado no formato:

// "Player 1 won" ou "A Ties" ou "Player 2 won".
// let jogadas = ["pedra", "papel", "tesoura"]
// let player1 = ["pedra", "papel", "tesoura"]
// let player2 = ["pedra", "papel", "tesoura"]
//   for(index = 0; index < player1.length; index += 1){
//     for(index2 = 0; index2 < player2.length; index2 += 1){
//     if (player1[0] )
//   }
// }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idadePessoa = 15;

idadePessoa >= 18
  ? console.log("A pessoa é maior de idade")
  : console.log("a pessoa é menor de idade");

// 5
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
//"Pessoa" é a mais nova.

let carolzita = 25;
let flavio = 30;
let noel = 32;

if (carolzita < flavio && noel) {
  console.log("carol é a pessoa mais nova");
} else if (flavio < carolzita && noel) {
  console.log("flavio é a pessoa mais nova");
} else {
  console.log("noel é a pessoa mais nova");
}

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja,
//  é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console
//  o maior número primo entre 2 e 50.

let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
let biggestNum = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index] > biggestNum) {
    biggestNum = array.index;
  }
}
console.log(biggestNum);

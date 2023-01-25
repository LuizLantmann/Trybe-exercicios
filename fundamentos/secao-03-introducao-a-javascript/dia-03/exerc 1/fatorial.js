// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let resultado = num[0];
for (let index = 0; index < num.length; index += 1) {
  resultado = resultado * num[index];
}
console.log(resultado);

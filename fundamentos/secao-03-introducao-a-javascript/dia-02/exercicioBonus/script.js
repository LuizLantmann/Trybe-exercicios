// Bubble Sort !
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let index = 0; index < i; index += 1) {
//     if (numbers[i] < numbers[index]) {
//       let position = numbers[i]; // position recebe o valor de index A em numbers
//       numbers[i] = numbers[index]; // Numbers no index A recebera o valor de Index B em numbers
//       numbers[index] = position; // numbers no index B recebera o valor armarsenado em position
//     }
//   }
// }
// console.log(numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual
// ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá
// ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27,
// pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor,
// a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let arrayNovo = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    arrayNovo.push(numbers[index] * numbers[index + 1]);
  } else {
    arrayNovo.push(numbers[index] * 2);
  }
}
console.log(arrayNovo);

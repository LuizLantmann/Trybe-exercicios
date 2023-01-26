// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console
// a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = array[0];
let smallestWord = array[0];

for (index = 0; index < array.length; index += 1) {
  console.log("o index é", index);
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}
console.log(biggestWord);
console.log(smallestWord);

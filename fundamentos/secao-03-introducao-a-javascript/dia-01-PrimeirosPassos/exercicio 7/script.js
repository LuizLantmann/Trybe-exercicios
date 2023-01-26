let chessPiece = "Rei";

switch (chessPiece.toLowerCase()) {
  case "bispo":
    console.log("diagonals");
    break;

  case "rei":
    console.log("Uma casa apenas para qualquer direção.");
    break;

  case "cavalo":
    console.log('"L" pode pular sobre as peças.');
    break;

  default:
    console.log("valor invalido");
}

let nota = 10;

if (nota < 0 || nota > 100) {
  console.log("valor invalido");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

const anguloA = 30;
const anguloB = 30;
const anguloC = 120;

let angulosPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;
let soma = anguloA + anguloB + anguloC;

if (angulosPositivo) {
  if (soma == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Valores invalidos");
}

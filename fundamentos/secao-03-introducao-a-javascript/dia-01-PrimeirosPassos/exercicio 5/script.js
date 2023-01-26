const a = 4;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log("o maior numero é", a);
} else {
  console.log("o maior numero é", b);
}

const c = 10;
const d = 220;
const e = 30;

if (c > d && c > e) {
  console.log("o maior numero é", c);
} else if (d > c && d > e) {
  console.log("o maior numero é", d);
} else {
  console.log("o maior numero é", e);
}

const number = 4;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

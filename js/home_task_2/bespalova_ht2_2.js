let a = +prompt ("Введите любое число");
let b = +prompt ("Введите любое число");
let c = +prompt ("Введите любое число");


let result = a + b + c;

console.log (result);

if (a % 2 === 1) {
  console.log ("a - нечетное число");
} else if (a % 2 === 0) {
  console.log ("а - четное число");
} else {
  console.log ("a - это не число");
}

if (b % 2 === 1) {
  console.log ("b - нечетное число");
} else if (b % 2 === 0) {
  console.log ("b - четное число");
} else {
  console.log ("b - это не число");
}

if (c % 2 === 1) {
  console.log ("c - нечетное число");
} else if (c % 2 === 0) {
  console.log ("с - четное число");
} else {
  console.log ("с - это не число");
}
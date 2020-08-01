function calc(a, b, action) {
  let result;

  switch (action) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "^":
      result = a ^ b;
      break;
  }

  return result;
}

console.log(calc(1, 5, "+"));
console.log(calc(12, 8, "-"));
console.log(calc(4, 5, "*"));
console.log(calc(9, 3, "/"));
console.log(calc(8, 2, "%"));
console.log(calc(5, 1, "^"));

// function sum(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function prod(a, b) {
//   return a * b;
// }

// function division(a, b) {
//   return a / b;
// }

// function remainderOfDiv(a, b) {
//   return a % b;
// }

// function bitwiseXor(a, b) {
//   return a ^ b;
// }

// function calc(a, b, action) {
//   return action(a, b);
// }

// console.log(calc(1, 5, sum));
// console.log(calc(12, 8, minus));
// console.log(calc(4, 5, prod));
// console.log(calc(9, 3, division));
// console.log(calc(8, 2, remainderOfDiv));
// console.log(calc(5, 1, bitwiseXor));

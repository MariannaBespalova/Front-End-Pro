// Написать функцию getNumberOfEven(n) -
// получить количество четных цифр в числе
// getNumberOfEven(223344) // 4
// getNumberOfEven(111) // 0

function getNumberOfEven(n) {
  let sum = 0;
  n = String(n);
  for (const digit of n) {
    if (digit % 2 === 0) {
      sum++;
    }
  }
  return sum;
}
console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));

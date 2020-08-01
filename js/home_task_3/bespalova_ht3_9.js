let a = 6;
let count = 0;
let sum = 0;

for (let b = 1; b <= a; b++) {
  if (a % b === 0) {
    console.log(b);
  }
  if (a % b === 0 && b % 2 === 0) {
    count++;
    sum += b;
  }
}

console.log(count);
console.log(sum);

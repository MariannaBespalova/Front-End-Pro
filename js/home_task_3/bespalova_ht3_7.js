let sum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 1) continue;
  sum += i;
}

console.log(sum);
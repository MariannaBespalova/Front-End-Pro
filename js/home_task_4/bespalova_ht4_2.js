function circumference(r) {
  if (r > 0 && r !== 0) return (2 * Math.PI * r).toFixed(2);
  return undefined;
}

let result = circumference(2);

console.log(result);

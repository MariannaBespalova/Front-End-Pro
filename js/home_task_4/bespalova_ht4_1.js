function circleArea(r) {
  return (r > 0) ? (Math.PI * r ** 2).toFixed(2) : undefined;
}

console.log(circleArea(3));

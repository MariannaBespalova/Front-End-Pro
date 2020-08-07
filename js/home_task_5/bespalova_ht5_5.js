// Написать собственную реализацию функций every

function every(array, callback) {
  for (const element of array) {
    if (!callback(element)) {
      return false;
    } 
  }
  return true;
}

let array = [5, 8, 6];

function isEven(element) {
  return element % 2 === 0;
}

let result1 = every(array, isEven)
console.log(result1);

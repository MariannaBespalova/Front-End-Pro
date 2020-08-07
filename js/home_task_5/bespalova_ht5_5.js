// Написать собственную реализацию функций every

function every(array, callback) {
  for (const element of array) {
    if (!callback(element)) {
      return false;
    } 
  }
  return true;
}

const array = [5, 8, 6];

function isEven(element) {
  return element % 2 === 0;
}

const result1 = every(array, isEven)
console.log(result1);

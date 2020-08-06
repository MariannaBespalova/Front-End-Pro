//Написать собственную реализацию функций every

function some(array, callback) {
  for (const element of array) {
    if (!callback(element)) {
      return false;
    } else {
      return true;
    }
  }
}

let array = [2, 2, 2];

function isEven(element) {
  return element % 2 === 0;
}

let result = some(array, isEven)
console.log(result);

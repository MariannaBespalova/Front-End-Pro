//Написать собственную реализацию функций some

function some(array, callback) {
  for (const element of array) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

let array = [7, 8, 4, 2];

function isEven(element) {
  return element % 2 === 0;
}

let result = some(array, isEven)
console.log(result);

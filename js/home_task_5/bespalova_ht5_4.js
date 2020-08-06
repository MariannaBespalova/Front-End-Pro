//Написать собственную реализацию функций some

function some(array, callback) {
  for (const element of array) {
    if (callback(element)) {
      return true;
    } else {
      return false;
    }
  }
}

let array = [2, 8, 2];

function isEven(element) {
  return element % 2 === 0;
}

let result = some(array, isEven)
console.log(result);

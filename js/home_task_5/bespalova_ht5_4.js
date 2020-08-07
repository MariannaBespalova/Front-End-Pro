//Написать собственную реализацию функций some

function some(array, callback) {
  for (const element of array) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

const array = [7, 8, 4, 2];

function isEven(element) {
  return element % 2 === 0;
}

const result = some(array, isEven)
console.log(result);

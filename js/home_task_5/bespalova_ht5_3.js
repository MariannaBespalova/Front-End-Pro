//Написать собственную реализацию функций filter

function filter(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
}

const array = [8, 7, 9, 3, 2];

function isEven(element) {
  return element % 2 === 0;
}

const newArray = filter(array, isEven)
console.log(newArray);

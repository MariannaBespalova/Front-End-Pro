//Написать собственную реализацию функций map.

function map(array, callback) {
  const result = [];
  for (const element of array) {
    const newElement = callback(element);
    result.push(newElement);
  }
  return result;
}

const array = [8, 7, 9, 3, 2];

function prodOnTwo(element) {
  return element * 2;
}

let newArray = map(array, prodOnTwo);
console.log(newArray);
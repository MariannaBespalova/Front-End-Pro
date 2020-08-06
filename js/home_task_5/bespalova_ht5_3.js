//Написать собственную реализацию функций filter

function filter(array, callback) {
  let result = [];
  for (const element of array) {
    if (callback(element)) {
      result.push(element);
    };
  }
  return result;
}

let array = [8, 7, 9, 3, 2];

function isEven(element) {
  return element % 2 === 0;
}

let newArray = filter(array, isEven)
console.log(newArray);

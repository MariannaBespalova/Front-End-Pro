// Написать собственную реализацию функций forEach

let array = [1, 2, 3, 4, 5];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function writeInConsole(element) {
  console.log(`element: ${element}`);
}

forEach(array, writeInConsole);
let value;
let solution = 5;


while (true) {
  value = prompt("Угадай чиcло от 1 до 10");
  console.log (typeof value);
  if (value === null) {
    break;
  } else if (Number.isNaN(+value)) {
    alert("Только числа!");
  } else if (+value > 10 || +value < 0) {
    alert ("Будь внимателен! Диапозон от 0 до 10");
  } else if (+value != solution) {
    alert("Не угадал. Попробуй еще");
  } else if (+value === solution) {
    alert("Молодец!");
    break;
  } 
}

//Второй вариант решения

// do {
//   value = prompt("Угадай чиcло от 1 до 10");
//   if (value === null) {
//     break;
//   } else 
//   if (+value === solution) {
//     alert("Молодец!");
//   } else if (value != solution) {
//     alert("Не угадал. Попробуй еще");
//   }
// } while (value != solution);
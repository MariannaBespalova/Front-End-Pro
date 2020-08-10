// Написать функцию, которая принимает строку и возвращает данные о том, 
// сколько раз встречается каждая буква. Например, если передали строку “aaabbc”,
// то функция должна сообщить, что буква “a” встретилась 3 раза,
// буква “b” встретилась 2 раза, а буква “c” - 1 раз. 
// Функция не должна использовать console.log

function calcEachLetter(str) {
  const newObject = {};
  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (newObject[key] === undefined) {
      newObject[key] = 1;
    } else {
      newObject[key] = newObject[key] + 1;
    }
  }
  return newObject;
}

const str = "aaabbc";
console.log(calcEachLetter(str));

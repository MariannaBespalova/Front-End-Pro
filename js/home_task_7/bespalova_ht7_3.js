// Написать функцию, которая принимает строку и возвращает данные о том,
// сколько раз встречается каждая буква. Например, если передали строку “aaabbc”,
// то функция должна сообщить, что буква “a” встретилась 3 раза,
// буква “b” встретилась 2 раза, а буква “c” - 1 раз.
// Функция не должна использовать console.log

function calcEachLetter(str) {
  const newObject = {};
  for (let letter of str) {
    count = newObject[letter];
    newObject[letter] = count === undefined ? 1 : count + 1;
    console.log(newObject);
  }
  return newObject;
}

const str = "aaabbc";
console.log(calcEachLetter(str));

function countLettersOfString2(str) {
  const result = {};
  for (const letter of str) {
    const count = result[letter] || 0;
    result[letter] = count + 1;
  }
  return result;
}

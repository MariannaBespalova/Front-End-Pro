// Написать функцию getSymbolIndex(str,symbol) -
// возвращает индекс первого найденного символа в строке,
// или -1 если символ не найден
// getSymbolIndex("hello lol","h") // 0
// getSymbolIndex("hello lol","l") // 2
// getSymbolIndex("hello lol","v") // -1

function getSymbolIndex(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) return i;
  }
  return -1;
}

console.log(getSymbolIndex("hello lol", "h"));
console.log(getSymbolIndex("hello lol", "l"));
console.log(getSymbolIndex("hello lol", "v"));

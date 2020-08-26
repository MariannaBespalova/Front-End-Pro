// Написать функцию isSymbolPresentInString(str,symbol)
// возвращает true если символ найден в строке и false если нет.
// isSymbolPresentInString("abc","a") // true
// isSymbolPresentInString("abc","e") // false

function isSymbolPresentInString(str, symbol) {
  for (const element of str) {
    if (element === symbol) return true;
  }
  return false;
}

console.log(isSymbolPresentInString("abc", "a"));
console.log(isSymbolPresentInString("abc", "e"));

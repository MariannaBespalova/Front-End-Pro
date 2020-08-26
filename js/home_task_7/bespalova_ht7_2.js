// Напишите функцию, принимающую и сравнивающую два объекта.
// Если объекты содержат одинаковые ключи и значения, то функция возвращает true,
// если нет - false. Функция должна учитывать,
// что количество свойств в двух объектах может отличаться.

function compareObj(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const target = {
  a: 2,
  d: 4,
};

const origin = {
  a: 2,
  b: 4,
};

console.log(compareObj(target, origin));

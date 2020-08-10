// Написать функцию copy(target, origin),
// которая копирует свойства из объекта origin в объект target
// и возвращает новый объект со всеми свойствами.
// В данном задании используйте for ... in для работы со свойствами объектов.

function copy(target, origin) {
  const newObject = {};
  for (const key in target) {
    newObject[key] = target[key];
  }
  for (const key in origin) {
    newObject[key] = origin[key];
  }
  return newObject;
}


const target = {
  a: 2,
  b: 3
}

const origin = {
  a: 2,
  b: 4,
  c: 5
}

console.log(copy(target, origin));

// Написать функцию copy(target, origin),
// которая копирует свойства из объекта origin в объект target
// и возвращает новый объект со всеми свойствами.
// В данном задании используйте for ... in для работы со свойствами объектов.

function copy(target, origin) {
  for (const key in origin) {
    target[key] = origin[key];
  }
  return target;
}

const target = {
  a: 2,
  b: 3,
};

const origin = {
  a: 6,
  d: 4,
  c: 5,
};

console.log(copy(target, origin));

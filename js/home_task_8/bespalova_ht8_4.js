// Написать ф-цию, которая принимает два аргумента и рекурсивно их сравнивает.
// Аргументы могут быть разных типов (объекты, массивы, примитивы)
// Ф-ция должна вернуть true/false
// Ф-ция должна поддерживать объекты с любым уровнем вложенности

function deepEqual(a, b) {
  if (a === b) {
    return true; // eсли два одинаковых объекта ссылаются на одну область памяти
  } else if (typeof a !== "object" && typeof b !== "object") {
    return a === b; // сравниваем примитивы
  } else if (Object.keys(a).length !== Object.keys(b).length) {
    return false; //проверяю количество свойств двух объектов
  }
  for (const key of Object.keys(a)) {
    if (Object.keys(a)[key] !== Object.keys(b)[key]) {
      return false;
    }
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

const a = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const b = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

console.log(deepEqual(a, b));

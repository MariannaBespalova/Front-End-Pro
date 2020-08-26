// Написать ф-цию, которая принимает два аргумента и рекурсивно их сравнивает.
// Аргументы могут быть разных типов (объекты, массивы, примитивы)
// Ф-ция должна вернуть true/false
// Ф-ция должна поддерживать объекты с любым уровнем вложенности

function deepEqual(a, b) {
  if (a === b) {
    return true; // eсли два одинаковых объекта ссылаются на одну область памяти
  } else if (typeof a !== "object" && typeof b !== "object") {
    return a === b; // сравниваем примитивы
  } else if (a.length !== b.length) {
    return false; //проверяю количество свойств двух массивов
  } else if (Object.keys(a).length !== Object.keys(b).length) {
    return false; //проверяю количество свойств двух объектов
  }
  for (const key of Object.keys(a)) {
    if (Object.keys(a)[key] !== Object.keys(b)[key]) {
      return false;
    } else if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

const obj1 = {
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

const obj2 = {
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

console.log(deepEqual(obj1, obj2));

function isObject(a) {
  return typeof a === "object" && a !== null && !Array.isArray(a);
}

function isEqual(a, b) {
  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const key in a) {
      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }
  } else {
    return a === b;
  }
  return true;
}

const result = isEqual(obj1, obj2);
console.log(result);

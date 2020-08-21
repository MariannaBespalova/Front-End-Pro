// При нажатии на кнопку в тег с айдишником result нужно вывести:
// Общее кол-во всех тегов разных типов внутри wrapper
// Кол-во тегов типа p внутри wrapper
// Кол-во тегов типа span внутри wrapper
// Кол-во тегов, в которых содержимое - число
// Кол-во тегов, в которых содержимое - строка

const button = document.querySelector("button");

function allTagsQuantity() {
  const allTags = document.querySelectorAll("#wrapper *");
  const pTags = document.querySelectorAll("#wrapper p");
  const spanTags = document.querySelectorAll("#wrapper span");
  let result = document.querySelector("#result");

  if (wrapper === null || result === null) return;

  let sumOfStrings = 0;
  let sumOfNumbers = 0;
  for (const tag of allTags) {
    let text = tag.innerText;
    Number.isNaN(+text) ? sumOfStrings++ : sumOfNumbers++;
  }

  result.innerText = `Общее кол-во всех тегов: ${allTags.length}
  Кол-во тегов типа p: ${pTags.length}
  Кол-во тегов типа span:  ${spanTags.length}
  Кол-во тегов, в которых содержимое - число: ${sumOfNumbers}
  Кол-во тегов, в которых содержимое - строка: ${sumOfStrings}`;
}

if (button !== null) {
  button.addEventListener("click", allTagsQuantity);
}

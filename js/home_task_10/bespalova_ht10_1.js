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
  const result = document.querySelector("#result");

  if (wrapper === null || result === null) return;

  let sumOfStrings = 0;
  let sumOfNumbers = 0;
  for (const tag of allTags) {
    const text = tag.innerText;
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

function isString(x) {
  return Number.isNaN(+x);
}

const button = document.querySelector("button");
if (button !== null) {
  button.addEventListener("click", function () {
    const elements = document.querySelectorAll("#app span");

    // let numbers = 0;
    // let words = 0;

    // elements.forEach(element => {
    //     if (isString(element.innerHTML)) {
    //         words++;
    //     } else {
    //         numbers++;
    //     }
    // });

    // console.log(elements, numbers, words);

    const result = Array.from(elements)
      .map((elem) => elem.innerHTML)
      .reduce(
        (acc, value) => {
          // if (isString(value)) {
          //     acc.words++;
          // } else {
          //     acc.numbers++;
          // }

          // return acc;
          isString(value) ? acc.words++ : acc.numbers++;
          return acc;
          // const isValueString = isString(value);

          // acc.words = isValueString ? acc.words + 1 : acc.words;
          // acc.numbers = !isValueString ? acc.numbers + 1 : acc.numbers;

          // return acc;
        },
        { numbers: 0, words: 0 }
      );

    console.log(result);
  });
}

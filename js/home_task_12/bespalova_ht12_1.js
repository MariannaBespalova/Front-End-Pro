// Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0.
// При клике на любой квадрат цифра в нем увеличивается на один.
// * сделать чтоб внутри квадратов были кнопки +/-

const squares = document.querySelectorAll(".square");
const numbers = document.querySelectorAll("span");
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

function addOnSquare() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", (event) => {
      let result = +numbers[i].innerHTML;
      result++;
      numbers[i].innerHTML = result;
    });
  }
}

addOnSquare();

function addOnButton() {
  for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", (event) => {
      let result = +numbers[i].innerHTML;
      result++;
      numbers[i].innerHTML = result;
      event.stopPropagation();
    });
  }
}

addOnButton();

function reduceOnButton() {
  for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", (event) => {
      let result = +numbers[i].innerHTML;
      result--;
      numbers[i].innerHTML = result;
      event.stopPropagation();
    });
  }
}

reduceOnButton();

// Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый

const colorsArray = ["blue", "green", "yellow"];

const lastIndexInArray = colorsArray.length - 1;

for (const square of squares) {
  square.style.backgroundColor = colorsArray[0];
  square.addEventListener("click", () => {
    let currentColor = square.style.backgroundColor;
    let currentColorIndex = colorsArray.indexOf(currentColor);

    if (currentColorIndex !== lastIndexInArray) {
      currentColorIndex++;
      square.style.backgroundColor = colorsArray[currentColorIndex];
    } else if (currentColorIndex >= lastIndexInArray) {
      square.style.backgroundColor = colorsArray[0];
    }
  });
}
// const colors = ["blue", "green", "yellow"];

// for (const square of squares) {
//   square.style.backgroundColor = "blue";
//   square.addEventListener("click", () => {
//     if (square.style.backgroundColor === "blue") {
//       square.style.backgroundColor = "green";
//     } else if (square.style.backgroundColor === "green") {
//       square.style.backgroundColor = "yellow";
//     } else if (square.style.backgroundColor === "yellow") {
//       square.style.backgroundColor = "blue";
//     }
//   });
// }

// Сделать список. По клику на любой из элементов он выделяется красным цветом.
// Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается,
// и ставится на тот, по которому кликнули.

const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

let selectedLi;

for (const listItem of listItems) {
  listItem.addEventListener("click", (event) => {
    if (selectedLi) {
      selectedLi.classList.remove("red");
    }
    selectedLi = event.target;
    event.target.classList.add("red");
  });
}

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

// Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

function changeColor() {
  const colors = ["blue", "green", "yellow"];

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      for (const color of colors) {
        squares[i].style.backgroundColor = color;
      }
    });
  }
}

changeColor();

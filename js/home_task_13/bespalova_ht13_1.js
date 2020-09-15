function isInput(element) {
  return element instanceof HTMLInputElement;
}

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector(".submitBtn");
const inputEmail = document.querySelector("input[name='E-mail']");
const inputPassword = document.querySelector("input[name='password']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const inputEmailValue = inputEmail.value;
  const inputPasswordValue = inputPassword.value;

  if (!isValidEmail(inputEmailValue)) {
    inputEmail.style.backgroundColor = "red";
    button.disabled = "disabled";
  } else if (isValidEmail(inputEmailValue)) {
    inputEmail.style.backgroundColor = "white";
  }

  if (!isValidPassword(inputPasswordValue)) {
    inputPassword.style.backgroundColor = "red";
    button.disabled = "disabled";
  } else if (isValidPassword(inputPasswordValue)) {
    inputPassword.style.backgroundColor = "white";
  }

  if (!isValidPassword(inputPasswordValue) || !isValidEmail(inputEmailValue)) {
    return false;
  }

  const result = Array.from(form.elements)
    .filter((element) => isInput(element))
    .reduce((acc, element) => {
      const name = element.name;
      const value = element.value;

      acc[name] = value;

      return acc;
    }, {});

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  console.log(result);
});

inputEmail.addEventListener("keydown", () => {
  button.removeAttribute("disabled");
});

inputPassword.addEventListener("keydown", () => {
  button.removeAttribute("disabled");
});

const visibility = document.querySelector("#eyeBtn");
visibility.addEventListener("click", () => {
  const inputPassword = document.querySelector("input[name='password']");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
  const buttonText = visibility.innerHTML;

  visibility.innerHTML = buttonText === "Show" ? "Hide" : "Show";
});

function isValidPassword(passwordValue) {
  const passArray = passwordValue.split("");
  const allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const necessaryDigits = ["@", "$", "#", "!", "?", "&"];
  const isNecessaryDigit = passArray.some((digit) =>
    necessaryDigits.includes(digit)
  );
  const isNecessaryNum = passArray.some((digit) => allNumbers.includes(digit));

  if (passwordValue.length < 8 || !isNecessaryDigit || !isNecessaryNum) {
    return false;
  } else {
    return true;
  }
}

function isValidEmail(email) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
}

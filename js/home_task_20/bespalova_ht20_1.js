const input = document.querySelector(".input");
const messageContainer = document.querySelector(".message_container")
const button = document.querySelector(".btn");

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}


button.addEventListener("click", async () => {
  await chart();
})

input.addEventListener("keydown", async (event) => {
  if (event.code === "Enter") {
    await chart();
  }
})

async function chart() {
  if (input.value === "") {
    return;
  }
  createUserText()
  input.value = "";
  input.focus()
  const messages = document.querySelectorAll("p");
  const message = messages[messages.length - 1];

  if (message.innerText === "Ой, все") {
    endConversation()
    await wait(1000)
    createServerText("Ну, ладно-ладно, пока...");
  } else {
    await wait(1000)
    createServerText();
  }
}

function createUserText() {
  const message = document.createElement("p");
  message.innerText = input.value;
  message.className = "user_message";
  return messageContainer.appendChild(message)
}


function createServerText(text) {
  const serverPhrases = [
    'Ученье – свет, а неученье – приятный полумрак',
    'Ой, неужели все так плохо?',
    'Ты мне лучше подскажи, что подарить айтишнику на Новый Год?',
    'Подарки - это не главное, главное - внимание, согласен?',
    'На этом месте поподробнее...',
    'Со мной никогда не бывает скучно!',
    'Устроим вечеринку?',
    'Доставай мыльные пузыри и воздушные шары!',
    'В смысле? Что ты сейчас имел ввиду?',
    'Жизнь на Марсе существует? Если надоел, пиши: "Ой, все", обещаю остаться друзьями'
  ]

  let message = document.createElement("p");
  const randomPhrase = Math.floor(Math.random() * serverPhrases.length);
  message.innerText = text || serverPhrases[randomPhrase];
  message.className = "server_message";
  return messageContainer.appendChild(message)
}

function endConversation() {
  input.disabled = true;
  button.disabled = true;
}

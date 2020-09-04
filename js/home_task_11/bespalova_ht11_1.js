const wrapper = document.querySelector("#wrapper");

if (wrapper !== null) {
  const list = createList({ className: "list" });
  const user1 = createListItem({ text: "User1" });
  const user2 = createListItem({ text: "User2" });
  const user3 = createListItem({ text: "User3" });

  const form = createForm((value) => {
    const user = createListItem({ text: value });
    list.appendChild(user);
  });

  wrapper.appendChild(form);
  wrapper.appendChild(list);
  list.appendChild(user1);
  list.appendChild(user2);
  list.appendChild(user3);
}

function createForm(onAdd) {
  const container = document.createElement("div");
  container.className = "form";

  const inputName = document.createElement("span");
  inputName.innerHTML = "NAME: ";

  const input = createInput({
    placeholder: "Enter your name",
  });

  container.appendChild(input);

  const okButton = createButton({
    text: "OK",
    disabled: true,
    className: "inputButton",
  });

  okButton.addEventListener("click", () => {
    if (typeof onAdd === "function") {
      onAdd(input.value);
      input.value = "";
      okButton.disabled = true;
      input.focus();
    }
  });

  input.addEventListener("input", (event) => {
    const value = event.target.value;
    okButton.disabled = value === "";
  });

  container.appendChild(inputName);
  container.appendChild(input);
  container.appendChild(okButton);

  return container;
}

function createInput(props) {
  const placeholder = props.placeholder || "";
  const input = document.createElement("input");
  input.placeholder = placeholder;

  return input;
}

function createButton(props) {
  const text = props.text || "";
  const disabled = props.disabled || false;
  const className = props.className || "";

  const button = document.createElement("button");

  button.type = "button";
  button.innerHTML = text;
  button.disabled = disabled;
  button.className = className;

  return button;
}

function createList(props) {
  const className = props.className || "";
  const ul = document.createElement("ul");
  ul.className = className;
  return ul;
}

function createListItem(props) {
  const text = props.text || "";
  const li = document.createElement("li");
  const userName = document.createElement("span");
  userName.innerHTML = text;

  const editButton = createButton({
    text: "Edit",
    className: "edit_btn",
  });

  const deleteButton = createButton({
    text: "Delete",
    className: "delete_btn",
  });

  editButton.addEventListener("click", () => {
    const editName = prompt("Edit user's name");
    if (Number.isNaN(+editName) || !editName === "") {
      userName.innerHTML = editName;
      li.appendChild(editButton);
      li.appendChild(deleteButton);
    }
  });

  deleteButton.addEventListener("click", () => {
    let confirmDelete = confirm("Are you sure want to delete user?");
    if (confirmDelete === true) {
      li.remove();
    }
  });

  li.appendChild(userName);
  li.append(editButton);
  li.appendChild(deleteButton);

  return li;
}

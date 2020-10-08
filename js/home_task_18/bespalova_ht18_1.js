const BASE_URL = "https://rickandmortyapi.com/api/character/"
const wrapper = document.querySelector(".wrapper")

const buttonTypes = Object.freeze({
  prev: "prev",
  next: "next"
});

class Button {
  constructor(props) {
    this._button = document.createElement("button");
    this._button.innerText = props.innerText || "";
    this._button.className = props.className || "";
    this._button.dataset.type = props.dataset || "";
  }

  setDisabled(disabled) {
    this._button.disabled = disabled;
  }

  onClick(callback) {
    this._button.addEventListener("click", callback)
  }

  render() {
    return this._button;
  }
}

class Text {
  constructor(props) {
    this._text = document.createElement("span");
    this._text.className = props.className || "";
  }

  set text(value) {
    this._text.innerText = value;
  }

  render() {
    return this._text
  }
}

class ListItem {
  constructor(props) {
    this._listItem = document.createElement("li");
    this._span = document.createElement("span")
    this._span.innerText = props.spanText || "";
    this._image = document.createElement("img");
    this._image.src = props.src || "";
    this._listItem.className = props.className || "";
  }

  render() {

    this._listItem.appendChild(this._span)
    this._listItem.appendChild(this._image)
    return this._listItem;
  }
}

class List {
  constructor() {
    this._list = document.createElement("ul");

    this._prevButton = new Button({ innerText: "PREV", className: "btn" });
    this._nextButton = new Button({ innerText: "NEXT", className: "btn" });
    this._label = new Text({ className: "label" });
  }

  addList(text, value) {
    const li = new ListItem({
      className: "list_item",
      src: value,
      spanText: text,
    })

    this._list.appendChild(li.render());
  }

  setLabel(text) {
    this._label.text = text;
  }

  clear() {
    this._list.innerHTML = "";
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "list";

    wrapper.appendChild(this._list);
    wrapper.appendChild(this._prevButton.render());
    wrapper.appendChild(this._label.render());
    wrapper.appendChild(this._nextButton.render())

    return wrapper;
  }
}

class AjaxList extends List {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
    this.page = 1;
    this.data = {};
  }

  load() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    const searchParams = new URLSearchParams();
    searchParams.set("page", this.page);

    xhr.open("GET", `${this.baseUrl}?${searchParams}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.data = {
          hasNextPage: xhr.response.info.next !== null,
          hasPrevPage: xhr.response.info.prev !== null,
          result: xhr.response.results
        }
        this.onDataLoad()
      } else {
        console.error("Something went wrong")
      }
    }

    xhr.onerror = () => {
      console.error("ERROR")
    }
    xhr.send()
  }

  onDataLoad() {
    this.clear();
    this.setLabel(this.page);

    this._prevButton.setDisabled(!this.data.hasPrevPage);
    this._nextButton.setDisabled(!this.data.hasNextPage);

  }

  onNextButtonClick() {
    this.page++;
    this.load();
  }

  onPrevButtonClick() {
    this.page--;
    this.load();
  }

  render() {
    this._prevButton.onClick(this.onPrevButtonClick.bind(this));
    this._nextButton.onClick(this.onNextButtonClick.bind(this));
    this.load();
    return super.render()
  }
}

class CharacterList extends AjaxList {
  constructor() {
    super(BASE_URL);
  }

  onDataLoad() {
    super.onDataLoad()

    const listElements = this.data.result.map(item => {
      return {
        text: `${item.name}; status: ${item.status}`,
        image: item.image
      };
    })

    // const listElements = this.data.result.map(item => ({
    //   text: `Status: ${item.status}, name: ${item.name}`,
    //   image: item.image
    // }));

    listElements.forEach(element => this.addList(element.text, element.image));
  }
}

const list = new CharacterList();
document.body.appendChild(list.render())
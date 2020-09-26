const wrapper = document.querySelector(".wrapper");
if (wrapper !== null) {
	const dropdown = createDiv({ className: "dropdown" });
	const dropButton = createButton({ text: "Choose clock format", className: "dropbtn" });
	const dropdownContent = createDiv({ className: "dropdown-content" });
	const clock = createDiv({ className: "clock" });

	const arrOfFormats = [localTime, timeAmPm, timeReverse];
	const arrOfHref = ["localTime", "timeAmPm", "timeReverse"];
	const nameforLinks = ["Local Time", "Time AM/PM", "Time Reverse"];

	for (let i = 0; i < arrOfFormats.length; i++) {
		let links = createLink({ href: `#${arrOfHref[i]}`, text: nameforLinks[i], className: "format-clock" })
		dropdownContent.appendChild(links);
	}
	const links = dropdownContent.children

	dropButton.addEventListener("click", () => {
		dropdownContent.classList.toggle("show");
	})
	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn')) {
			if (dropdownContent.classList.contains('show')) {
				dropdownContent.classList.remove('show');
			}
		}
	}

	let selectedLink;
	for (let i = 0; i < arrOfFormats.length; i++) {
		let functionName = arrOfFormats[i];
		console.log(links[i])
		links[i].addEventListener('click', () => {
			if (selectedLink !== undefined) {
				clearInterval(selectedLink)
			}
			selectedLink = setInterval(() => {
				showFormat(functionName());
			}, 1000)
		})
	}

	function showFormat(clockFormat) {
		console.clear();
		console.log(clockFormat)
		clock.innerHTML = "";

		for (let i = 0; i < clockFormat.length; i++) {
			const divs = document.createElement("div");
			clock.appendChild(divs);
		}

		const divsForDigit = document.querySelectorAll(".clock div");
		for (let i = 0; i < clockFormat.length; i++) {
			divsForDigit[i].innerHTML = clockFormat[i];
		}

		const colors = ["blue", "yellow", "green", "red", "purple", "pink", "orange", "grey"];
		for (let i = 0; i < divsForDigit.length; i++) {
			divsForDigit[i].style.color = colors[i];
		}
	}

	wrapper.appendChild(dropdown);
	wrapper.appendChild(clock);
	dropdown.appendChild(dropButton);
	dropdown.appendChild(dropdownContent);
}

function localTime() {
	let currentTime = new Date();
	let sec = currentTime.getSeconds();
	let min = currentTime.getMinutes();
	let hours = currentTime.getHours();

	if (hours < 10) hours = `0${hours}`;
	if (min < 10) min = `0${min}`;
	if (sec < 10) sec = `0${sec}`;

	return `${hours}:${min}:${sec}`;
}

function timeAmPm() {
	let currentTime = new Date();
	let sec = currentTime.getSeconds();
	let min = currentTime.getMinutes();
	let hours = currentTime.getHours();

	var amPm = hours >= 12 ? 'pm' : 'am';
	if (min < 10) min = `0${min}`;
	if (sec < 10) sec = `0${sec}`;
	hours = hours % 12;
	hours = hours ? hours : 12;
	if (hours < 10) hours = `0${hours}`;

	return `${hours}:${min}:${sec}${amPm}`;
}

function timeReverse() {
	let currentTime = new Date();
	let sec = currentTime.getSeconds();
	let min = currentTime.getMinutes();
	let hours = currentTime.getHours();

	if (hours < 10) hours = `0${hours}`;
	if (min < 10) min = `0${min}`;
	if (sec < 10) sec = `0${sec}`;

	return `${sec}:${min}:${hours}`;
}


function createButton(props) {
	const text = props.text || "";
	const className = props.className || "";

	const button = document.createElement("button");

	button.type = "button";
	button.innerHTML = text;
	button.className = className;

	return button;
}

function createDiv(props) {
	const text = props.text || "";
	const className = props.className || "";

	const div = document.createElement("div");

	div.innerHTML = text;
	div.className = className;

	return div;
}

function createLink(props) {
	const text = props.text || "";
	const className = props.className || "";
	const href = props.href || "";

	const link = document.createElement("a");

	link.innerHTML = text;
	link.className = className;
	link.href = href;

	return link;
}
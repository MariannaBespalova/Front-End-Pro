const wrapper = document.querySelector(".wrapper");
if (wrapper !== null) {
	const dropdown = createSelect({ name: "time-format", className: "time-select" });
	const clock = createDiv({ className: "clock" });


	const arrOfFormats = [localTime, timeAmPm, timeReverse];
	const nameforOptions = ["Local Time", "Time AM/PM", "Time Reverse"];

	for (const item of nameforOptions) {
		let option = createOption({ text: item, className: "format-clock" })
		dropdown.appendChild(option);
	}

	let selectedLink;
	dropdown.addEventListener("change", () => {
		setTimer()
	})
	setTimer();

	function setTimer() {
		clearInterval(selectedLink);
		showFormat(setFormat(dropdown.value));

		selectedLink = setInterval(() => {
			showFormat(setFormat(dropdown.value));
		}, 1000)
	}

	function showFormat(clockFormat) {
		console.clear();
		console.log(clockFormat)
		clock.innerHTML = "";
		const colors = ["blue", "yellow", "green", "red", "purple", "pink", "orange", "grey"];

		for (let i = 0; i < clockFormat.length; i++) {
			const div = createDiv({ text: clockFormat[i] });
			div.style.color = colors[i]
			clock.appendChild(div);
		}
	}

	function setFormat(string) {
		for (let i = 0; i < nameforOptions.length; i++) {
			if (string === nameforOptions[i]) {
				return arrOfFormats[i]();
			}
		}
		return undefined;
	};

	wrapper.appendChild(dropdown);
	wrapper.appendChild(clock);
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


function createDiv(props) {
	const text = props.text || "";
	const className = props.className || "";

	const div = document.createElement("div");

	div.innerHTML = text;
	div.className = className;

	return div;
}

function createOption(props) {
	const text = props.text || "";
	const className = props.className || "";
	const disabled = props.disabled || false;

	const option = document.createElement("option");

	option.innerHTML = text;
	option.className = className;
	option.disabled = disabled;

	return option;
}

function createSelect(props) {
	const name = props.name || "";
	const className = props.className || "";

	const select = document.createElement("select");

	select.name = name;
	select.className = className;

	return select;
}
const myLabel = document.getElementById("myLabel");

setInterval(update, 1000);
update();

function update() {
	const date = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	};

	const locale = "tr-TR";
	const text = date.toLocaleDateString(locale, options);
	myLabel.innerText = text;
}

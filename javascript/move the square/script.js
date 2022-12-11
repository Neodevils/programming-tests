const square = document.getElementById("square");

window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event) {
	switch (event.key) {
		case "ArrowUp":
			y -= 10;
			square.style.top = y + "px";
			break;
		case "ArrowDown":
			y += 10;
			square.style.top = y + "px";
			break;
		case "ArrowLeft":
			x -= 10;
			square.style.left = x + "px";
			break;
		case "ArrowRight":
			x += 10;
			square.style.left = x + "px";
			break;
		default:
			break;
	}
}

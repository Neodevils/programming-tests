// Variables
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Increment the count
function increment() {
	count++;
	countEl.innerText = count;
}

// Save the count to the browser's local storage
function save() {
	let countStr = `${count} - `;
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
}

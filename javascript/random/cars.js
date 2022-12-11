class Cars {
	constructor(model, year, color) {
		this.model = model;
		this.year = year;
		this.color = color;
	}

	drive() {
		console.log(`You are driving ${this.name}`);
	}
}

const car1 = new Cars("BMW", 2019, "red");
const car2 = new Cars("Toyota", 2018, "blue");
const car3 = new Cars("Lamborghini", 2017, "yellow");

const cars = [car1, car2, car3]; // Array of cars

startRace(cars);

function startRace(cars) {
	for (const car of cars) {
		car.drive(); // You are driving BMW ...
	}
}

let user: [number, string, boolean][]; // This is a tuple type

user = [
	[1, "mica", true],
	[2, "neo", false],
	[3, "saku", true],
]; // This is a tuple type

let rgb: [number, number, number] = [255, 123, 112]; // This is a tuple type either

type User = [number, string, boolean]; // This is a tuple type alias

const newUser: User = [1, "mica", true]; // This is a tuple type either
newUser[0] = 2; // Looks cool

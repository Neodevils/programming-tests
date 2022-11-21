let score: number | string = "a hundred"; // This is an union type
score = 100; // This is an union type

type User = {
	name: string;
	id: number;
}; // This is a type alias

type Admin = {
	name: string;
	id: number;
	permissions: string[];
}; // This is a type alias

let neo: User | Admin = { name: "Neo", id: 1 }; // This is an union type
neo = { name: "devil", id: 2, permissions: ["kill"] }; // This is an union type

function getDatabaseId(id: number | string) {
	if (typeof id === "string") {
		return id.toLowerCase();
	}
	return id.toString();
}

getDatabaseId(1); // This is an union type // 1
getDatabaseId("1"); // This is an union type // "1"

const data: (number | string | boolean)[] = [1, 2, 3, 4, "5", true]; // This is an union type

let setMinesa: "mica" | "neo" | "saku"; // This is an union type

setMinesa = "mica"; // This can only be "mica" | "neo" | "saku" like if statement
export {};

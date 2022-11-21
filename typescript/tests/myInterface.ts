interface User {
	readonly dbId: number;
	myProperty: string;
	myMethod(): string;
	getCount(count: string, value: number): number;
}

interface Admin extends User {
	role: "admin";
}

const neo: Admin = {
	role: "admin",
	dbId: 1,
	myProperty: "Hello World",
	myMethod: () => {
		return "hello";
	},
	getCount: (count: "neodevil", value: 666) => {
		return parseInt(count) + value;
	},
}; // This is an interface type

export {};

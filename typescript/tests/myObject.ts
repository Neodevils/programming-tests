type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	creditcard?: number;
};

let myUser: User = {
	_id: "123",
	name: "John",
	email: "",
	isActive: true,
};

type cardNumber = {
	cardNumber: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cardCVV: number };

myUser.email = "neoaichan@gmail.com";

export {};

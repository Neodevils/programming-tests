class Users {
	public email: string;
	name: string;
	private readonly city: string = "";

	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
}

const neo = new Users("neoaichan@gmail.com", "Neo");

export {};

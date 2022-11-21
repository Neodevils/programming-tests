const superPeople: string[] = []; // This is an array of strings
const peoplePower: Array<number> = []; // Array<number> is the same as number[]

type Person = {
	name: string;
	isActivated: boolean;
};

const allPeople: Person[] = []; // This is an array of Person objects

const Models: number[][] = [[366], [33]]; // This is an array of arrays of numbers

superPeople.push("Superman");
peoplePower.push(100);

allPeople.push({ name: "Superman", isActivated: true });

export {};

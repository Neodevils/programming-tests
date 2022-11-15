const obj = {
	name: "neo",
	age: 21,
	"some-text": true,
	sayMyName: function () {
		console.log(this.name);
	},
};

obj.hobby = "coding";

console.log(obj.age);
console.log(obj["some-text"]);
obj.sayMyName();

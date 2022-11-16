const obj = {
	name: "neo",
	age: 21,
	"some-text": true,
	sayMyName: function () {
		console.log(this.name); // neo
	},
}; // Object of mixed types

obj.hobby = "coding"; // Add new property

console.log(obj.age); // 21
console.log(obj["some-text"]); // true
obj.sayMyName(); // neo

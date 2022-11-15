const arr = [1, 2, 3, "some string", { a: 1, b: 2 }, [1, 2, 3]]; // Array of mixed types

for (const item of arr) {
	console.log(item); // 1, 2, 3, "some string", { a: 1, b: 2 }, [1, 2, 3]
}

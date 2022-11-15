const set = new Set([1, 2, 3]);

set.add(4); // Set(4) {1, 2, 3, 4}
set.add(4); // Duplicate values are ignored

console.log(set.has(4)); // true
set.delete(3); // Set(3) {1, 2, 3}

console.log(set.size); // 3
set.clear(); // Set(0) {}

for (const item of set) {
	console.log(item); // 1, 3, 4
}

console.log(set.has(1)); // true

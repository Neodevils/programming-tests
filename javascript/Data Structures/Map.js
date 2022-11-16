const map = new Map([["a", 1], ["b", 2]]); // Setting values for each key in array

map.set("c", 3); // Setting a new key & value
map.delete("c"); // Deleting a key

console.log(map.has("a")); // Checking if there's the "a" key
console.log(map.size); // Logging Map's size

map.clear(); // Clearing the Map

for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // Returns true and 2, since map is cleared
};

let score = "a hundred"; // This is an union type
score = 100; // This is an union type
let neo = { name: "Neo", id: 1 }; // This is an union type
neo = { name: "devil", id: 2, permissions: ["kill"] }; // This is an union type
function getDatabaseId(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id.toString();
}
getDatabaseId(1); // This is an union type // 1
getDatabaseId("1"); // This is an union type // "1"
const data = [1, 2, 3, 4, "5", true]; // This is an union type
let setMinesa; // This is an union type
setMinesa = "mica"; // This can only be "mica" | "neo" | "saku" like if statement
export {};

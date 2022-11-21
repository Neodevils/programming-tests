const neo = {
    role: "admin",
    dbId: 1,
    myProperty: "Hello World",
    myMethod: () => {
        return "hello";
    },
    getCount: (count, value) => {
        return parseInt(count) + value;
    },
}; // This is an interface type
export {};

let a = 20,
    b = 10;

function divide() {
    if (b == 0) {
        throw new Error("Division by zero, please try again!"); // if the b is 0, return the error
    }
    return a / b; // 20 / 10 = 2
}
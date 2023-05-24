class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hasPaid = false;
    }

    pay() {
        this.hasPaid = true;
    }
}

const john = new Person("John", 20);
const mary = new Person("Mary", 21);

john.pay();
const people = [john, mary];

function checkPayment(people) {
    for (const person of people) {
        if (!person.hasPaid) {
            console.log(`${person.name} has not paid`);
        } else {
            console.log(`${person.name} has paid`);
        }
    }
}

checkPayment(people); // John has not paid

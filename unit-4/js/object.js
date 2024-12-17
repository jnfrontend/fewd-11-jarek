
let age = 18;
let name = "Jarek";
let salary = 1234567890;
let isMarried = true;

// Object
let John = {
    age: 18,
    name: "John",
    salary: 500,
    isMarried: false,
    canDrink: function() {
        return this.age >= 18; // boolean
    },

    // greet: function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    // }
}

let Mark = {
    age: 18,
    name: "Mark",
    salary: 300,
    isMarried: false,
    canDrink: function() {
        return this.age >= 18; // boolean
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

function canDrink(person) {
    return person.age >= 18; // boolean

    // OR

    // person.age >= 18;
}

console.log('John details: ', person);
console.log('Can John drink: ', canDrink(John));
console.log('Can Mark drink: ', canDrink(Mark));

function sum(value, value2, value3) {
    return value + value2 + value3;
}

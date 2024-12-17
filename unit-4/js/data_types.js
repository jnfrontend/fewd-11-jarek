alert('Hello world!');

let x = 18; // type number

let d = new Date();
console.log(typeof x);

let b = true; // true or false is boolean
console.log(typeof b);

// Method .includes() can be use only for string; 
console.log(x.includes("8") > 8); // Fix error: change x value to "18"

if (typeof x === "string") {
    console.log(x.includes("8"));
}

let car;

if (car) {
    console.log("Car is defined");
} else {
    console.log("Car is not defined");
}
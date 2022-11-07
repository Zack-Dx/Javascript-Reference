//Unpack values from Arrays and Objects into distinct variables.

let arr = ["Javascript", "C", "CSS", "HTML"];

let [a, b, c, d] = arr;
console.log(a, b, c, d);

let [top1, , , last] = arr;

console.log(`My first value is ${top1} and last value is ${last}`);

// We can first declare and assign to:

let arr2 = ["Zack"];

let student;// Declared here

[student] = arr2; // Assigned here 

console.log(student)

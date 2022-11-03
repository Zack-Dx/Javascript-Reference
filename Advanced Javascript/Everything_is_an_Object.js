// Types in Javascript

// PRIMITIVE DATA TYPES:- NULL, NUMBER , BOOLEAN, BigInt, String, Symbol, Undefined.

//Primitive data types hold values.

// NON-Primitive Data Types have reference not values.

// NON-Primitive Data Type / Reference Data type : OBJECT

// typeOf NULL is an object.

const user = {
  name: "Zack",
  id: 3,
};

user.lname = "Dx";
console.log(user);

//Example of Function as an Object:

// As we can see check.property same as object!

const check = () => console.log("Checking")

check()
console.log((check.letshavefun = "Alright Added I'm an object too"));

// Array is an OBJECT

const arr = [1, 2, 3];

console.log(arr);

const arrobj = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(arrobj); // This will give same output as the array above so this is kind of Array is an Object else we can use typeOf(operator) to check.

// To check if an Object is an ARRAY or not use `Array.isArray(arrayname)`

console.log(Array.isArray(arr));

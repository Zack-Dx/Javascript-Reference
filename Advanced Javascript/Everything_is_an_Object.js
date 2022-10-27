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

const check = () => {
  console.log("checking");
};

console.log((check.letshavefun = "Alright Added I'm an object too"));

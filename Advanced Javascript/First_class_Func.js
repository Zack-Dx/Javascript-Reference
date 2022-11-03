// 1. Function assigned to a variable is First Class Function.

// Variable Case:
let a = function () {
  console.log("HELLO");
};

a();

// But not only for variables, we can pass functions to objects as a property & they are called Methods.

let obj = {
  name: "Zack",
  firstClass: function () {
    console.log("Checked!");
  },
};

obj.firstClass();

// 2. We can pass functions as an argument too.

const myName = () => {
  return "Hello";
};

const greeting = (sayHi, name) => {
  console.log(sayHi + name);
};

greeting(myName(), "Zack");

// This is also a callback function basically passing a function as an argument.

// 3. Returning a function from a function.

function a1() {
  return function b() {
    console.log(`Javascript Reference`);
  };
}

// a1()() // We can call through double parenthesis too.

// Even with a varibale too:

let c = a1();
c();

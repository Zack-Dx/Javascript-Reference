// Object can call each other's methods
// Function borrowing

//Used to manipulate `this`

// obj1.method.call(obj2)

//obj1 = who's method;
//obj2(object where method needs to be used)

const obj1 = {
  name: "Zack",
  closely(firstname, lastname) {
    return `Hello this is myfirstname ${this.name} and here is my lastname ${this.lname}`;
  },
};

//Function:

function sleek(greetings, name) {
  return `Hello ${greetings} and ${name}`;
}

const obj2 = {
  name: "John",
  lname: "Doe",
};

let a = obj1.closely.call(obj2);
console.log(a);

let b = sleek.call(obj2, "Hello", "Zacks");
console.log(b);

// What if you want to pass an array: Use apply() method: (Only array typoe parameters)

let c = sleek.apply(obj2, ["good morning", "Zack"]);
console.log(c);

// Hum sleek se array banake bhi return karsakte hai.

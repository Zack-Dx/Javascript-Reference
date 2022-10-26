const product = {
  name: "Mobile",
  price: 1000,
};

//Objects = KEY : VALUE pair!

// Enhanced Object Literals

//Compututed PROPERTY Keys:

const keyName = "device"; //To set the key wihout hardcoding it.

const technology = {
  [keyName]: "Mobile",
  price: 1000,
};

console.log(technology);

//Method defination shorthand:

const obj = {
  name: "James",
  lname: "Bond",

  calling() {
    console.log("Called");
  }, // This is shorthand method defination without function keyword and :
};

//Property Shorthand:
const fname = "Clever";
const lname = "Bond";
const mname = "foo";
const obj2 = {
  fname: fname,
  lname: lname,
  mname, //If your key and value has the same name you just need to write it once.
};

console.log(obj2);

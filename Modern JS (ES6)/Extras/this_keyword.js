// `this` keyword refers to the object in javascript.

// It has different values because it's based where it's usec.

// Alone, this refers to the Global Object. basically (Window Object)

// Case :1 (this inside a regular function.)

function check() {
  console.log(this);
}

check(); // This will represent to the Window Object.

// Case:2 (this inside a method)

const user = {
  name: "Zack",
  qualification: "JS developer",

  checker() {
    console.log(this.name); // Here this will refer to the Owner Object as `this` is logged inside a Method.
  },
};

user.checker();


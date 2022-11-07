// Nested Objects (Important to learn for JSON)

const obj1 = {
  name: "Zack",

  obj2: {
    name: "Damn",

    obj3: {
      name: "Dx",
    },
  },
};

// How to access obj3

console.log(obj1.obj2.obj3.name);

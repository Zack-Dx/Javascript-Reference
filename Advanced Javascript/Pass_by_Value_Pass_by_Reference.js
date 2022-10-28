// Primitive Type:

let a = 5; // Primitive Value
let b = a; // Copied primitive value

b = b + 5; // b is now independent

console.log(a, b);

// Once a primitive value is copied like a=b, both the variables get independent.

// Reference Type:

const obj = {
  name: "Zack",
  pass: "Password",
};

const obj2 = obj;

obj2.name = "Czech"; // Value changed.

console.log(obj);
console.log(obj2);

// In this case obj's value will get changed too and here objects are not independent too.

// Because both the objects will get same memory and address so either obj or obj2 changes. Both will get changed.

let arr = [1, 2, 3, 4, 5];
let arr2 = arr;

console.log(arr2);

// So, array is an object it'll use reference type

arr2.push(6);

console.log(arr);
console.log(arr2); // Both will get changed as per reference data type same as object

// If we want to pass a value in array as per Primitive type

arr2 = [].concat(arr);

console.log(arr2);

arr2.push(7);

console.log(arr); // Here arr will not get changed as we passed a value using empty array.
console.log(arr2);

// Array.prototype.map() 🙋‍♂️

// Returns a new array containing the results of calling a
// function on every element in this array.

//Helps to perform dactions on each and every element on the array same as kind of forEach.

// const arr = [1, 4, 6, 78, 99];

// let newArr = arr.map((element, index, arr) => {
//   return element >5;
// });

// console.log(arr);

// console.log(newArr);

// let newArr =arr.map((element,index)=>{
// return `Element is ${element} and it's index number is ${index}`
// })

// console.log(newArr)

//You can attach reduce, sort, filter with the map method.

// Square-roots of elements using map method.

// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((elem)=>{
//     return Math.sqrt (elem)
// })
// console.log(arrSqr)

// Map Chaining

// let arr2 = arr.map((elem)=>{
//     return elem *2
// }).filter((elem)=>{
//     return elem> 100
// }).reduce((accumulator, elem)=>{
// return accumulator += elem
// })

// console.log(arr2)

// Reduce Method

// Flattens an array means to convert the 3d or 2d array into a
// single dimensional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator - To store the data.
// Current Value
// Current Index
// Source Array

// let arr = [1, 2, 3];

// let sum = arr.reduce((accumulator, element, index, array) => {
//     debugger;
//   return (accumulator += element);
// },7); //7 here is an initial value.(optional)

// console.log(sum);


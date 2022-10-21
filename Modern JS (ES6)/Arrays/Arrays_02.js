// When we feel like storing multiple values in one variable then
// we will use an Array.

// In JavaScript, we have an Array class, and
// arrays are the prototype of this class.

// let myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// Array Subsection 1 👉 Traversal in array
// navigate through an array:

// If we want to get the single data at a time  and also
// If we want to change the data

// let myFriends = ['ramesh',22,'male','arjun',20,'vishal',true, 52];
// console.log(myFriends[2])

//Index starts with [0]

//If we want to check the length of elements of an array

// let myFriends = ['ramesh',22,'male','arjun',20,'vishal',true, 52];
// console.log(myFriends.length)

//Length starts with (1)

//Navigate through an array
// we use for loop to navigate!

// let myFriends = ["Zack", "ramesh", "arjun", "vishal"];
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }


// After ES6 we have for..in and for..of loop too 

// let myFriends = ['Zack','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }// Returns the index number.

// for(let elements of myFriends){
//   console.log(elements);
// }//Returns the elements in an array.


// Array.prototype.forEach() 🙋
// Calls a function for each element in the array.

// let myFriends = ['Zack','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

//Using forEach we can get elements/index/array at the same time.


// Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It searches the element from the 
// 0th index number 


// let myFriendNames = ["Zack","Bahadur","Dx","Abhisek","Bhabesh"];

// console.log(myFriendNames.indexOf("Bhabesh"));


// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first



// let myFriendNames = ["Zack","bahadur","Dx","Abhisek","Bahadur","Bhabesh"];

// console.log(myFriendNames.lastIndexOf("bahadur"));


// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.


// let myFriendNames = ["Zack","bahadur","Dx","Abhisek","Bahadur","Bhabesh"];

// console.log(myFriendNames.includes("bahadur"));




// Array.prototype.find() 🙋‍♂️

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];


// const finder= prices.find((element)=>{
// return element<400
// })

// console.log(finder)

//Finder is just a variable not a function.


// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.

// const prices = [200,300,350,400,450,500,600];

// const checker = prices.findIndex((elements)=>{
//     return elements <500
// })

// console.log(checker)


// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// const checker =prices.filter((elements)=>{
//     return elements  < 500
// })

// console.log(checker)



// Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.

// Array.prototype.reverse() 🙋‍♂️
// The reverse() method reverses an array in place. 
// The first array element becomes the last, and 
// the last array element becomes the first.

// const arr = [1,2,3,4,5,6,7,8,9]
// const checker = arr.reverse()
// console.log(checker)

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.push(3));// Returns length
// console.log(array1)

// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.unshift(3));// Returns length
// console.log(array1)


// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.pop());// Returns the popped element
// console.log(array1.length)//Reduces the length

// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.


// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.shift());// Returns the removed element
// console.log(array1.length)//Reduces the length


// / Array.prototype.splice() 🙋‍♂️
// Adds or removes elements from an array.

// const array1 = [1, 30, 4, 21, 100000, 99];

// const spliced = array1.splice(2,1,5)

// console.log(spliced)// Returned the deleted element.
// console.log(array1.length)


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
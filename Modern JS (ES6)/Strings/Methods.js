// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor

// let myName = "Zack Dx"
// let myChannelName = "Zack's Code"

// let ytName = 'Zack Dx YT';

// console.log(myName.length);// Space is also counted as a string length.
// console.log((ytName));

// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);


// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

// const myBioData =  'I am Zack Dx';
// let sData = myBioData.search("Z");
// console.log(sData);


// The search() method cannot take a second start position argument.



//  👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// let str = "Apple, Banana, Kiwi, Mango";
// let res = str.slice(0,4);

// let res = str.slice(5);
// console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.


// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am Zack Dx`;

// let replaceData = myBioData.replace('Zack','ALAN');
// console.log(replaceData);
// console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Only works if its the same string.




//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));


// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// let str = "HELLO WORLD";

// console.log(str.charCodeAt(2) );

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// let str = "HELLO WORLD";
// console.log(str[0]);


//👉  Other useful methods 

// let myName = "ZacksdX";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());


// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "Zack"
// let lName = "Dx"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));



// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

// let str = "              Hello World!            ";
// console.log(str.trim())


// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// let txt = "a,b,c,d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe
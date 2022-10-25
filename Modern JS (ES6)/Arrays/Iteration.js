const actors = [
  {
    name: "Zack",
    salary: 200,
  },
  {
    name: "Pooran",
    salary: 500,
  },
  {
    name: "Typical",
    salary: 700,
  },
];
//For loop to iterate:
for (let i = 0; i < actors.length; i++) {
  actors[i].salary = actors[i].salary - 100;
}
//forEach is better and readable than for loop:

actors.forEach((element, index) => {
  element.salary = element.salary - 100;
});

//For of loop (more readable)

// for (elements of actors) {
//   console.log(elements);
// }

//Filter (Returns a new array)

const students = [
  {
    name: "Student 1",
    marks: 45,
  },
  {
    name: "Student 2",
    marks: 60,
  },
  {
    name: "Student 3",
    marks: 35,
  },
];

const failed = students.filter((student) => student.marks < 45);

// console.log(failed);

//Map Method (Returns a new array with the same length as parent.) (element,index)

const users = [
  {
    fname: "John",
    lname: "Doe",
  },
  {
    fname: "Jane",
    lname: "Doe",
  },
];

const Mainuser = users.map((user) => {
  return {
    fullname: `${user.fname} ${user.lname}`,
  };
});

// console.log(Mainuser);

//Reduce Method

const movies = [
  {
    name: "Interstellar",
    budget: 150,
  },
  {
    name: "365 Days",
    budget: 250,
  },
  {
    name: "Matrix",
    budget: 350,
  },
];

const total = movies.reduce((acc, movie) => {
  acc += movie.budget;
  return acc;
}, 0); // 0 is the initial value for the accumulator.

console.log(total);

// indexOf Method (Checks value and returns the index and if not it'll return '-1')

const admins = [2, 1, 5];
const user = {
  name: "James",
  id: 5,
};

console.log(admins.indexOf(user.id));

//includes Method (Includes is better than indexOf)

console.log(admins.includes(user.id));

//Find Method

const peeps = [
  {
    name: "user1",
    id: 1,
  },
  {
    name: "user2",
    id: 2,
  },
  {
    name: "user3",
    id: 3,
  },
];

const myUser = peeps.find((user) => {
  return user.id === 3;
});

console.log(myUser);

//Sort Method (Sorts Alphabetically)

const names = ["John", "Sangam", "Crusher", "Bomber"];

names.sort();

console.log(names);

//Splice Method

const children = ["Mario", "Headache", "Brahmasmi"];

children.splice(1, 1);
console.log(children);

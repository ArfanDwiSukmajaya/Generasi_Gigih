// Additional JS materials

// 1. Optional Chainig
// const students = [{ name: "Alice", age: 20 }];
// students.forEach((student) => {
//   console.log("Age", student?.age);
// });
// console.log("Second Student");

// 2. Object Destructuring
// function studentsAgeReducer2(acc, { age }) {
//   return acc + age;
// }

// function averageAge2(students) {
//   const totalAge = students.reduce(studentsAgeReducer2, 0);
//   return totalAge / students.length;
// }

// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 21 },
//   { name: "Jane", age: 20 },
// ];

// console.log(averageAge2(students));

// const obj = { name: "Alice", age: 20 };
// const { name, age } = obj;
// console.log(name, age);

// 3. Shorthand Property Names
// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 21 },
//   { name: "Jane", age: 20 },
// ];
// const name = "John";
// const age = 20;
// const newStudent = { name, age };
// students.push(newStudent);
// students.forEach((student) => {
//   console.log(student.name);
// });

// 4. Rest and spread
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 20 },
];
const name = "John";
const age = 20;
const newStudent = { name, age };
const newStudents = [...students, newStudent];
console.log(newStudents);

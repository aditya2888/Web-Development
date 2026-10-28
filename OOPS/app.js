// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function() {

//         return this.marks;
//     }
// }

// const stu2 = {
//     name: "rajat",
//     age: 25,
//     marks: 96,
//     getMarks: function() {

//         return this.marks;
//     }
// }

// const stu3 = {
//     name: "suraj",
//     age: 35,
//     marks: 93,
//     getMarks: function() {

//         return this.marks;
//     }
// }


// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayhello = () =>{

//     console.log("I am an arr");
// };

// arr2.sayhello = () =>{

//     console.log("I am an arr");
// };

// // console.log(arr1.__proto__); // print all prototype

// // changing the definition of prototype
// // we can access the proto and changing the definition according to us
// arr1.__proto__.push = (n) => {

//     console.log("pushing number", n);
// };

// console.log(arr1.push(2));

// console.log(arr1);

// console.log(Array.prototype);

// console.log(String.prototype);

// console.log(arr1.sayhello === arr2.sayhello);  // return false, because when e create function , it REFERS TO different memory LOCATION

// console.log("abc".toUpperCase === "xyz".toUpperCase); // RETURN TRUE, BECAUSE THIS STRING FUNCTION DEFINE IN PROTOTYPE AND DOES NOT MAKE COPY, REFER TO THE SAME FUNCTION


// Factory Functions => A function that creates object

// function PersonMaker(name, age){

//     const person = {

//         name: name,
//         age: age,

//         talk(){
//             console.log(`HI MY NAME IS ${this.name}`);
//         },
//     }; 

//     return person;
// };


// let p1 = PersonMaker("adam", 21); // copy

// console.log(p1);
// console.log(p1.talk());

// let p2 = PersonMaker("shitij", 23); // copy

// console.log(p2);

// console.log(p2.talk());

// console.log(p1.talk === p2.talk);


// better way 

// Constructor => doesn't return anything and start with capital letter

// function Person(name, age){

//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hi this is my name: ${this.name}`);
// }

// let p1 = new Person("aditya", 21);
// let p2 = new Person("shitij", 23);


// Classes Concept

// class Person{

//     constructor(name, age){

//         this.name = name;
//         this.age = age;
//     }

//     talk(){

//         console.log(`HI this is my name: ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 23);

// let p2 = new Person("eve", 24);

// console.log(p1.talk === p2.talk); // print true

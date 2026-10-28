// THIS keyword = > Used to acces the property of the object in the function
// this keyword refers to an object that is executing the current piece of code


// const student = {

//     name: "aditya",
//     age: 21,
//     eng: 67,
//     mth: 78,
//     phy: 80,

//     getAvg() {

//         console.log(this);

//         let avg = (this.eng + this.mth + this.phy) / 3;  // to access the eng, phy, and mth(property) in calling object , we use this keyword
//         console.log(`${this.name} got average marks ${avg}`);
//     }
// }

// // student.getAvg();// here student is calling object


// function getAvg() {

//         console.log(this);
//     }

// getAvg()  // refers to the window object, outside the object



// console.log(window.getAvg());  // to call any object we refer to the window 

// console.log(window.alert("HI"));

// window is the highest object in which all property and functions are defined , if this does not refer to any object then it refer to window object



// try and catch 


// console.log("hello");
// console.log("hello");
// // let a = 5;
// try{
//     console.log(a);

// } catch(err){

//     console.log("error caught, a is not defined");
//     console.log(err);
// }


// console.log("hello2");
// console.log("hello2");



// Miscellaneous topics

// Arrow function

// const sum = (a,b) => {

//     console.log(a + b);
// };


// sum(1,2);

// console.log(sum);


// const cube = (n) => {

//     return n*n*n;
// };

// const cube = n => {  // in case of single argument , paranthesis is not compulsary
//     return n*n*n;
// };


// console.log(cube(5));


// const pow = (a,b) => {

//     return a **b;
// }


// let p = pow(2,3);

// console.log(p);


// const hello = (a) => {

//     for(let i=1; i<=a; i++){

//         console.log("hello");
//     }
// }

// hello(200);


// arrow function implicit return


// const mul = (a,b) => (a * b);    // not have to write the return keyword , because it is implicit return


// console.log(mul(4,5));


// const pow = (a,b) => (a **b);


// console.log(pow(2,4));


// const sum = (a,b) => a*b;

// console.log(sum(1,2));



// Set timeout FUNCTION  =>   setTimeout(function,timeout) // function as a callback , timeout is the timing defined in mili seconds


// console.log("Hi There");

// setTimeout( () => {

//     console.log("Hello World");
// }, 4000);

// console.log("Yeah Man");



//  const func = function(a, b){

//     console.log(a * b);
//  };


// // setTimeout(() => {
// //     func(2,3)
// // },2000);


// setTimeout(function(){

//     func(2,3)
// },4000);

// console.log("Hi there");
// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welcome to");


// SetInterval =>   execute the function after defined interval of time , repeatedly,  setInterval(func,timeout);



// setInterval(() => {
//     console.log("Apna college");
// },2000);



//  const func = function(a, b){

//     console.log(a * b);
//  };


// // setInterval(() => {
// //     func(2,3)
// // },2000);


// setInterval(function(){

//     func(2,3)
// },4000);


// Define ID


// let id1 = setInterval(() => {
//     console.log("Apna college");
// },2000);

// console.log(id1);


// let id2 = setInterval(() => {
//     console.log("Apna College");
// },3000);

// console.log(id2);


// clearInterval(id2);   // to clear the interval using id



// This with arrow function 

// Arrow  => Lexical Scope, have same scope as parent scope => call

// function => scope depend on them , this, calling object



// const student = {
//     name:"aman",
//     marks: 95,
//     prop: this, // global scope , for this, this is window object
//     getName : function getName(){

//         console.log(this);   // for this, this keyword is student object
//         return this.name;
//     }
// }

// // console.log(student);


// const a = 5; // global scope


// console.log(student.getName());


// console.log(this);



// 1.2

// const student = {
//     name:"aman",
//     marks: 95,
//     prop: this,
//     getName : function getName(){

//         console.log(this);   
//         return this.name;
//     },

//     getMarks: (() => {
    
//         console.log(this); // here,  this works on parents scope, and parent's scope is global , so it prints window object when call
//         return this.marks;   // here it says undefined when call, because in global scope getMarks is undefined
//     })
// };

// console.log(student.getMarks());      



// 1.3



// const student = {
//     name:"aman",
//     marks: 95,
//     prop: this,
//     getName : function getName(){

//         console.log(this);   
//         return this.name;
//     },

//     getMarks: (() => {
    
//         console.log(this);
//         return this.marks;   
//     }),

//     getInfo1: function() {

//         setTimeout(() => {

//             console.log(this);  // IT REFERS TO THE STUDENT OBJECT , WHEN USED ARROW FUNCTION, WORKS ON PARENT KO CALL LAGANE WALI OBJECT KA  SCOPE
//         })
//     },

//     getInfo2: function() {
//         setTimeout( function(){

//             console.log(this);  // IT REFER TO WINDOW OBJECT , BECAUSE SETtIMEOUT DEFINED IN WINDOW OBJECT, THIS REFER TO PARENT SCOPE IN NORMAL FUNCTION
//         })
//     }
// };


// student.getInfo1();
// student.getInfo2();



//  Prac Ques


// const square = (a) => (a * a);

// console.log(square(4));


// function sqr(a){

//     return a * a;

// };



// setTimeout(() => {
//     console.log(sqr(4));
// },2000);


// setInterval(() => {
//     console.log(sqr(5));
// },2000);





// let id = setInterval(() => {

//     console.log("Hello World");
// },2000);


// setTimeout(() => {

//     clearInterval(id);   // the interval will stop after 10 seconds using id
// },10000);



// function sqr(a,b){

//     return a * b;
// };


// setInterval(() => {

//     console.log(sqr(2,3));
// },2000);




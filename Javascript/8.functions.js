// function hello() {
//     console.log("Hello");
// }


// function  printName() {

//     console.log("Apna college");

//     console.log("Aditya Nayak");
// }

// function oneto5 (){

//     for(let i=0; i<=5 ; i++){

//         console.log(oneto5);
//     }
// }


// function isAdult(){

//     age = prompt("Enter the age: ");

//     if(age <=18){

//         console.log("You can't vote");
//     } else{

//         alert("You fucking old man");
//      }
// }

// isAdult();


// function printPoem(){

//     console.log("Twinkle twinkle little star");
//     console.log("Hhow I wonder what you are");
// }

// printPoem();
// printPoem();


// Practice Question 


// function rollDice (){

//     const valueDice = Math.floor((Math.random() * 6) + 1);

//     console.log(valueDice);
// }

// rollDice();


// functions with arguments

// function printName(name) {

//     console.log(name);
// }

// printName("Aditya");

// printName("aman");




// function printName(name, age){

//     console.log(`${name}'s age is ${age}`);
// }


// printName("Aditya", 18);

// printName("Ridhi", 16);

// printName("Akshat");

// printName(15);  // now it passed as first argument in name



// average of 3 numbers


// function calcAvg(a,b,c){

//     let avg =  (a + b + c) / 3

//     console.log(avg);
// }

// calcAvg(3,5,6);

// calcAvg(60,60,60);


// print multiplication table

// function multiTable(num){

//     for(let i = 1; i <=10; i++){

//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

// multiTable(5);

// function multiTable(n){

//     for(let i=n; i<=n * 10; i += n){

//         console.log(i);
//     }
// }

// multiTable(10);




//Return Keyword : It is used to return some value from the function


// function sum(a,b){

//     return a + b;  // return does not print the value , it only returns it
// }

// console.log(sum(3,4));  // to print the value , you have to console log it


// new way to call function 

// function sum(a,b){

//     return a + b;
// }

//  let cal  = sum(sum(1,2), 3);

//  console.log(cal);

// function sum(a,b){

//     return a + b;

//     console.log("Hello World1");

//     console.log("Hello World2");  // These statements will not print , because they are printed after return statement
// }

// function isAdult(age) {

//     if(age < 18){
//         return "Suno nibbo";
//     } else{

//         return "Maroge ni , Pagal hoke maroge";
//     }

//     console.log("Hello nibbo");  // will not get printed
// }

// let eligblity = isAdult(17);

// console.log(eligblity);

//   let sum = 0;

// function calcSum(n){


//     for(let i=1; i<=n; i++){

//         sum += i;
//     }

//     return sum;

// }

// // let Sum = calcSum(5);  // 1st way

// console.log(Sum);


// console.log(calcSum(5));  // 2nd way


// Prac ques => A function that returns concatenation of all strings in an array


// let arr = ["apple", "banana", "orange", "pineapple", "watermelon"]

// function concatStr(str) {

//     let result = "";

//     for(let i=0; i< arr.length; i++){

//         result += arr[i];
//     }

//     return result;

// }

// console.log(concatStr(arr));



// Scope => Scopes determines the accessiblity of the variable , object and function from the different part of the code

// Function scope => variable defined inside the function are not accessible or visible from outside the function

// 1.1
// let  sum = 54; // Global scope
// function calSum(a,b) {

//     let sum = a+b;  // functional scope , high specificity

//     console.log(sum);
// }

// calSum(1,2);  // print functional scope sum

// console.log(sum);  // print global scope sum

//1.2

// let  sum = 54; // Global scope
// function calSum(a,b) {

//     // let sum = a+b;  

//     console.log(sum);
// }

// calSum(1,2);  // now the global scope sum is being printed, because global scope variable can be used anywhere in code, also inside the function

// console.log(sum);  // print global scope sum


// Blocked Scope => Variable declared inside a {} block cannot be accessed from outside the scope


// {

//     let a = 24;
// }


// console.log(a);   // cannot be accessed



// for(let i = 0; i <= 5; i++){

//     console.log(i);
// }

// console.log(i); // cannot be accessed , outside the block


// let age = 25;

// if(age >= 18){
//     let str = "adult";
// }

// console.log(str);  // cannot be accessed outside the block


// Lexical Scope => a variable defined outside the function can be accessible inside another function defined after the variable declaration
// but opposite is not true


// function outerFunc(){

//     let x = 5;
//     let y = 6;

//     function innerFunc(){

//         console.log(x);   // variable can be accessible inside this function , if defined in outside function
//     }

//     innerFunc();
// }

// outerFunc();



// function outerFunc(){

//     function innerFunc(){

//         console.log(x);   // this can be possible , because of hoisting
//         console.log(y);  // variable can be accessible inside this function
//     }

//     let x = 5;
//     let y = 6;  

//     innerFunc();
// }

// outerFunc();




// function outerFunc(){


//     let x = 5;
//     let y = 6;  

//     function innerFunc(){

//         let a = 10;

//         console.log(x);  
//         console.log(y);  // variable can be accessible inside this function, if defined in outside
//     }

//     console.log(a); // here a cannot be accessible outside the function, defined in inner function


//     innerFunc();
// }

// outerFunc();



// function outerFunc(){

//     let x = 5;
//     let y = 6;

//     function innerFunc(){  // function scope

//         console.log(x);   // variable can be accessible inside this function , if defined in outside function
//     }

//     innerFunc();
// }

// innerFunc();   // it cannot be accessed outside function scope
// outerFunc();



// let greet = "hello";  // global scope

// function changeGreet(){
//     let greet = "namaste"; // functional scope  // can only be used inside the function

//     console.log(greet);

//     function innerGreet(){

//         console.log(greet);  // lexical scope
//     }

//     innerGreet(); 
// }

// console.log(greet);

// changeGreet();


// Function expressions


// let name = "Aditya";


// let sum = function(a,b){   // here function can be stored in variable, and we can call variable for function

//     return a + b;
// }

// console.log(sum(1,2));


// let hello = function(){

//     console.log("hello");
// }

// hello();

// hello = function(){

//     console.log("namaste");
// }

// hello();


// Higher Order Function

// A function that does one or both :

// takes one or multiple functions as arguements
// return a function




// function multipleGreet(func, count){

//     for(let i=1; i<=count; i++){

//         func()
//     }

// }   

//     let  greet = function(){

//     console.log("hello");
// }



// multipleGreet(greet,100);

// multipleGreet(function(){console.log("namaste")},1000);



// Function that returns a function


// let request = "odd";

// function  oddEvenTest(request){

//     if(request == "odd"){

//          let odd = function(n){

//     return console.log(!(n % 2 == 0));

//     }

//     return odd;

//     }

//     else if( request = "even"){

//         let even = function(n){

//         return console.log((n % 2 == 0));
//     }

//     return even;

//     }

//     else{

//         console.log("Wrong input");
//     }
// }


// console.log(oddEvenTest(request));

// console.log(oddEvenTest(request));


// let func = oddEvenTest(request);  // for even


// func(6);

// func(7);



// let func = oddEvenTest(request);  // for odd


// func(6);

// func(7);


// let request = "odd";

// function  oddEvenTest(request){

//     if(request == "odd"){

//         return function(n){

//     return console.log(!(n % 2 == 0));

//     }

//     }

//     else if( request = "even"){

//         return function(n){

//         return console.log((n % 2 == 0));
//     }

//     }

//     else{

//         console.log("Wrong input");
//     }
// }


// let func = oddEvenTest(request);

// func(12);




// Methods => Actions that can be performed on an object


// const calculator = {

//     num: 55,

//     add: function(a, b){

//         return a + b;
//     },

//     sub: function(a,b){

//         return a - b;
//     },

//     mul: function(a, b){

//         return a * b;
//     }

// };


// console.log(calculator);

// console.log(calculator.num);

// console.log(calculator.add);  // return function

// console.log(calculator.add(1,4));

// console.log(calculator.sub(4,1));


// let arr = [1,2,3];

// console.log(typeof arr);

// arr.pop();

// console.log(arr);



// other way to define methods in objects
// const calculator = {

//     num: 55,

//     add(a, b){

//         return a + b;
//     },

//     sub(a,b){

//         return a - b;
//     },

//     mul(a, b){

//         return a * b;
//     }

// };


// console.log(calculator.mul(5,3));








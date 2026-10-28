// function hello(){

//     console.log("inside hello fxn");

//     console.log("hello");
// }


// function demo(){

//     console.log("Calling hello fxn");
//     hello();
// }

// console.log("calling demo fxn");
// demo();

// console.log("fxn ends here, bye");


// CALL STACK => Call stack works on (LIFO) Last in first out , when we call a function that call stores at Last, and when function is completed , function completed from the first

// Visualizing call stavk


// function one(){

//     return 1;
// } 


// function two(){

//     return one() + one();
// }

// function three(){

//     let ans = one() + two();

//     console.log(ans);
 
// }

// console.log(ans);  // it will never print outside the function  , because ans has functional scope, it will gone when function call ends
// three();

// Javascript is single threaded => it will be executed line by line

// the behaviour of javascript is synchnorous(ek ke baad ek) or vo ek time pe ek kaam karta hai
// let a = 25;

// console.log(a);

// let b= 20;

// console.log(b);

// console.log(a + b);


// Asynchonorous => It will execute the code not in order if one function takes time another one execute first


// setTimeout(() => {

//     console.log("apna college");
// },2000);


// setTimeout(() => {

//     console.log("morning");
// },2000)


// console.log("Hello...");




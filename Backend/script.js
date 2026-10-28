// let n = 5

// for(i=0 ;i<=n ; i++){

//     console.log("hello", i);

// }

// console.log("bye");

// console.log(process.argv);   // print the node.js executabe path and passed command line arguments

// let args = process.argv;


// for(let i=0; i<args.length; i++){

//     console.log("Hello to ", args[i]);
// }

// const someValue = require("./math.js");

// console.log(someValue.sum(1,3));
// console.log(someValue.mul(3,3));
// console.log(someValue.g);
// console.log(someValue.PI);


// const fruits = require("./Fruits");

// console.log(fruits[0].name);
// console.log(fruits[1].color);


// const figlet = require('figlet');

// figlet("Hello World", function(err,data){

//     if(err){

//         console.log("Something went wrong");
//         console.dir(err);
//         return;
//     }

//     console.log(data);
// });

// Using Import 

import  {sum , PI, g } from  "./math.js";

// console.log(sum(1,2));

// console.log(g);

import { generate } from "random-words";

console.log(generate());
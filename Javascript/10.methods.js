// For each=> arr.forEach(some function definition or name)

// let arr = [1,2,3,4,5];


// arr.forEach(function (el) {

//     console.log(el);
// });

// arr.forEach((el) => {

//     console.log(el);
// });

// let print = function(el) {

//     console.log(el);
// };


// arr.forEach(print);




// let arr = [{
//     name: "Aditya",
//     marks: 78
// },
// {
//     name: "Shraddha",
//     marks: 80
// },
// {
//     name: "Ayush",
//     marks: 79
// }];


// arr.forEach((stud) => {

//     console.log(stud.marks);
// })


// MAP  => let newArr = arr.map(some function definition or name);  , create a array of same size

// let num = [1,2,3,4];


// let newNum = num.map( function(el){

//     return el * 3;
// });

// console.log(newNum);

// let sqr = num.map( function (el) {

//     return el* el;
// });


// console.log(sqr);



// let arr = [{
//     name: "Aditya",
//     marks: 78
// },
// {
//     name: "Shraddha",
//     marks: 80
// },
// {
//     name: "Ayush",
//     marks: 79
// }];


// let gpa = arr.map((el) => {

//     return (el.marks / 100);

// });

// let names = arr.map((nam) => {

//     return nam.name;
// })

// arr.forEach((studs) => {

//     console.log(studs.marks);
// });




// console.log(gpa);
// console.log(names);


// Filter => let newArr = arr.filter(some function definition or name); , if callback is true , them returns the element, otherwise not return it



// let nums = [1,2,3,4,5,6,7,8,9,10,11,12];

// // let newNum = nums.filter((el) => {

// //     return el % 2 == 0;   // if true make the array  of even numbers

// // });


// let newNum = nums.filter((el) => {

//     return el < 8;
// });


// console.log(newNum);


// Every => Returns true if every elements of array gives true form some function . else return false

// arr.every(some function definition or name)   returns true or false


// let arr = [2,4,,6,8,10];

// let neArr = arr.every((el) => {

//     return el % 2 == 0;   // works like logical And
// });


// console.log(neArr);


// some => works like logical OR


// let arr = [2,4,,6,8,10,13, 15];

// let neArr = arr.some((el) => {

//     return el % 2 == 0;   // works like logical Or
// });


// console.log(neArr);


// Reduce Method: =>   Reduce the array to the single value

//arr.reduce(reducer function with two variables for (accumulator , element));


// let nums = [1,2,3,4,5,6,7,8];

// let finalVal = nums.reduce((res, el) => {

//     console.log(res);

//     return res + el;

// }
// );
// console.log(finalVal);


// Maximum in a array

// let num = [1,6,8,10,6];

// let max = -1;


// for(let i = 0; i< num.length; i++){

//     if(num[i] > max){

//         max = num[i];
//     }

// }

// console.log(max);


// using reduce

// let nums = [1,2,3,4,5,6,7,8];

// let maxVal = nums.reduce((max, el) => {

//     if(max < el){
//         return el;
//     } else{
//         return max;
//     }

// });

// console.log(maxVal);



// Prac Ques



// let num = [10,20,30,40];


// let newNum = num.every((nums) => {

//     return nums % 10 == 0;   // works like logical and

// });

// console.log(newNum);

// MInimum number in an array


// let nums = [1,3,6,3,73,73,7,742,63];

// let min = 1000000;

// for(let i = 0; i < nums.length; i++){

//     if(nums[i] < min){

//         min = nums[i];
//     }
// };

// console.log(min);


// let nums = [4,62,6,74,7,2,72];

// function getMin(nums){

//         let min = nums.reduce((num,el) => {

//         if(num < el){
//             return num;
//         } else{
//             return el;
//         }
//     });

//     return min;
// }

// console.log(getMin(nums));


// console.log(getMin([1,2,3,4]));



// Default parameter => Giving the default value the arguements


// function func(a, b=2){
// do something

//}


// function sum(a,b=2){   // we pass default parameter value initiallly 

//     return a + b;
// };


// console.log(sum(2,3));

// console.log(sum(1));


// Spread =>  Expand the iterables into multiple values 


// console.log(Math.min(1,2,3));

// console.log(Math.min(2,3,5,63,6));

// let arr =[1,2,3,4,5,6,7,4,6,3,4];;

// console.log(arr);

// console.log(...arr);  // if we want to print each value individually of an array, string etc ,we use spread method


// arr.push(-5);

// console.log(...arr); 


// let a = "adityanayak";


// console.log(...a);
// console.log(Math.max(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10]));

// console.log(Math.max(...arr));  // we not have to pass each value individually using spread


// Spread in object literals

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd"
// };



// const dataCopy = { ...data, id: 123, country: "India"};

// console.log(dataCopy);


// let arr = [1,2,3,4,5];

// let obj1 = { ...arr};


// console.log(obj1);   // stores array index and value, in key value pair


// let obj = "hello";

// let objnew = {...obj};

// console.log(objnew);


// Rest => Opposite of Spread 

// Allow a function to take an indefinite numer of arguements and bundle them in an array


// function sum(...args) {

//     for(let i=0; i<args.length; i++){

//         console.log("You gave me", args[i]);
//     };
// };

// sum(1,2,3,4,5);  // stores the each value in args array


// function min(){
//     console.log(arguments);
// };


// min(1,2,3,4);

// arguments.push(-1);  // not possible , because no arguments is created as a variable


// right way to use Rest 


// function sum(...args){

//     return args.reduce((sum, el) => {
//         return sum + el});
// };


// console.log(sum(1,6,4,7,7,36));



// function min(...args){

//     return args.reduce((min, el) => {

//         if(el < min){
//             return el;
//         } else{
//             return min;
//         }
//     });
// };


// console.log(min(4,3,6,2,25));




// function max(...args){

//     return args.reduce((max,el) => {

//         if(max > el){
//             return max;
//         } else{
//             return el;
//         }

//     });
// };


// console.log(max(4,5,73,6,36,52));



// function avg(msg, ...args){  // a string can be passed as an argument

//     console.log(msg);

//     return args.filter((avgNums) => {

//         return avgNums >=  70;

//     });
// };



// console.log(avg("hello", 45,76,70,69,50));
// console.log(avg("hello", 45,76,70,69,50,6,3,355,64,645));


// Destructing => Storing value of array into multiple variables


// let names = ["tony", "alice", "bruce", "steve", "abxc", "xyz", "pyq"];

// // let winner = names[0];
// // let runnerUp = names[1];
// // let secondRunnerUp = names[2];   // not right way to access the value in array , if the array is too big

// // destructing way:

// let [winner, runnerUp, secondRunnerUp, ...others] = names;  // now we can acces the elements by names



// Destructuring (objects):


let students = {
    username: "Aditya",
    age: 17,
    class:9,
    subjects: ["hindi", "english", "maths", "science"],
    password:"@123",
    town:"Haridwar",
    city: "Pune"
};


// console.log(students.password);
// console.log(students.town);  // it is not a good way to access properties of objects, as if the object has too many properties

// Destructuring way


// let {password, town} = students;

// console.log(password);
// console.log(town);


// let {name, age, ...others} = students;


// console.log(name);

// console.log(age);

// console.log(others);

// If we want to store the values in the different variables , but destructing search it by key


// let {username: user, password: secret, city: place ="Mumbai"} = students;

// // console.log(name);  gives error
// console.log(user);
// // console.log(password);  // gives  reference error 
// console.log(secret);

// console.log(place);  // it can be accesses by not city but place , and value declared in object has high priority










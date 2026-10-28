// Object literals : Used to store keyed collections and complex enteties.
// property => key value pair
// Objects are collections of prperties  
// Example   name : Aditya property 1
// age : 23  property 2
// marks : 80 property 3


// const students = {

//     name: "Aditya",
//     age: 21,
//     marks: 80,
// };

// console.log(students);  // in object literals , the order is not ascending, it could be in any order


// const student = ["Shraddha", 23, 80];

// console.log(student);  // in array order is ascending always


// const items = {    // we generally initialize object literals with const, because we don;t want to change it throughout the code , or by mistake we would define it undefined etc

//     price: 80,
//     color: ["pink","red", "blue"],
//     discount: 40,
// };

// console.log(items);

// const post = {

//     username: "@adityanayak",
//     content: 'This is my first post',
//     likes: 150,
//     repost: 5,
//     tags: ["#apnacollege", "#delta"],
// };

// console.log(post);

// // accessing the elements

// console.log(post["username"]);

// console.log(post.content);
// console.log(post.likes);

// console.log(post["tags"]);


// // in case of using variables


// let prop = "repost";

// console.log(post[prop]); // can be accesing using when defined using variable

// console.log(post.prop);  // not accesible 


// Javascript automatically converts objects keys to string
// even if we made number as a key, the number will be converted in string

// const obj = {

//     1: 'a',
//     2: 'b',
//     true: 'c',
//     null: 'd',
//     undefined: 'e',
// };


// console.log(obj[1]);  // converted into string , then matching 
// console.log(obj[2]);

// console.log(obj.null); 

// console.log(obj.1); // cannot accessible, not converted to string

// Add Update Value


// const student = {
//     name: "Aditya",
//     age: 21,
//     marks: 95,
//     city: "Delhi",
// };

// student.city = "Mumbai";

// console.log(student.city);

// console.log(student);

// student.gender = "Male";

// console.log(student.gender);

// console.log(student.marks);

// // student.marks = 92;
// // console.log(student);

// student.marks = [78, 98, 67];
// console.log(student);

// // delete  in object


// delete student.marks;

// console.log(student);

// Creating objects of objects

// const classInfo =  {

//     aman: {
//         grade: "A +",
//         city: "Delhi"
//     },
//     shraddha: {
//         grade: "B +",
//         city: "Banglore"
//     },
//     aditya: {
//         grade: "O +",
//         city: "Haridwar"
//     },
// };


// console.log(classInfo);

// console.log(classInfo.aditya);
// console.log(classInfo.aditya.city);

// classInfo.aditya.city = "Dehradun";

// console.log(classInfo);


// Array of Objects

// const classInfo = [

//     {
//         grade: "A",
//         name: "Aditya",
//         college: "Lpu"
//     },
//     { 
//         grade: "B",
//         name: "Aaradhya",
//         college: "DAV"

//     },
//     {
//         grade: "O",
//         name: "Astha",
//         college: "DU"
//     },
// ];


// console.log(classInfo);

// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);


// classInfo[0].college = "Graphic Era";

// console.log(classInfo[0].name);

// console.log(classInfo[1].college);


// classInfo.gender = "Male";

// console.log(classInfo);


// classInfo[2].college = "Petroleum";

// console.log(classInfo[2]);


// classInfo[0].gender = "Male";

// console.log(classInfo[0]);


// Math objects


// console.log(Math.PI);
// console.log(Math.E);


// console.log(Math.abs(5));

// console.log(Math.abs(-12));  // always give positive absolute value

// console.log(Math.pow(2,3));

// console.log(Math.floor(5));

// console.log(Math.floor(5.999999));  // round off to the nearest integer

// console.log(Math.floor(-5));

// console.log(Math.floor(-5.5));

// console.log(Math.ceil(-5.5));  // round off to the largest integer value

// console.log(Math.ceil(5.4));


// console.log(Math.random());   // generate random value between 0 to 1

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// Random Integer

// let step1 = Math.random();

// console.log(step1);

// let step2 = step1 * 10;

// console.log(step2);

// let step3 = Math.floor(step2);



// console.log(Math.floor(Math.random() * 10)); // generate a value b/w 0 to 9  , not generating 10


// console.log(Math.floor(Math.random() * 10) + 1);  // generate vlaue between 1 to 10 , also generate 10

// let random = Math.floor((Math.random() * 10) + 1);

// console.log(random);


// prac Ques generate a number between 1 to 100

// let random = Math.floor((Math.random() * 100));

// console.log(random);    // generate random value between 0 to 99


// let random = Math.floor((Math.random() * 100) + 1);

// console.log(random);


// generate a random number between 1 to 5


// let random = Math.floor(Math.random() * 5);   // generate a randam value between 0 to 4
// // let random = Math.floor((Math.random() * 5) + 1);

// console.log(random);


// random number between  20 to 24

// let random = Math.floor((Math.random() * 5) + 20);

// console.log(random);

// let random = Math.floor((Math.random() * 5) + 21); // generate value btw   21 to 25

// console.log(random);

// random number between 0 to 24

// let random = Math.floor((Math.random() * 25));


// console.log(random);




// Guesing Game


const max = prompt("Enter the maximum number the game can have :");

const random = Math.floor((Math.random() * max) + 1);


let guess = prompt("Guess the number");


while(true){

    if(guess == "quit"){

        console.log("You Quitted");
        break;
    }

    if(guess == random){

        console.log("You guessed it right ! , random number was " + random);
        break;
    }

    else if(guess < random){

        guess = prompt(" Hint: Your guess is small, guess a bigger value !");
    } 
    
    else{
        guess = prompt("Hint: Your guess is big, guess a smaller value ! ");
    
    }

    
}






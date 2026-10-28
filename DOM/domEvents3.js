// Dom events are the signal that something has occured. (user) input / actions

// let btns = document.querySelectorAll("button");

// for(btn of btns){

//     btn.onclick = sayHello;
//     btn.onclick = sayName;  // onclick can only execute single function , not both that's why we use event Listener
//     console.dir(btn);
    // btn.onmouseenter = function (){

    //     console.log("You entered the mouse");
    // };
// };


// btn.onclick = function() {

//     alert("button was clicked");
// };


// function sayHello (){

//     alert("Hello!");
// };

// function sayName() {
//     console.log("Aditya");
// };


// Event Listener => element.addEventListener(event, callback);  event => click, drag , keyboard key

// let btns = document.querySelectorAll("button");

// for(btn of btns){

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);

//     btn.addEventListener("dblclick", function (){
//         console.log("you doubled clicked");
//     });
// }

// function sayHello() {

//     alert("Hello!");
// }

// function sayName() {
//     console.log("Aditya");
// }


// Activity

// let btn = document.querySelector("button");


// btn.addEventListener("click", function (){

//     let h3 = document.querySelector('h3');

//     let randomColor = getRandomColor();
    
//     h3.innerText = randomColor;

//     let div = document.querySelector('div');

//     div.style.backgroundColor = randomColor;

//     console.log("Color Updated");
// });

// function getRandomColor() {

//     let red = Math.floor(Math.random() * 255);

//     let green = Math.floor(Math.random() * 255);

//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red} , ${green} , ${blue})`;

//     return color;
// };


// event listener on elements


// let para = document.querySelector('p');


// para.addEventListener('click', function(){

//     console.log("This is paragraph");
// });

// let box = document.querySelector('.box');

// box.addEventListener("mouseenter", function(){

//     console.log("Mouse inside div");
// });


// this in event listener

// when this is used in a callback of event handler of something, it refers to that something
// obj => evenListener(event, callback(this))


// let btn = document.querySelector('button');


// btn.addEventListener("click", function(){

//     console.dir(this.innerText);

//     this.style.backgroundColor = "green";   // here this refer to the same button, element
// })


// using this to trigger elements 


// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');
// let btn= document.querySelector('button');


// function changeColor() {

//     console.dir(this.innerText);

//     this.style.backgroundColor = "yellow";

// };

// here this refer to same element chat call th event listener


// h1.addEventListener("click", changeColor);



// h3.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);


// btn.addEventListener("click", changeColor);
















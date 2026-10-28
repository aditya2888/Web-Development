// Mouse out event 

// const test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
// test.addEventListener("mouseleave", (event) => {
//   // highlight the mouseleave target
//   event.target.style.color = "purple";

  // reset the color after a short delay
//   setTimeout(() => {
//     event.target.style.color = "";
//   }, 1000);
// });

// Briefly make an <li> orange when the mouse moves off of it
// test.addEventListener("mouseout", (event) => {
//   // highlight the mouseout target
//   event.target.style.color = "orange";

  // reset the color after a short delay
//   setTimeout(() => {
//     event.target.style.color = "";
//   }, 500);
// });


//

// let test = document.querySelector('ul');


// test.addEventListener('mouseout', function(event){

//     event.target.style.color = "purple";

//     setTimeout(() =>{

//         event.target.style.color = "";
//     }, 1000);

// });


// test.addEventListener('mouseleave', function(event){  // it triggers when , mouse leaves 

//     event.target.style.color = 'green';

//     setTimeout(() => {

//         event.target.style.color = "";
//     }, 1000);
// });


// Keypress event


// const log = document.getElementById("log");
// const input = document.querySelector("input");

// input.addEventListener("keypress", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }



// scroll event



//Ques 2


// let btn = document.createElement('button');

// btn.innerText = 'click me';

// let body = document.querySelector('body');

// body.append(btn);

// btn.addEventListener('click', (event) => {

//         event.target.style.color = 'green';

// });

// Ques 3

// let inp = document.createElement('input');
// let h2 = document.createElement('h2');
// let body = document.querySelector('body');

// body.append(h2);
// body.append(inp);

// inp.setAttribute('placeholder', 'enter your name');
// h2.innerText = 'Question 3';

// let heading2 = document.querySelector('h2');

// inp.addEventListener('input', () => {


//     let filteredValue = inp.value.replace(/[^a-zA-Z ]/g, "");

//     inp.value = filteredValue;

//     heading2.innerText = filteredValue;
// });





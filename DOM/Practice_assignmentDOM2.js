// Prac Ques


// let para1 = document.createElement('p');


// para1.innerText = "Hey , I am Red";

// let body = document.querySelector('body');


// body.append(para1);

// para1.classList.add('red');


// let h3 = document.createElement('h3');

// h3.innerText = "I am blue h3 !";


// body.append(h3);


// h3.classList.add('headingColor');

// let div = document.createElement('div');

// div.classList.add('box');


// let h1 = document.createElement('h1');

// h1.innerText = "Hi , I am inside h1";

// div.append(h1);

// let p = document.createElement('p');

// p.innerText = "Yes, Me TOO";

// div.append(p);

// body.append(div);



let input = document.createElement("input");

input.type = "text";
input.placeholder ="Type your name";

let body = document.querySelector('body');

body.append(input);

let button = document.createElement('button');

button.innerText = "Click Me";

body.append(button);


button.setAttribute('id', 'btn');

let btn = document.querySelector('#btn');

btn.classList.add('btn');


let h1 = document.createElement('h1');

h1.innerHTML = "<u>DOM Practice</u>";

document.querySelector('body').append('h1');


let p = document.createElement('p');


p.innerHTML = "APNA COLLEGE  <b> DOM </b>  PRACTICE";


body.append(p);













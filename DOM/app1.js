// let smallImages = document.getElementsByClassName("oldImg");


// for(let i=0; i<smallImages.length; i++){

//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
// };

// changing the images of each object to spiderman one



// let smallImages = document.getElementsByClassName("oldImg");


// for(let i=0; i<smallImages.length; i++){

//     smallImages[i].src = "assets/spiderman_img.png";

//     console.log(`the value of ${i} is changed`);
 
// };


// paragraph selector


// document.getElementsByTagName("p");

// document.getElementsByTagName("p")[0].innerText = "Hello World";


// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector(".oldImg"));   // query selector does not select the whole collection, its just select the first element



// console.dir(document.querySelectorAll("div a")); // to select all the elements in node or collection

// InnerText => Shows the visible text contained in a node, on html pge

// textContent = > Showss all the full text (hidden also)

// innerHTML => Shows the full markup, also shows where the line ends etc by /n.


// Manupulating attributes


// let img = document.querySelector('img');


// console.log(img.getAttribute('id'));

// img.setAttribute('id','spiderManImg');  // it changes the id , and the prooperties that were applied to images got disappeared


// img.setAttribute('src','assets/creation_3.jpeg');


// console.log(img.getAttribute('class'));

// img.setAttribute('class', 'image');

// console.log(img.getAttribute('class'));


// let img = document.querySelector('img');


// console.dir(img);

// console.log(img.style);


// let heading = document.querySelector('h1');


// heading.style.color = "red";

// heading.style.backgroundColor = "Yellow";

// changing style of anchor tags



// let links = document.querySelectorAll('.box a');

// // for(let i=0; i<links.length; i++){

// //     links[i].style.color = "purple";  // inline style
// // };


// for(link of links){

//     link.style.color = "orange";  // set the inline  style
// };


// Manupulating style using classList


// let heading = document.querySelector('h1');


// heading.classList.add("green");
// heading.classList.add("under");

// console.log(heading.classList);

// heading.classList.remove("green");

// heading.classList.remove("under");


// heading.setAttribute('class','green'); // we can also do this way also using setAttribute

// heading.setAttribute('class', 'under');  // but when we use settAttribute, green class styling gone, that's why we dont use this


// console.log(heading.classList.contains('green'));

// console.log(heading.classList.contains('under'));  // it checks if class exist, return true or false



// // classList. toggle used to remove or add classList

// console.log(heading.classList.toggle('green'));

// console.log(heading.classList.toggle('under'));  // now it remove the class after toggle

// console.log(heading.classList.toggle('green')); // it also do the same and return false

// console.log(heading.classList);



// let bg = document.querySelector('.box');


// bg.classList.add('yellowBg');

// Parent children relation access

// let h4 = document.querySelector('h4');

// console.log(h4.parentElement);

// console.log(h4.children);


// let box = document.querySelector('.box');

// console.log(box.children);

// console.log(box.childElementCount);


// let ul = document.querySelector('ul');

// console.log(ul.children);

// console.log(ul.childElementCount);


// // to select siblings


// console.log(ul.children[0]);

// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[2].previousElementSibling);

// console.log(ul.children[0].nextElementSibling);

// using sibling to change change style

// let img = document.querySelector('img');


// img.previousElementSibling.style.color = "purple";


// let h1 = document.querySelector('h1');  // also be done through this way
// h1.classList.add('h1');



// create element 


// let newP = document.createElement('p');

// console.dir(newP);

// newP.innerText = "I am the new p tag";

// // add element using append

// // apend add element to the last
// let body = document.querySelector('body');


// body.appendChild(newP);  // append at the last


// // to insert button in box 


// let box = document.querySelector('.box');


// box.appendChild(newP);


// let btn = document.createElement('button');

// console.dir(btn);


// btn.innerText = "Click Me";



// box.appendChild(btn);


// console.log(newP);


// // using append to apply changes directly to element



// newP.append(" this is a new text ");


// newP.append(btn);


// newP.append("hi bitch");


// btn.append(" or fuck me ");


// // prepend to add element at the first


// box.prepend(newP);


// INSERT ADJACENT (WHERE, ELEMENT)

// let btn = document.createElement('button');


// btn.innerText = "New Button";

// let p = document.querySelector('p');

// p.insertAdjacentElement('beforebegin',btn);  // insert before begin of selected element

// p.insertAdjacentElement('afterbegin',btn);  // insert at the beginnig of the selected element

// p.insertAdjacentElement('beforeend',btn);  // insert after the ending of selected para inside 

// p.insertAdjacentElement('afterend',btn);  // insert after the ending of selected para outside



// remove elements 


// let body = document.querySelector('body');

// body.removeChild(btn);

// btn.remove();


// p.remove();   //remove the whole paragraph


// body.remove();   // remove the whole body

















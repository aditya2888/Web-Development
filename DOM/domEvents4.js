let btn = document.querySelector('button');


// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("Button is clicked");
// })

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("Button is clicked");
// })


// keyboard events


// let inp = document.querySelector('input');

// inp.addEventListener("keydown", function(event){

//     console.log("key is = ", event.key);
//     console.log("code is = ", event.code);

//     console.log("Key was pressed");
// })


// inp.addEventListener("keyup", function(event){

//     console.log(event);

//     console.log("Key was released");
// })

// Form events


// let form = document.querySelector('form');

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     console.log("Form is submitted");
// })

// extracting form data



// let form = document.querySelector('form');

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     let user = this.elements[0];   // same as forms.elements.[0];

//     let pass = this.elements[1];

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`${user.value} your password is set to ${pass.value}`);

// })

// change event => the change event occurs when 
// the value of an element has been changed(only works on inputs, textarea and select elements)
// it tracks changes between intial and final state



// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {

//     console.log("change event triggered");
//     console.log("final value = ",this.value);
// });

// Input event => The input fires when the value of an <input> , <select>, or <textarea> has changed

// user.addEventListener("input", function() {

//     console.log("input event triggered");
//     console.log("final value = ",this.value);
// });

// Text editor (custom)


let inp = document.querySelector('input');

let p = document.querySelector('p');

inp.addEventListener('input', function(){

    console.log(inp.value);

    p.innerText = inp.value;
})
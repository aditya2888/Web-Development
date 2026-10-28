// let inp = document.querySelector('input');

// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');


// btn.addEventListener('click', () => {

//     let item = document.createElement('li');
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add('delete');

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });


// let delBtns = document.querySelectorAll('.delete');

// for(delBtn of delBtns){

//     delBtn.addEventListener('click', function() {

//         let para = this.parentElement;

//         console.log(para);   // here deletion for newly addded element will not work , that's why we use event delegation

//         para.remove();

//     });
// };


// Event Delegation => Using phenomenon of bubbling  , what parent element got the property , child element automatically get it


let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');


btn.addEventListener('click', () => {

    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add('delete');

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});



ul.addEventListener("click", function(event){

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } 
    
});


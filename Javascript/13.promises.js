// The promises object represents the eventual completion(success), or failure of an asynchonorous operation and its resulting value

// Promise => It is an object, it has resolve and reject, success or failure(we can say)

// State (pending), (rejected(error)), (fullfilled(resolved))


function saveData(data){

    return new Promise((resolve, reject) => {     // (success, failure)

        let internetSpeed = (Math.floor(Math.random() * 10) + 1);

        if(internetSpeed > 4){

            resolve("Data was saved");        // success
        } else{

            reject("Weak connection, not saved");    // failure
        };

    });
};

// saveData("Apna college");


// Promises => then & catch

// Promise(fullfilled) => then ,   Promise(reject,error) => .catch


// let request = saveData("apna college");

// request.then(() => {

//     console.log("Promise was resolved");
//     console.log(request);
// })

// .catch(() =>{

//     console.log("Promise was rejected");
//     console.log(request);
// })


// compact way to write it



// saveData("apna college")

// .then(() => {

//     console.log("Promise was resolved");
// })

// .catch(() =>{
//     console.log("Promise was rejected");
// })


// IMPROVED VERSION



// saveData("apna college")

// .then(() => {

//     console.log(" Data1 Saved, Promise was resolved");

//     return saveData("Hello World");

// }).then(() => {
//     console.log("Data 2 saved");

//     return saveData("Aditya");
// }).then(() => {

//     console.log("Data 3 saved");
// })

// .catch(() =>{
//     console.log("Promise was rejected");
// })


// Promises are rejected and resolved with some data(valid results and errors)



// saveData("apna college")

// .then((result) => {

//     console.log(" Data1 Saved, Promise was resolved");
//     console.log("The result was: ",result);
//     return saveData("Hello World");

// }).then((result) => {
//     console.log("Data 2 saved");

//     console.log("The result was: ",result);

//     return saveData("Aditya");
// }).then((result) => {

//     console.log("Data 3 saved");
//     console.log("the result was: ",result);
// })

// .catch((error) =>{

//     console.log("Promise was rejected");
//     console.log(error);
// })


// Refactoring old code with promise

let h1 = document.querySelector("h1");

function changeColor(color, delay){

    return new Promise((resolve,reject) => {

        setTimeout(() => {

        h1.style.color = color;

        resolve("color changed !");

    }, delay);

    });
};


changeColor("red", 1000)

.then(()=> {

    console.log("Red color was completed");
    return changeColor("green", 1000);
})
.then(() =>{

    console.log("green color was completed");

    return changeColor("yellow", 1000);
})

.then(() =>{

    console.log("yellow color was completed");

    return changeColor("blue", 1000);
})

.then(() =>{

    console.log("blue color was completed");
});






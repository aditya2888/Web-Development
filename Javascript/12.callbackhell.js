// let h1 = document.querySelector("h1");


// function changeColor(color, delay, nextColorChange){

//     setTimeout(() => {

//         h1.style.color = color;

//         if(nextColorChange) nextColorChange();

//     }, delay);
// }


// changeColor("red", 1000, () =>{

//     changeColor("yellow", 1000, () =>{

//         changeColor("green", 1000, () => {

//             changeColor("orange", 1000, () =>{

//                 changeColor("blue",1000);
//             });

//         });
//     });

// });

// callback nesting => callback hell


// So, to prevent from callback hell , we use promises , await and sync



// callback hell example for promises


function saveData(data, success, failure){

    let internetSpeed = (Math.floor(Math.random() * 10) + 1);

    if(internetSpeed > 4){

        success();
    } else{

        failure();
    };
};

saveData(`apna college`, () => {

    console.log("Your data was saved");

    saveData("hello world", () =>{

        console.log("Your success2 , Data was saved");
    }, 
    () => {

        console.log("Failure2 , weak conection , data not saved");
    });

        saveData("hello world2", () => {
            console.log("Your success3 , data was saved");
        }, () => {

            console.log("Failure3,  weak connention, data not saved");

            saveData("Hello3", () => {
                console.log("Your success 4 , DATA WAS SAVED");
            }, () =>{

                console.log("Failure4, DATA NOT SAVED");
            });
    });


}, 
    () => {

    console.log("data not saved, weak connection");
});




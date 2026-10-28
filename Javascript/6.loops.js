// loops : to iterate a loop of code

for(let i= 1 ; i<5; i++){ 
    console.log(i);
}


for(let i=15; i> 1; i--){

    if(i % 2 != 0){
        console.log(i);
    }

}


for(let i=1 ; i<=15;i++){

    if(i % 2 == 0){
        console.log(i);
    }
}


for(let i = 2; i<=15; i+= 2){
    console.log(i);
}

// multiplication table

// let n = prompt("Enter the number: ");

// n = parseInt(n);

// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }


// let n = parseInt(prompt("Enter the number:"));

// for(let i = n; i< n * 10; i += n){
//     console.log(i);
// }



// Nested for loops




// for(let i = 1; i<=3; i++){

//     for(j = 1; j<=3; j++){

//         console.log(j);
//     }
// }



// while loops


// let i = 1;

// while(i <= 5){

//     console.log(i);

//     i++;
// }


// let i = 5;

// while(i > 0){

//     console.log(i);

//     i--;
// }


// prac ques   (Guess Favourite Movie)



// const favMovie = "Avatar";

// let guess = prompt("Guess the movie");

// while((guess != favMovie)  && (guess != "quit")){

//     guess = prompt("Wrong guess, please try again");
// }

// if(guess == favMovie){

//     console.log("Congrats You guesse it right");
// } else{
//     console.log("You quitted");
// }


// break keyword


// let i = 1;

// while( i <=5 ){

//     if(i == 3){
//         break;
//     }

//     console.log(i);
//     i++;
// }

// refactoring this question using break keyword

// const favMovie = "Avatar";

// let guess = prompt("Guess the movie");

// while((guess != favMovie)){

//     if(guess == "quit"){

//         console.log("You quitted");
//         break;
//     }

//     guess = prompt("Wrong guess, please try again");
// }

// if(guess == favMovie){

//     console.log("Congrats You guesse it right");
// } 



// let fruits = ["mango", "apple", "banana", "orange", "pineapple"];

// fruits.push("orange");

// for(let i = fruits.length - 1; i >= 0 ; i--){

//     console.log(i, fruits[i]);
// }

// nested array

let heroes = [["ironman", "spiderman", "thor"],  ["superman", "wonderwoman", "flash"]];

for(let i = 0; i < heroes.length; i++){

    console.log(i, heroes[i]);

    for(j = 0; j< heroes[i].length; j++){

        console.log(j, heroes[i][j]);   // accessing nested array
    }
}


let students = [ ["aditya", 95], ["ridh", 90], ["rudra", 80]];

for(let i= 0 ; i< students.length; i++){

    console.log(`Student ${i+1}  info`);

    for(let j = 0; j < students[i].length; j++){

        console.log(students[i][j]);
    }
}

// for of loop : to access the elements collection of array, string etc


let fruits = ["apple", "banana", "mango", "Orange", "Litchi"];


for(fruit of fruits){    // each element store in variable fruit
    console.log(fruit);
}


let chars= "apnacollege";

for(char of chars){

    console.log(char);
}


let lists = [["ironman" , "thor", "Loki"], ["Voldemort", "Harry Porter", "Shaktiman"]];

for(list of lists ){

    console.log(`List ${1}`);

    for(hero of list){

        console.log(hero);
    }
}







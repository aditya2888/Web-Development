let gameSeq = [];

let userSeq = [];

let Score = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;

let level = 0;

let h2 = document.querySelector('h2');
document.addEventListener("keydown", function() {

    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();

    }
})


function gameFlash(btn){

    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");

    },250);
}


function userFlash(btn){

    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");

    },250);
}

function levelUp(){
    userSeq = []   // after level up , itreration start from 0

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);

    let randColor =  btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){

        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        Score.push(level);
        h2.innerHTML = `Game over ! ,Your score was <b> ${level}</b> Press any key to start again , Your highest score is ${Score[Score.length - 1]}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
};

function btnPress() {
    console.log(this);
    let btn = this;  // button which is pressed
    
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){

    btn.addEventListener("click", btnPress);
}

function reset(){

    started = false;

    gameSeq = [];

    userSeq = [];

    level = 0;
}


// homework problem = > to track the highest score and print it and update it on page


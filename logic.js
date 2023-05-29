<<<<<<< HEAD
//COMPUTER CHOICE GENERATOR
function computer(){
    let possiblechoice = ['paper', 'rock', 'scissors'];
    let randomnumber = Math.floor(Math.random()*3);
    return possiblechoice[randomnumber];
}

//IF PLAYER CHOICE IS ROCK
let rock = document.getElementById("rock");
rock.addEventListener("click", function(){
    let choice = "rock";
    gamelogic(choice);
})

//IF PLAYER CHOICE IS PAPER
let paper = document.getElementById("paper");
paper.addEventListener("click", function(){
    gamelogic("paper");
})

//IF PLAYER CHOICE IS SCISSORS
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(){
    gamelogic("scissors");
})

let playerscore = document.getElementById("pscore");
let computerscore = document.getElementById("cscore");
let result = document.getElementById("result")
let resultstring;
let pscore = 0;
let cscore = 0;

//MAIN GAME FUNCTION
function gamelogic(choice){
    let computerchoice = computer();
    let userchoice = choice;

    if(computerchoice === userchoice){
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('draw');
        resultstring = "draw";
        result.innerHTML = resultstring;
    }else if((userchoice === 'rock' && computerchoice === 'scissors') || 
    (userchoice === 'scissors' && computerchoice === 'paper') || 
    (userchoice === 'paper' && computerchoice === 'rock')){
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('you won');
        resultstring = "you won";
        result.innerHTML = resultstring;
        pscore++;
        playerscore.innerHTML = pscore;
    }else{
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('you lose');
        resultstring = "you lose";
        result.innerHTML = resultstring;
        cscore++;
        computerscore.innerHTML = cscore;
    }
}
=======
//COMPUTER CHOICE GENERATOR
function computer(){
    let possiblechoice = ['paper', 'rock', 'scissors'];
    let randomnumber = Math.floor(Math.random()*3);
    return possiblechoice[randomnumber];
}

//PLAYER CHOICE GENERATOR
function player(){
    let userinput = prompt("enter your choice out of \n 1.rock\n2.paper\n3.scissors");
    let user = userinput.toLowerCase();
    return user;
}

let playerscore = 0;
let computerscore = 0;

function gamelogic(){
    let computerchoice = computer();
    let userchoice = player();

    if(computerchoice === userchoice){
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('draw');
        console.log(`playerscore = ${playerscore}\ncomputerscore = ${computerscore}`)
    }else if((userchoice === 'rock' && computerchoice === 'scissors') || 
    (userchoice === 'scissors' && computerchoice === 'paper') || 
    (userchoice === 'paper' && computerchoice === 'rock')){
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('you won');
        playerscore++;
        console.log(`playerscore = ${playerscore}\ncomputerscore = ${computerscore}`)
    }else{
        console.log(`userchoice = ${userchoice}\ncomputerchoice = ${computerchoice}`);
        console.log('you lose');
        computerscore++;
        console.log(`playerscore = ${playerscore}\ncomputerscore = ${computerscore}`)
    }
}

function game(){
    let gametime = prompt("how many times do u want to play")
    for(let i=0; i<=gametime; i++){
        gamelogic();
    }
}

game();
>>>>>>> origin/main

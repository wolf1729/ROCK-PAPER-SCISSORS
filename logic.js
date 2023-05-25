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
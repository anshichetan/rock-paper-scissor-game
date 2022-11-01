const choices=document.querySelectorAll(".choices")
const score=document.getElementById("score")
const result=document.getElementById("result")
const modal=document.querySelector(".modal")
const scoreboard={
    player:0,
    computer:0
}
function play(e){
   // console.log("hi",e.target.id)
    const playerChoice=e.target.id;
    const computerChoice=getComputerChoice()
   // console.log(computerChoice)
   let winner =getwinner(playerChoice,computerChoice)
   //console.log(winner,computerChoice)
   showwinner(winner,computerChoice)
}
function showwinner(winner,computerChoice){
    console.log(winner,computerChoice)
    if (winner==="player"){
        scoreboard.player++
        result.innerHTML=`
        <h1>you win</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    `

    }else if(winner==="computer"){
        scoreboard.computer++
        result.innerHTML=`
        <h1>you lose</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    `


    }else{
        result.innerHTML=`
    <h1>its a draw</h1>
    <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
`


    }
    score.innerHTML=`
    <p>Player:${scoreboard.player}</P>
    <p>Computer:${scoreboard.computer}</P>
    `
    modal.style.display="block"
}
function getwinner(pc,cc){
    if(pc===cc){
        return "draw";

    }
    else if(pc==="rock"){
        if(cc==="paper"){
            return "computer";
        }
        else{
            return "player";
        }
    }else if(pc=== "paper"){
        if(cc==="scissors"){
            return "computer"
        }else
        return "player"
    }else if(pc==="scissors"){
        if (cc==="rock"){
            return "computer"
                }else{
                    return "player"
                }
               }
}
function getComputerChoice(){
    const randomNumber=Math.random()
    console.log(randomNumber)
    if(randomNumber<=0.33){
        return "paper"
    }else if(randomNumber>0.34&& randomNumber<=0.66){
        return "scissors";

    }else{
        return "rock";
    }
}
choices.forEach(function(ch){
    ch.addEventListener("click",play)
}

)
window.addEventListener("click",clearModal)
function clearModal(e){
if(e.target==modal){
    modal.style.display="none"
}
}
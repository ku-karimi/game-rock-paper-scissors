const body = document.querySelector("body");
let scoreNumber = document.getElementById("scoreNumber");
const btnRules = document.getElementById("btn");
const resultDiv = document.getElementById("resultDiv");
const imgRuls = ["./img/icon-rock.svg" , "./img/icon-scissors.svg" , "./img/icon-paper.svg"];
const imgSelectYou = document.getElementById("you");
const imgRandom = document.getElementById("but");
const rulsDiv = document.getElementById("rulsDiv");
const panelChose = document.getElementById("panelChose");
const playAgain = document.getElementsByClassName("play-again");
let resultP = document.getElementById("result")
let open = false ;
let scour = 0 ;

// btn add click event to explain game

function discription() {
    if(!open){
        rulsDiv.style.display = "none" ;
        btnRules.querySelector("p").innerHTML = "RULES";
        open = true ; 
    }else{
        rulsDiv.style.display = "flex" ;
        btnRules.querySelector("p").innerHTML = "BACK TO GAME";
        open = false ;
    }
}

btnRules.addEventListener("click" , discription)

// start game whit chose

function win() {
    resultP.innerHTML = "YOU WIN" ;
    resultP.style.color = "#6E8E59" ;
    scour++ ;
    scoreNumber.innerHTML = scour ;
}

function lose() {
    resultP.innerHTML = "YOU LOSE" ;
    resultP.style.color = "#DE3163" ;
}

function game(event) {
    panelChose.style.display = "none" ;
    resultDiv.style.display = "block" ;
    let srcImg = event.target.getAttribute("src");
    imgSelectYou.src = srcImg ;
    let i = Math.floor(Math.random() * imgRuls.length);
    let imgSrcRandom = imgRuls[i];
    imgRandom.src = imgSrcRandom ;
    btnRules.style.display = "none" ;

    if (event.target.getAttribute("src") == imgSrcRandom) {
        resultP.innerHTML = "EQUAL" ;
        resultP.style.color = "#5C7285";
    }else if (event.target.getAttribute("src") == imgRuls[0] && imgSrcRandom == imgRuls[1]) {
        win() ;
    }else if (event.target.getAttribute("src") == imgRuls[0] && imgSrcRandom == imgRuls[2]) {
        lose() ;
    }else if (event.target.getAttribute("src") == imgRuls[2] && imgSrcRandom == imgRuls[1]) {
        lose() ;
    }else if (event.target.getAttribute("src") == imgRuls[2] && imgSrcRandom == imgRuls[0]) {
        win() ;
    }else if(event.target.getAttribute("src") == imgRuls[1] && imgSrcRandom ==  imgRuls[2]){
        win() ;
    }else if(event.target.getAttribute("src") == imgRuls[1] && imgSrcRandom ==  imgRuls[0]){
        lose() ;
    }else{
        return ;
    }
}

// play again btn

function play() {
    panelChose.style.display = "block" ;
    resultDiv.style.display = "none" ;
    btnRules.style.display = "block" ;
}

playAgain[0].addEventListener("click" , play)


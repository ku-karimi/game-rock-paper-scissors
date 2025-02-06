const body = document.querySelector("body");
const scoreNumber = document.getElementById("scoreNumber");
const btnRules = document.getElementById("btn");
const resultDiv = document.getElementById("resultDiv");
const imgRuls = ["./img/icon-rock.svg" , "./img/icon-scissors.svg" , "./img/icon-paper.svg"];
const imgSelectYou = document.getElementById("you");
const imgRandom = document.getElementById("but");
const rulsDiv = document.getElementById("rulsDiv");
let open = false ;

// btn add click event

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
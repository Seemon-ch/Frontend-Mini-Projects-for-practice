let gameSequence =[];
let userSequence = [];

let btns =["red" , "green" , "yellow" , "purple"];

let started= false;
let level =0 ;

let h2=document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        started=true;

        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
}


function levelUp(){
    userSequence =[];

    level++;
    h2.innerText =`Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    btnFlash(randombtn);
}
function checkAns(index){
    
    if(userSequence[index] === gameSequence[index]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="black";
        },150);
        reset();
    }

}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkAns(userSequence.length-1);


}
let allbtn =document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnPress)
}


function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level =0 ;
}
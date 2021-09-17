var content = document.querySelector('.content')
var time = document.querySelector('#time')
var target = document.querySelector('#target')
var score = document.querySelector('#score')


var times = 60;
var scoreIncrease =0;
var randomnum = Math.floor(Math.random()*10)
var randNum;
  

setInterval(function(){
    if(times>0){
        times--
    }
    else{
        content.innerHTML = `<h1 class = "center">Game over <br> your score is ${scoreIncrease}</h1>`;
    }
    time.textContent= times
},1000)

function guessRandomNumber(){
   randNum  =   Math.floor(Math.random()*10)
  target.textContent = randNum;
}

function makeBubble(){
    var temp = ``

    for(i=0; i<160; i++){
        var rand =   Math.floor(Math.random()*10)
        temp += `<div class="bubble">${rand}</div>`
    }
    content.innerHTML = temp
}


function click(){
    content.addEventListener('click', function(dets){
        var hitTarger = dets.target.textContent
        if(hitTarger == randNum){
            scoreIncrease += 10;
            score.textContent = scoreIncrease;
            guessRandomNumber()
            content.innerHTML = ` `;
            makeBubble()
        }
        else{
            guessRandomNumber();
            content.innerHTML = ''
            makeBubble()
        }  
        })
}








guessRandomNumber()
makeBubble()
click()

    




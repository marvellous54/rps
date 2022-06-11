let items = ['rock', 'paper', 'scissor'];
let botAnswer = document.getElementById('botAnswer');
let yourAnswer = document.getElementById('yourAnswer');
let messageLose = document.getElementById('message-lose');
let messageWin = document.getElementById('message-win');
let yourScore = 0;
let botScore = 0
document.getElementById('botScore').textContent = botScore;
document.getElementById('yourScore').textContent = yourScore;

function random() {
    let random = Math.floor(Math.random() * 3);
    return random
}

function showAnswer() {
    botAnswer.textContent = items[random()]
}

function rock() {
    yourAnswer.textContent = '';
    botAnswer.textContent = '';
    setTimeout(() => {
        yourAnswer.textContent = 'rock'; 
    }, 300)
    setTimeout(() => {
        showAnswer()
        solution();
    },1200)
}

function paper() {
    yourAnswer.textContent = '';
    botAnswer.textContent = '';
    setTimeout(() => {
        yourAnswer.textContent = 'paper'; 
    }, 300)
    setTimeout(() => {
        showAnswer()
        solution();
    },1200)
}

function scissor() {
    yourAnswer.textContent = '';
    botAnswer.textContent = '';
    setTimeout(() => {
        yourAnswer.textContent = 'scissor'; 
    }, 300)
    setTimeout(() => {
        showAnswer();
        solution();
    },1200)
}

function solution() {
    if (botAnswer.textContent == 'scissor' && yourAnswer.textContent == 'rock') {
        yourScore += 1;
        document.getElementById('yourScore').textContent = yourScore;
    } 
    if (botAnswer.textContent == 'paper' && yourAnswer.textContent == 'scissor') {
        yourScore += 1;
        document.getElementById('yourScore').textContent = yourScore;
    } 
    if (botAnswer.textContent == 'rock' && yourAnswer.textContent == 'paper') {
        yourScore += 1;
        document.getElementById('yourScore').textContent = yourScore;
    } 

    if (botAnswer.textContent == 'scissor' && yourAnswer.textContent == 'paper') {
        botScore += 1;
        document.getElementById('botScore').textContent = botScore;
    }
    if (botAnswer.textContent == 'paper' && yourAnswer.textContent == 'rock') {
        botScore += 1;
        document.getElementById('botScore').textContent = botScore;
    } 
    if (botAnswer.textContent == 'rock' && yourAnswer.textContent == 'scissor') {
        botScore += 1;
        document.getElementById('botScore').textContent = botScore;
    } 
}

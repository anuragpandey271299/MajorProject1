let images = document.querySelector('.images');
let triangle = document.querySelector('.lines');
let resultArea = document.querySelector('.resultArea');
let userPicked = document.querySelector('.userPick');
let computerPicked = document.querySelector('.computerPick')
let output = document.getElementById('output');
let button = document.getElementById('button2');
let scoreboard = document.querySelector('.scoreboard');
let celebrate = document.querySelector('.celebrate');
let rules = document.querySelector('.rulebox');
let userChoice='';
let computerChoice='';

makeDiv=()=>{
    const rockDiv = document.createElement('div');
    rockDiv.className = 'rock';

    const paperDiv = document.createElement('div');
    paperDiv.className = 'paper';

    const scissorDiv = document.createElement('div');
    scissorDiv.className = 'scissor';

    const Image = document.createElement('img');
}

let userScore = localStorage.getItem('userScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;

document.getElementById('userScore').textContent = userScore;
document.getElementById('computerScore').textContent = computerScore;

const pickHand = (hand) => {
    images.style.display = 'none';
    triangle.style.display = 'none';
    resultArea.style.display='flex'
    userChoice=hand;
    
    const rockDiv = document.createElement('div');
    rockDiv.className = 'rock';

    const paperDiv = document.createElement('div');
    paperDiv.className = 'paper';

    const scissorDiv = document.createElement('div');
    scissorDiv.className = 'scissor';

    const Image = document.createElement('img');
    
    if (hand == 'rock') {
        
        rockDiv.appendChild(Image);
        userPicked.appendChild(rockDiv);
        Image.src = "stone.png";
        rockDiv.classList.add('no-hover-rock');
        rockDiv.classList.remove('rock');

    } else if (hand == 'paper') {

        paperDiv.appendChild(Image);
        userPicked.appendChild(paperDiv);
        Image.src = "paper.png";
        paperDiv.classList.add('no-hover-paper');
        paperDiv.classList.remove('paper');

    } else {

        scissorDiv.appendChild(Image);
        userPicked.appendChild(scissorDiv);
        Image.src = "scissor.png";
        scissorDiv.classList.add('no-hover-scissor');
        scissorDiv.classList.remove('scissor');
    }
    
    pcPick();
    determineWinner(userChoice,computerChoice)
};

const pcPick = ()=>{
    const data = ['rock','paper','scissor'];
    const cpData = Math.floor(Math.random()*3)
    computerChoice = data[cpData];
    
    const rockDiv = document.createElement('div');
    rockDiv.className = 'rock';

    const paperDiv = document.createElement('div');
    paperDiv.className = 'paper';

    const scissorDiv = document.createElement('div');
    scissorDiv.className = 'scissor';

    const Image = document.createElement('img');
    
    if(cpData==0){
        rockDiv.appendChild(Image);
        computerPicked.appendChild(rockDiv);
        Image.src = "stone.png";
        rockDiv.classList.add('no-hover-rock');
        rockDiv.classList.remove('rock');
    }
    else if(cpData==1){
        paperDiv.appendChild(Image);
        computerPicked.appendChild(paperDiv);
        Image.src = "paper.png";
        paperDiv.classList.add('no-hover-paper');
        paperDiv.classList.remove('paper');
    }else{
        scissorDiv.appendChild(Image);
        computerPicked.appendChild(scissorDiv);
        Image.src = "scissor.png";
        scissorDiv.classList.add('no-hover-scissor');
        scissorDiv.classList.remove('scissor');
    }
}

playAgain=()=>{

    resultArea.style.display='none';
    triangle.style.display='block';
    images.style.display='flex';
    button.style.display='none';

    while (userPicked.firstChild) {
        userPicked.removeChild(userPicked.firstChild);
    }

    while (computerPicked.firstChild) {
        computerPicked.removeChild(computerPicked.firstChild);
    }

    userPicked.innerHTML = '<h1>you picked</h1>';
    computerPicked.innerHTML = '<h1>pc picked</h1>';
}

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        output.innerHTML = 'tie up';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'scissor' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        output.innerHTML = 'You win <br> against pc';
         userPicked.querySelector('.userPick > div').style.boxShadow = '0 0 0 30px #06b200, 0 0 0 60px #2EB62C, 0 0 0 90px #57C84D';
        button.style.display='block'
        userScore++;
        document.getElementById('userScore').textContent = userScore;
        localStorage.setItem('userScore', userScore);
    } else {
        output.innerHTML = 'you lost <br> against pc';
        computerPicked.querySelector('.computerPick > * + div').style.boxShadow = '0 0 0 30px #06b200, 0 0 0 60px #2EB62C, 0 0 0 90px #57C84D';
        computerScore++;
        document.getElementById('computerScore').textContent = computerScore;
        localStorage.setItem('computerScore', computerScore);
    }
};

hurrayPage=()=>{
    scoreboard.style.display='none';
    resultArea.style.display='none';
    images.style.display = 'none';
    triangle.style.display = 'none';
    celebrate.style.display='flex';
}

newGame=()=>{
    scoreboard.style.display='flex';
    resultArea.style.display='none';
    images.style.display = 'flex';
    triangle.style.display = 'block';
    celebrate.style.display='none';
    button.style.display='none'

    while (userPicked.firstChild) {
        userPicked.removeChild(userPicked.firstChild);
    }

    while (computerPicked.firstChild) {
        computerPicked.removeChild(computerPicked.firstChild);
    }
    userPicked.innerHTML = '<h1>you picked</h1>';
    computerPicked.innerHTML = '<h1>pc picked</h1>';
}

closeRules=()=>{
    rules.style.display='none'
}
displayRules=()=>{
    rules.style.display='block'
}

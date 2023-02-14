const cell = document.getElementsByClassName('cell');
const player1ScoreSpan = document.querySelector('.player1Score');
const player2ScoreSpan = document.querySelector('.player2Score');
const restartBtn = document.querySelector('.restart');
const winner = document.getElementById('winner');

const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]

let player1 = [];
let player2 = [];

let win = false;

let score = {
    player1: 0,
    player2: 0,
}

let flag = true;


for(let i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if(flag === true) {
            addCellPlayer1(i);
        } else {
            addCellPlayer2(i);
        }
        checkWinner();
    });
}

function addCellPlayer1(i) {
    if(cell[i].textContent!= 'X' && cell[i].textContent!= 'O' ) {
        cell[i].innerHTML = 'X';
        player1.push(i);
        flag = false;
        console.log("a1: "+player1);
    }
    winner.innerHTML = 'Tic Tac Toe';
}

function addCellPlayer2(i) {
    if(cell[i].textContent!= 'X' && cell[i].textContent!= 'O' ) {
        cell[i].innerHTML = 'O';
        player2.push(i);
        flag = true;
        console.log("a2: "+player2);
    }
}

function checkWinner() {
    for(let i =0;i<winCombinations.length; i++) {
        if(winCombinations[i].every(val => player1.includes(val))) {
            winner.innerHTML = "Player 1 Won";
            score.player1++;
            drawScore();
            win = true;
            break;
        } else if(winCombinations[i].every(val => player2.includes(val))) {
            winner.innerHTML = "Player 2 Won";
            score.player2++;
            drawScore();
            win = true;
            break;
        } 
    }

    if(win == true) {
        win = false;
        clearField();
    }
}


function drawScore() {
    player1ScoreSpan.innerHTML = "Player 1: "+ score.player1;
    player2ScoreSpan.innerHTML = "Player 2: "+ score.player2;
    clearField();
}
drawScore();

function restartField() {
    winner.innerHTML = 'Tic Tac Toe';
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    score.player1 = 0;
    score.player2 = 0;
    flag = true;
}

function clearField() {
    clearWinner();
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}

restartBtn.addEventListener('click', () => {
    console.clear();
    restartField();
    drawScore();
});

function clearWinner() {
    if(player1.length === 1 || player2.length === 1) {
        winner.innerHTML = '';
    }
 }

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

let board = Array(9).fill(null);
let playerSymbol = null;
let computerSymbol = null;
let gameOver = false;

// DOM elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart');

// Choose X or O
document.getElementById('choose-x').addEventListener('click', () => chooseSymbol('X'));
document.getElementById('choose-o').addEventListener('click', () => chooseSymbol('O'));

function chooseSymbol(symbol) {
    playerSymbol = symbol;
    computerSymbol = symbol === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `You are ${playerSymbol}. Computer is ${computerSymbol}.`;
    document.getElementById('choose-x').style.display = 'none';
    document.getElementById('choose-o').style.display = 'none';
}

// Handle cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!gameOver && !cell.textContent) {
            makeMove(parseInt(cell.id), playerSymbol);
            if (!gameOver) computerMove();
        }
    });
});

function makeMove(index, symbol) {
    board[index] = symbol;
    document.getElementById(index).textContent = symbol;
    document.getElementById(index).classList.add('taken');
    checkWinner();
}

function computerMove() {
    let availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter(val => val !== null);

    // Easy mode: Random move
    let move = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    // Hard mode: Block player if they are about to win
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        const line = [board[a], board[b], board[c]];
        if (line.filter(val => val === playerSymbol).length === 2 && line.includes(null)) {
            move = combo[line.indexOf(null)];
            break;
        }
    }

    makeMove(move, computerSymbol);
}

function checkWinner() {
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            statusDisplay.textContent = `${board[a]} wins!`;
            restartButton.style.display = 'block';
            return;
        }
    }

    if (!board.includes(null)) {
        gameOver = true;
        statusDisplay.textContent = 'Tie game!';
        restartButton.style.display = 'block';
    }
}

// Restart the game
restartButton.addEventListener('click', () => {
    board = Array(9).fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken');
    });
    gameOver = false;
    statusDisplay.textContent = '';
    restartButton.style.display = 'none';
    document.getElementById('choose-x').style.display = 'inline-block';
    document.getElementById('choose-o').style.display = 'inline-block';
});
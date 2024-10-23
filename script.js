const squares = Array(9).fill(null);
let xIsNext = true;

document.querySelectorAll('.square').forEach((square, i) => {
    square.addEventListener('click', () => handleClick(i));
});

function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    squares[i] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    updateBoard();
}

function updateBoard() {
    document.querySelectorAll('.square').forEach((square, i) => {
        square.textContent = squares[i];
    });

    const winner = calculateWinner(squares);
    const statusElement = document.querySelector('.status');
    if (winner) {
        statusElement.textContent = `Winner: ${winner}`;
    } else {
        statusElement.textContent = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// Función para mover el texto flotante aleatoriamente
function moveFloatingText() {
    const floatingText = document.getElementById('floating-text');
    const maxX = window.innerWidth - floatingText.offsetWidth;
    const maxY = window.innerHeight - floatingText.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    floatingText.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Mueve el texto cada 2 segundos
setInterval(moveFloatingText, 2000);

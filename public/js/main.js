import Paddle from './Paddle.js'
import { COLORS } from './constants.js';
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

// TODO: dynamically compute x and y positions
const paddleLeft = new Paddle({
    x: 15,
    y: (canvas.height / 2) - 75,
    width: 10,
    height: 150,
    color: COLORS.PINK
});

const paddleRight = new Paddle({
    x: (canvas.width) - 15 - 10,
    y: (canvas.height / 2) - 75,
    width: 10,
    height: 150,
    color: COLORS.PINK
});

function clearCanvas() {
    ctx.fillStyle = COLORS.BLUE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Create canvas
function updateGame() {
}

function renderGame() {
    clearCanvas();
    paddleLeft.draw(ctx);
    paddleRight.draw(ctx);
}

function gameLoop() {
    updateGame();
    renderGame();
    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', e => {

    console.log(e.keyCode);

    if(e.keyCode === 40) {
        paddleLeft.moveDown();
    } else if(e.keyCode === 38) {
        paddleLeft.moveUp();
    } else if (e.keyCode === 87) {
        paddleRight.moveUp();
    } else if (e.keyCode === 83) {
        paddleRight.moveDown();
    }

});


gameLoop(); // later to be CyberPong.start()
// have them react (move) to user Input
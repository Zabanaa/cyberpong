import Paddle from './Paddle.js'
import { COLORS } from './constants.js';
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

ctx.fillStyle = COLORS.BLUE;
ctx.fillRect(0, 0, canvas.width, canvas.height);

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

console.log(paddleRight);

paddleLeft.draw(ctx);
paddleRight.draw(ctx);
// create a paddle class
// instantiate two paddles with different colors
// have them drawn on the canvas
// have them react (move) to user Input
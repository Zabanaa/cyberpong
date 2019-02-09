import { COLORS } from './constants.js';
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

ctx.fillStyle = COLORS.BLUE;
ctx.fillRect(0, 0, canvas.width, canvas.height);
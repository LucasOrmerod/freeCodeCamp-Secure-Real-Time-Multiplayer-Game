import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

const speed = 10;
const moveKeys = ["w", "a", "s", "d", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];

console.log(canvas)
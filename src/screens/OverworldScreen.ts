import {Screen} from './Screen.ts';

const PLAYER_SPEED = 1;

const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;

const playerPos = {
    x: 0,
    y: 0
}

const keysDown : {[key: string]: boolean}= {
    'W': false,
    'A': false,
    'S': false,
    'D': false
}

function handleKeydown(e: KeyboardEvent) {
    const key = e.key.toUpperCase();
    console.log(key);
    if (keysDown.hasOwnProperty(key)) {
        keysDown[key] = true;
    }
}

function handleKeyup(e: KeyboardEvent) {
    const key = e.key.toUpperCase();
    console.log(key);
    if (keysDown.hasOwnProperty(key)) {
        keysDown[key] = false;
    }
}

function update(deltaTime: number, canvas: HTMLCanvasElement) {
    if (keysDown.W === true) {
        playerPos.y -= PLAYER_SPEED * deltaTime;
    }
    if (keysDown.S === true) {
        playerPos.y += PLAYER_SPEED * deltaTime;
    }
    if (keysDown.A === true) {
        playerPos.x -= PLAYER_SPEED * deltaTime;
    }
    if (keysDown.D === true) {
        playerPos.x += PLAYER_SPEED * deltaTime;
    }
}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(playerPos.x, playerPos.y, PLAYER_WIDTH, PLAYER_HEIGHT);
}

function init() {
    window.onkeydown = handleKeydown;
    window.onkeyup = handleKeyup;
}

const overworldScreen: Screen = {
    update: update,
    render: render,
    init: init,
};

export default overworldScreen;
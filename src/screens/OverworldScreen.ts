import {Screen} from './Screen.ts';

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

}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

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
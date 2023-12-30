import {Screen} from './Screen.ts';

function update(deltaTime: number, canvas: HTMLCanvasElement) {

}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

}

function init() {

}

const overworldScreen: Screen = {
    update: update,
    render: render,
    init: init,
};

export default overworldScreen;
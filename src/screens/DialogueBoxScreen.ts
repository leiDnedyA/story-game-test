import {Screen} from './Screen.ts';

const RELATIVE_HEIGHT = .2;
const BACKGROUND_COLOR = '#ddf';
const TEXT_COLOR = 'black';
const TEXT_MARGIN = 30;

const TYPING_DELAY = 10; // in milliseconds
const CHAR_SKIP_PROBABILITY = .1;

let currTextIndex = 0;
let currTargetText = "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.";
let currDelay = 0;
let currBreakPoint = 0;

type DialogueBoxOptions = {
    text: string
}

function init(options: DialogueBoxOptions) {
    currTargetText = options.text;
}

function update(deltaTime: number, canvas: HTMLCanvasElement) {
    if (currTextIndex >= currTargetText.length) {
        return;
    }

    currDelay += deltaTime;

    if (currDelay >= TYPING_DELAY) {
        currDelay = 0;
        if (Math.random() <= CHAR_SKIP_PROBABILITY) {
            return;
        }
        currTextIndex += 1;
    }
}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const pixelHeight = canvas.height * RELATIVE_HEIGHT;
    const yPos = canvas.height - pixelHeight;

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, yPos, canvas.width, pixelHeight);

    const currText = currTargetText.slice(currBreakPoint, currTextIndex);

    ctx.fillStyle = TEXT_COLOR;
    ctx.font = '20px sans-serif';
    if (ctx.measureText(currText).width > canvas.width - 2 * TEXT_MARGIN) {
        currBreakPoint = currTextIndex;
    }
    ctx.fillText(currText, TEXT_MARGIN, yPos + 45 + TEXT_MARGIN);
}

const dialogueBoxScreen: Screen = {
    update: update,
    render: render,
    init: init,
};

export default dialogueBoxScreen;

import { Screen } from "./screens/Screen.ts";
import ballScreen from "./screens/BallScreen.ts";
import dialogueBoxScreen from "./screens/DialogueBoxScreen.ts";

const FPS = 144;

const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.querySelector("#game-canvas")
);
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

let gameInterval: number | null = null;
let lastTime = 0;
let deltaTime = 0;

const screenStack: Screen[] = [];

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function render() {
  if (ctx === null) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const screen of screenStack) {
    screen.render(ctx, canvas);
  }
}

function update() {
  const now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;

  for (const screen of screenStack) {
    screen.update(deltaTime, canvas);
  }

  render();
}

function start() {
  adjustCanvasSize();
  lastTime = Date.now();
  if (dialogueBoxScreen.init !== undefined) {
    dialogueBoxScreen.init({ text: "Hello world :)" });
  }
  screenStack.push(ballScreen);
  screenStack.push(dialogueBoxScreen);
  gameInterval = setInterval(update, 1000 / FPS);
}

function stop() {
  if (gameInterval !== null) {
    clearInterval(gameInterval);
  }
}

window.onload = start;
window.onresize = adjustCanvasSize;

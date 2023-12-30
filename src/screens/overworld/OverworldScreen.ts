import { Screen } from "../Screen.ts";
import { GameObject } from "./GameObject.ts";

const PLAYER_SPEED = 0.25;

const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;

const player: GameObject = {
  x: 0,
  y: 0,
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
  speed: PLAYER_SPEED,
};

const keysDown: { [key: string]: boolean } = {
  W: false,
  A: false,
  S: false,
  D: false,
};

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
    player.y -= PLAYER_SPEED * deltaTime;
  }
  if (keysDown.S === true) {
    player.y += PLAYER_SPEED * deltaTime;
  }
  if (keysDown.A === true) {
    player.x -= PLAYER_SPEED * deltaTime;
  }
  if (keysDown.D === true) {
    player.x += PLAYER_SPEED * deltaTime;
  }
}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
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

import {Screen} from './Screen';

const BALL_SPEED = .2;
const BALL_LENGTH = 30;

let ballPosition = {
  x: 0,
  y: 0
};

let ballIsReversed = {
  x: false,
  y: false
}

function render(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = 'black';
  ctx.fillRect(ballPosition.x, ballPosition.y, BALL_LENGTH, BALL_LENGTH);
}

function update(deltaTime: number, canvas: HTMLCanvasElement) {
  const xSpeed = ballIsReversed.x ? -BALL_SPEED : BALL_SPEED;
  const ySpeed = ballIsReversed.y ? -BALL_SPEED : BALL_SPEED;
  
  ballPosition.x += xSpeed * deltaTime;
  ballPosition.y += ySpeed * deltaTime;

  if (ballPosition.x + BALL_LENGTH > canvas.width) {
    ballIsReversed.x = true;
  }
  if (ballPosition.y + BALL_LENGTH > canvas.height) {
    ballIsReversed.y = true;
  }

  if (ballPosition.x < 0) {
    ballIsReversed.x = false;
  }
  if (ballPosition.y < 0) {
    ballIsReversed.y = false;
  }
}

const ballScreen: Screen = { render, update };

export default ballScreen;

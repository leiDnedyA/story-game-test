
type UpdateFunc = (deltaTime: number, canvas: HTMLCanvasElement) => void;

type RenderFunc = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;

type Screen = {
  update: UpdateFunc;
  render: RenderFunc;
  init?: (options?: any) => void;
}

export type {Screen, UpdateFunc, RenderFunc};

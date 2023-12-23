type Screen = {
  update: (deltaTime: number, canvas) => void;
  render: (ctx, canvas) => void;
}

export default Screen;

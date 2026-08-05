class Engine {
  private canvas = document.getElementById('canvas') as HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d")!;
  private size = { width: 1920, height: 1080 };
  private lifecycle = {
    lastCycle: Date.now(),
    update: () => {
      this.lifecycle.lastCycle = Date.now();
      requestAnimationFrame(this.lifecycle.draw.bind(this));
    },
    draw: () => {
      this.clear();
      this.lifecycle.update();
    }
  };

  constructor() {
    this.ctx.imageSmoothingEnabled = false; // disable smoothing upscaled image - pixel art

    // Update canvas size (on load and on resize)
    this.updateCanvasSize();
    window.addEventListener('resize', this.updateCanvasSize.bind(this));

    // Start lifecycle
    this.lifecycle.update();
  }

  static getInstance() {
    return new Engine();
  }

  private updateCanvasSize() {
    this.size.width = this.canvas.clientWidth * (this.size.height / this.canvas.clientHeight);

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  get width() {
    return this.size.width;
  }

  get height() {
    return this.size.height;
  }

  get delta() {
    return Date.now() - this.lifecycle.lastCycle;
  }

  update(cb: () => void): void {
    this.lifecycle.update = () => {
      cb();
      this.lifecycle.lastCycle = Date.now();
      requestAnimationFrame(this.lifecycle.draw.bind(this));
    };
  }

  draw(cb: () => void): void {
    this.lifecycle.draw = () => {
      this.clear();
      cb();
      this.lifecycle.update();
    };
  }

  /* Drawing methods */
  print(text: string, size: number, x: number, y: number, lightness: number) {
    this.ctx.textBaseline = "top";
    this.ctx.font = `bold ${size}px 'Courier New'`;
    this.ctx.fillStyle = `hsl(140, 100%, ${lightness}%)`;
    this.ctx.fillText(text, x, y);
  }

  rect(width: number, height: number, x: number, y: number, lightness: number) {
    this.ctx.fillStyle = `hsl(140, 100%, ${lightness}%)`;
    this.ctx.fillRect(x, y, width, height);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default Engine.getInstance();

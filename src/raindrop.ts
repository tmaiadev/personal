import e from "./engine";
import Char from "./char";
import Ani from "./ani";

export default class Raindrop {
  private x: number = 0;
  private size: number = 16;
  private chars: Char[] = [];
  private rainDropAni = new Ani();

  constructor(x: number) {
    this.x = x;

    const nChars = Math.ceil(e.height / this.size);
    for (let i = 0; i < nChars; i++) {
      const char = new Char();
      char.x = this.x;
      char.y = i * this.size;
      char.size = this.size;
      char.lightness = 0;
      char.randomCharRotation((Math.random() * 4500) + 500);

      this.chars.push(char);
    }
  }

  drop() {
    this.rainDropAni.fps = Math.random() * 96 + 24;
    this.rainDropAni.neverSkipFrame = true;

    for (let i = 0; i < this.chars.length; i++) {
      this.rainDropAni.frames.push(() => {
        const char = this.chars[i];
        char.lightness = 90;
        char.fadeOut(1000);
      });
    }

    this.rainDropAni.start();
  }

  update() {
    this.chars.forEach(char => char.update());
    this.rainDropAni.update();
  }

  draw() {
    this.chars.forEach(char => char.draw());
  }
}

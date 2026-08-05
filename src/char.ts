import e from "./engine";
import Ani from "./ani";

export default class Char {
  public char;
  public size = 16;
  public x = 0;
  public y = 0;
  public lightness = 0;
  private fadeOutAni = new Ani();
  private randomCharRotationAni = new Ani();

  constructor(char?: string, size = 16, x = 0, y = 0, lightness = 0) {
    this.char = char || this.randomChar();
    this.size = size;
    this.x = x;
    this.y = y;
    this.lightness = lightness;
  }

  randomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split("");

    return chars[Math.floor(Math.random() * chars.length)];
  }

  fadeOut(durationMs = 1000) {
    const lightness = this.lightness;
    this.fadeOutAni.ease(durationMs, t => {
      this.lightness = lightness - (t * lightness);
    });

    this.fadeOutAni.start();
  }

  randomCharRotation(durationMs = 2500) {
    this.randomCharRotationAni.fps = 1000 / durationMs;
    this.randomCharRotationAni.schedule(durationMs, () => this.char = this.randomChar());
    this.randomCharRotationAni.loop = true;
    this.randomCharRotationAni.runFrameOnce = true;
    this.randomCharRotationAni.start();
  }

  update() {
    this.fadeOutAni.update();
    this.randomCharRotationAni.update();
  }

  draw() {
    e.print(this.char, this.size, this.x, this.y, this.lightness);
  }
}

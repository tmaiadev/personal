import e from "./engine";
import RainDrop from "./raindrop";

export default class Rain {
  private rainDrops: RainDrop[] = [];

  constructor() {
    const size = 16;
    const nRainDrops = 1920 / size;
      for (let i = 0; i < nRainDrops; i++) {
        const rainDrop = new RainDrop(i * size);
        this.rainDrops.push(rainDrop);
        setTimeout(() => {
          rainDrop.drop(Math.random() * 3500 + 1000);
        }, Math.random() * 5000);
      }
  }

  update() {
    this.rainDrops.forEach(rd => rd.update());
  }

  draw() {
    this.rainDrops.forEach(rd => rd.draw());
  }
}

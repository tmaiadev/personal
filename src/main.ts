import e from "./engine";
import Rain from "./rain";
import layout from "./layout";


const HALF_WIDTH = Math.floor(e.width / 2 / 16);
const HALF_HEIGHT = Math.floor(e.height / 2 / 16);

layout.write("Thalles Maia", HALF_WIDTH - 6, HALF_HEIGHT - 1);
layout.write("Software Engineer", HALF_WIDTH - 8, HALF_HEIGHT + 1);

const raindrop = new Rain();

e.update(function () {
  raindrop.update();
});

e.draw(function () {
  raindrop.draw();
});

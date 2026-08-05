import e from "./engine";
import Rain from "./rain";

const raindrop = new Rain();

e.update(function () {
  raindrop.update();
});

e.draw(function () {
  raindrop.draw();
});

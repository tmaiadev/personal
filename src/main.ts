import e from "./engine";
import Raindrop from "./raindrop";

const raindrop = new Raindrop(e.width / 2);
raindrop.drop();

e.update(function () {
  raindrop.update();
});

e.draw(function () {
  raindrop.draw();
});

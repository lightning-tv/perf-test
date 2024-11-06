import Blits from "@lightningjs/blits";
import Tile from "../components/Tile.js";

function generateRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const generateRandomColor = () =>
  "0x" + Math.floor(Math.random() * 16777215).toString(16) + "FF";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HEIGHT = 600;
const WIDTH = 800;

export default Blits.Component("TilePage", {
  components: {
    Tile,
  },
  template: `
    <Element w="1920" h="1080" color="#f0f0f0">
      <Tile
        :for="item in $items"
        :w="$item.width"
        :h="$item.height"
        :x="$item.x"
        :y="$item.y"
        :color="$item.color"
        :radius="$item.radius"
        key="$item.key"
      />
    </Element>
  `,
  state() {
    return {
      items: new Array(),
    };
  },
  hooks: {
    init() {
      setInterval(() => {
        const _blocks = [];
        // If you want to test tear down and full recreate you need to remove the key prop
        for (let step = 0; step < 1000; step++) {
          _blocks.push({
            key: step,
            width: random(50, 100),
            height: random(50, 100),
            x: random(0, WIDTH),
            y: random(0, HEIGHT),
            radius: random(0, 50),
            color: generateRandomColor(),
          });
        }
        this.items = _blocks;
      }, 2000);
    },
  },
});

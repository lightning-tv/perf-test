import Blits from '@lightningjs/blits'
import Tile from '../components/Tile.js'

function generateRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const HEIGHT = 600
const WIDTH = 800

export default Blits.Application({
  template: `
    <Element w="1920" h="1080" color="#f0f0f0">
      <Element
        :for="item in $items"
        :width="$item.width"
        :height="$item.height"
        :x="$item.x"
        :y="$item.y"
        :color="$item.color"
        :effects="[$shader('radius', {radius: $item.radius})]"
        key="$item.key"
      />
    </Element>
  `,
  components: {
    Tile,
  },
  state() {
    return {
      items: [],
    }
  },
  hooks: {
    init() {
      setInterval(() => {
        const _blocks = []
        const color = generateRandomHexColor();
        // If you want to test tear down and full recreate you need to remove the key prop
        for (let step = 0; step < 1000; step++) {
          _blocks.push({
            key: step,
            width: random(50, 100),
            height: random(50, 100),
            x: random(0, WIDTH),
            y: random(0, HEIGHT),
            radius: random(0, 50),
            color: color, //generateRandomHexColor(),
          })
        }
        this.items = _blocks
      }, 2000)
    },
  },
})

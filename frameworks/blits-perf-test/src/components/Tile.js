import Blits from '@lightningjs/blits'

export default Blits.Component('Tile', {
  template: `
    <Element :y="$y" :x="$x" :w="$w" :h="$h" :color="$color" :effects="[{type: 'radius', props: {radius: $radius}}]" />
  `,
  props: ['x', 'y', 'w', 'h', 'radius', 'color']
})

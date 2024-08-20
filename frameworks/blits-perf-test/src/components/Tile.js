import Blits from '@lightningjs/blits'

export default Blits.Component('Tile', {
  template: `
    <Element
      :y="$y"
      :x="$x"
      :w="$width"
      :h="$height"
      :color="$color"
      :effects="[{type: 'radius', props: {radius: $radius}}]"
    />
  `,
  props: ['x', 'y', 'width', 'height', 'radius', 'color']
})

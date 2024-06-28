import Blits from '@lightningjs/blits'

export default Blits.Component('Tile', {
  template: `
    <Element :y="$y" :x="$x" :w="$width" :h="$height" :color="$color" :effects="[$shader('radius', {radius: $radius})]" />
  `,
  props: [
    {
      key: 'x',
      cast: Number,
      default: 100,
    },
    {
      key: 'y',
      cast: Number,
      default: 100,
    },
    {
      key: 'width',
      cast: Number,
      default: 100,
    },
    {
      key: 'height',
      cast: Number,
      default: 100,
    },
    {
      key: 'radius',
      cast: Number,
      default: 25,
    },
    {
      key: 'color',
      cast: String,
      default: 'red',
    },
  ],
})

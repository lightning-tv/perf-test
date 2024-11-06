import Blits from "@lightningjs/blits";

export default Blits.Component("TileOne", {
  template: `
    <Element :y="$item.y" :x="$item.x" :w="$item.width" :h="$item.height" :color="$item.color" :effects="[{type: 'radius', props: {radius: $item.radius}}]" />
  `,
  props: ["item"],
});

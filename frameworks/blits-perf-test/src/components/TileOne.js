import Blits from "@lightningjs/blits";

export default Blits.Component("TileOne", {
  template: `
    <Element :y="$item.y" :x="$item.x" :w="$item.w" :h="$item.h" :color="$item.color" :effects="[{type: 'radius', props: {radius: $item.radius}}]" />
  `,
  props: ["item"],
});

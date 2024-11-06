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
    <Element w="1920" h="1080" color="#797777">
      <Tile width="35" height="26" x="475" y="78" radius="62" />
      <Tile width="28" height="57" x="547" y="277" radius="66" />
      <Tile width="41" height="41" x="768" y="869" radius="51" />
      <Tile width="69" height="66" x="613" y="130" radius="25" />
      <Tile width="25" height="61" x="953" y="416" radius="52" />
      <Tile width="66" height="40" x="284" y="55" radius="36" />
      <Tile width="69" height="44" x="23" y="879" radius="66" />
      <Tile width="56" height="23" x="484" y="349" radius="25" />
      <Tile width="23" height="33" x="441" y="601" radius="34" />
      <Tile width="42" height="54" x="853" y="840" radius="72" />
      <Tile width="25" height="51" x="132" y="218" radius="44" />
      <Tile width="61" height="22" x="757" y="43" radius="54" />
      <Tile width="49" height="60" x="506" y="476" radius="34" />
      <Tile width="30" height="67" x="35" y="646" radius="57" />
      <Tile width="44" height="54" x="779" y="677" radius="24" />
      <Tile width="45" height="36" x="542" y="288" radius="53" />
      <Tile width="61" height="61" x="846" y="361" radius="67" />
      <Tile width="51" height="44" x="507" y="607" radius="66" />
      <Tile width="36" height="51" x="52" y="746" radius="46" />
      <Tile width="33" height="39" x="371" y="69" radius="25" />
      <Tile width="24" height="63" x="955" y="655" radius="53" />
      <Tile width="39" height="69" x="271" y="276" radius="28" />
      <Tile width="71" height="68" x="417" y="680" radius="60" />
      <Tile width="42" height="38" x="439" y="231" radius="52" />
      <Tile width="27" height="39" x="866" y="568" radius="47" />
      <Tile width="40" height="53" x="967" y="39" radius="21" />
      <Tile width="24" height="30" x="777" y="195" radius="37" />
      <Tile width="41" height="58" x="119" y="725" radius="71" />
      <Tile width="24" height="53" x="215" y="937" radius="45" />
      <Tile width="44" height="59" x="184" y="204" radius="61" />
      <Tile width="66" height="67" x="399" y="191" radius="36" />
      <Tile width="25" height="25" x="268" y="451" radius="22" />
      <Tile width="21" height="24" x="993" y="99" radius="45" />
      <Tile width="67" height="45" x="922" y="388" radius="25" />
      <Tile width="66" height="69" x="883" y="894" radius="21" />
      <Tile width="59" height="57" x="155" y="268" radius="36" />
      <Tile width="56" height="36" x="567" y="741" radius="43" />
      <Tile width="24" height="34" x="866" y="747" radius="67" />
      <Tile width="38" height="45" x="141" y="401" radius="34" />
      <Tile width="38" height="62" x="381" y="777" radius="35" />
      <Tile width="24" height="67" x="63" y="222" radius="54" />
      <Tile width="28" height="25" x="951" y="499" radius="24" />
      <Tile width="69" height="70" x="813" y="738" radius="58" />
      <Tile width="37" height="42" x="109" y="870" radius="49" />
      <Tile width="66" height="22" x="330" y="167" radius="60" />
      <Tile width="41" height="51" x="634" y="888" radius="51" />
      <Tile width="60" height="56" x="429" y="328" radius="52" />
      <Tile width="33" height="31" x="803" y="586" radius="69" />
      <Tile width="41" height="35" x="510" y="812" radius="53" />
      <Tile width="69" height="60" x="382" y="688" radius="57" />
      <Tile width="26" height="28" x="358" y="254" radius="51" />
      <Tile width="36" height="27" x="833" y="178" radius="36" />
    </Element>
  `,
  components: {
    Tile,
  },
  state() {
    return {
      items: [],
      active: false,
    }
  },
  hooks: {
    init() {
      // setTimeout(() => {
      //   const _blocks = []
      //   for (let step = 0; step < 100; step++) {
      //     _blocks.push({
      //       key: step,
      //       width: random(50, 100),
      //       height: random(50, 100),
      //       x: random(0, WIDTH),
      //       y: random(0, HEIGHT),
      //       radius: random(0, 50),
      //       color: generateRandomHexColor(),
      //     })
      //   }
      //   this.items = _blocks
      // }, 2000)

      setTimeout(() => {
        this.active = true
      }, 2000)
    },
  },
})

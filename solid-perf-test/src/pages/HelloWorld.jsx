import { Text, View, hexColor } from '@lightningtv/solid';
import { Index, Show, createSignal } from 'solid-js';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomColor = () => '0x' + Math.floor(Math.random() * 16777215).toString(16) + 'FF';

const HelloWorld = () => {
  const [blocks, setBlocks] = createSignal([]);
  let blockContainer;

  const handleTPress = () => {
    const _blocks = [];

    // To tear down and recreate uncomment next line
    // setBlocks([]);

    for (let step = 0; step < 1000; step++) {
      _blocks.push({
        width: random(50, 100),
        height: random(50, 100),
        x: random(0, WIDTH),
        y: random(0, HEIGHT),
        borderRadius: random(0, 50),
        color: generateRandomColor()
      });
    }

    setBlocks(_blocks);
  };

  setInterval(() => {
    handleTPress();
  }, 2000);

  return (
    <View style={{color: hexColor('#f0f0f0')}}>
      <Show when={blocks().length > 0}>
        <View ref={blockContainer}>
            <Index each={blocks()}>{(props) => <node {/*@once*/ ...props} />}</Index>
        </View>
      </Show>
    </View>
  );
};

export default HelloWorld;

const HEIGHT = 600;
const WIDTH = 800;

const Block = (props) => {
  return <View {...props} />;
};

function generateRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

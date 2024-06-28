import { Text, View, hexColor } from '@lightningtv/solid';
import { Index, createSignal } from 'solid-js';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
        color: hexColor(generateRandomHexColor())
      });
    }

    setBlocks(_blocks);
  };

  setInterval(() => {
    handleTPress();
  }, 2000);

  const handleDirectionChange = (direction) => {
    const _blocks = blocks();
    if (direction === 'right' || direction === 'left') {
      const amount = direction === 'left' ? -50 : 50;
      blockContainer.children.forEach((child) => {
        child.x += amount;
      });
    } else if (direction === 'up' || direction === 'down') {
      const amount = direction === 'down' ? 50 : -50;
      blockContainer.children.forEach((child) => {
        child.y += amount;
      });
    }
  };


  return (
    <View style={{color: hexColor('#f0f0f0')}}>
      <View
        autofocus
        onPressT={() => {
          handleTPress();
        }}
        onUp={() => {
          handleDirectionChange('up');
        }}
        onDown={() => {
          handleDirectionChange('down');
        }}
        onLeft={() => {
          handleDirectionChange('left');
          return true;
        }}
        onRight={() => {
          handleDirectionChange('right');
        }}
      >
        {/* <Text
          style={{
            color: hexColor('#ff0000'),
          }}
        >
          Count: {blocks().length}
        </Text> */}
      </View>
      <Show when={blocks().length > 0}>
        <View ref={blockContainer}>
            <Index each={blocks()}>{(props) => <Block {...props} />}</Index>
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

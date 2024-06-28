import { Text, View, hexColor } from '@lightningjs/solid';
import { For, createSignal } from 'solid-js';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HelloWorld = () => {
  const [blocks, setBlocks] = createSignal([]);
  let blockContainer;

  const handleTPress = () => {
    const _blocks = [...blocks()];

    for (let step = 0; step < 100; step++) {
      _blocks.push({
        width: random(50, 100),
        height: random(50, 100),
        x: random(0, WIDTH),
        y: random(0, HEIGHT),
        borderRadius: random(0, 50),
        transition: { x: { duration: 250 } },
        color: hexColor(generateRandomHexColor())
      });
    }

    setBlocks(_blocks);
  };

  setTimeout(() => {
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
      <View ref={blockContainer}>
        <For each={blocks()}>{(props) => <Block {...props} />}</For>
      </View>
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

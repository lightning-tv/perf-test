import { Text, View, hexColor } from "@lightningtv/solid";
import { For, Show, createSignal, onCleanup } from "solid-js";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomColor = () =>
  "0x" + Math.floor(Math.random() * 16777215).toString(16) + "FF";

const HEIGHT = 600;
const WIDTH = 800;

const ForPage = () => {
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
        color: generateRandomColor(),
      });
    }

    setBlocks(_blocks);

    // Direct updating
    // for (let step = 0; step < 1000; step++) {
    //   let c = blockContainer.children[step];
    //   c.width = random(50, 100);
    //   c.height = random(50, 100);
    //   c.x = random(0, WIDTH);
    //   c.y = random(0, HEIGHT);
    //   c.color = generateRandomColor();
    // }
  };

  const interval = setInterval(() => {
    handleTPress();
  }, 2000);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <View ref={blockContainer} style={{ color: hexColor("#f0f0f0") }}>
      <For each={blocks()}>
        {(item) => (
          <node
            x={item.x}
            y={item.y}
            width={item.width}
            height={item.height}
            color={item.color}
            effects={{ radius: { radius: item.borderRadius } }}
          />
        )}
      </For>
    </View>
  );
};
// <For each={blocks()}>{(item) => <node x={/*@once*/ item.x} y={/*@once*/ item.y} width={/*@once*/ item.width} height={/*@once*/ item.height} color={/*@once*/ item.color} borderRadius={/*@once*/ item.borderRadius} />}</For>
// <node x={item().x} y={item().y} width={item().width} height={item().height} color={item().color} borderRadius={item().borderRadius} />
// <node x={/*once*/ item().x} y={/*@once*/ item().y} width={/*@once*/ item().width} height={/*@once*/ item().height} color={/*@once*/ item().color} borderRadius={/*@once*/ item().borderRadius} />
export default ForPage;

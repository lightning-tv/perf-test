import { NodeStyles, Text, View } from '@lightningtv/solid';
import { createSignal } from 'solid-js';
import { Row, Button } from '@lightningtv/solid-ui';

const TextPage = () => {
  const [counter, setCounter] = createSignal(0);
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 350,
    x: 20,
    gap: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
  } satisfies NodeStyles;

  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
  }

  const Title = {
    fontSize: 42,
  };

  const Overview = {
    width: OverviewContainer.width,
    fontSize: 26,
    contain: 'width'
  };

  const Subline = {
    fontSize: 26,
  };

  return (
    <View style={OverviewContainer}>
      <Text style={Title}>Count to {counter()} with me</Text>
      <Row scroll="none">
        <Button autofocus onEnter={() => setCounter(p => p + 1)}>Increment</Button>
        <Button onEnter={() => setCounter(p => p - 1)}>Decrement</Button>
      </Row>
    </View>
  );
};

export default TextPage;

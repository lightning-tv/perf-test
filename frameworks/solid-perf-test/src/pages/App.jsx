import { View } from "@lightningtv/solid";
import { useFocusManager } from "@lightningtv/solid/primitives";

const App = (props) => {
  useFocusManager();

  //const navigate = useNavigate();
  // const announcer = useAnnouncer();
  // announcer.debug = false;
  // announcer.enabled = false;

  return (
    <View
      ref={window.APP}
      // onAnnouncer={() => announcer.enabled = !announcer.enabled}
      onLast={() => history.back()}
      onText={() => navigate("/text")}
      onCounter={() => navigate("/counter")}
      onButtons={() => navigate("/buttons")}
      onMenu={() => navigate("/")}
    >
      {props.children}
    </View>
  );
};

export default App;

import { createRenderer, Config } from "@lightningtv/solid";
import { HashRouter } from "@lightningtv/solid/primitives";
import { Route } from "@solidjs/router";
import DirectUpdate from "./pages/DirectUpdate";
import TilePage from "./pages/Tile";
import MapPage from "./pages/Map";
import IndexPage from "./pages/Index";
import ForPage from "./pages/For";
import { WebGlCoreRenderer } from "@lightningjs/renderer/webgl";
import App from "./pages/App";

//import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';

Config.debug = false;
Config.fontSettings.fontFamily = "Ubuntu";
Config.fontSettings.color = 0xffffffff;
Config.rendererOptions = {
  //coreExtensionModule: coreExtensionModuleUrl,
  numImageWorkers: 2,
  enableInspector: false,
  renderEngine: WebGlCoreRenderer,
  fontEngines: [],
  // deviceLogicalPixelRatio: 1
};

const { render } = createRenderer();
render(() => (
  <HashRouter root={(props) => <App {...props} />}>
    <Route path="" component={DirectUpdate} />
    <Route path="tile" component={TilePage} />
    <Route path="for" component={ForPage} />
    <Route path="map" component={MapPage} />
    <Route path="index" component={IndexPage} />
  </HashRouter>
));

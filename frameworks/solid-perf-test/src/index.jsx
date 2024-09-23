import { createRenderer, Config } from '@lightningtv/solid';
import HelloWorld from './pages/HelloWorld';
import { WebGlCoreRenderer } from '@lightningjs/renderer/webgl';
// import TextPage from './pages/Text';
// import CounterPage from './pages/Counter';
// import ButtonsPage from './pages/ButtonsPage';
// import NotFound from './pages/NotFound';

//import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';

Config.debug = false;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;
Config.rendererOptions = {
  //coreExtensionModule: coreExtensionModuleUrl,
  numImageWorkers: 2,
  enableInspector: false,
  renderEngine: WebGlCoreRenderer,
  fontEngines: [],
  // deviceLogicalPixelRatio: 1
};

const {render} = createRenderer();
render(() =>  (
  <HelloWorld />
));

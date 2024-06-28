import { render, Config } from '@lightningjs/solid';
import { HashRouter, Route } from "@solidjs/router";
import App from './pages/App';
import HelloWorld from './pages/HelloWorld';
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
  // deviceLogicalPixelRatio: 1
};

render(() =>  (
  <HelloWorld />
));

import { createApp, Config } from '@lightningtv/vue';
import Perf from './Perf.vue';
import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';
//import router from './router';

const logFps = false;
Config.debug = false;
Config.animationsEnabled = true;
Config.fontSettings.fontFamily = 'Roboto';
Config.fontSettings.color = 0xf6f6f6ff;
Config.fontSettings.fontSize = 32;
Config.rendererOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  fpsUpdateInterval: logFps ? 200 : 0,
  enableInspector: false,
  // deviceLogicalPixelRatio: 1
};

createApp(Perf).then(({app, rootNode}) => {
  app.mount(rootNode);
});
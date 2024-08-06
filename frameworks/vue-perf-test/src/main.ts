import { createApp, Config } from '@lightningtv/vue';
import loadFonts from './loadFonts.js';
import Perf from './Perf.vue';
//import router from './router';

const logFps = false;
Config.debug = false;
Config.animationsEnabled = true;
Config.fontSettings.fontFamily = 'Roboto';
Config.fontSettings.color = 0xf6f6f6ff;
Config.fontSettings.fontSize = 32;
Config.rendererOptions = {
  fpsUpdateInterval: logFps ? 200 : 0,
  enableInspector: false,
  // deviceLogicalPixelRatio: 1
};

const {app, rootNode, renderer} = createApp(Perf);
//app.use(router);
loadFonts(renderer.stage);
app.mount(rootNode);

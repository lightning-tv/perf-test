import Blits from "@lightningjs/blits";

import Home from "./pages/Home.js";
import TilePage from "./pages/TilePage.js";
import StaticTilePage from "./pages/StaticTile.js";

export default Blits.Application({
  template: `
    <Element w="1920" h="1080">
      <RouterView w="100%" h="100%" />
    </Element>
  `,
  routes: [
    { path: "/", component: Home },
    { path: "/tile", component: TilePage },
    { path: "/static", component: StaticTilePage },
  ],
});

import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'

export default Blits.Application({
  components: {
    Home,
  },
  template: `
    <Home></Home>
  `,
})

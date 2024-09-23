import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({
    solid: {
      moduleName: "@lightningtv/solid",
      generate: 'universal',
    },
  })],
  base: '',
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    },
    dedupe: ['solid-js', '@lightningtv/solid', '@lightningtv/solid-primitives', '@lightningjs/renderer'],
  },
  optimizeDeps: {
    include: [],
    exclude: [
    '@lightningtv/solid',
    '@lightningtv/solid-primitives',
    '@lightningtv/solid-ui',
    '@lightningjs/renderer/core',
    '@lightningjs/renderer/webgl',
    '@lightningjs/renderer/workers/renderer']
  },
  server: {
    hmr: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  test: {
    browser: {
      enabled: true,
      headless: false,
      provider: "playwright",
      name: 'webkit'
    },
    testTransformMode: { web: ['/.[jt]sx?$/'] },
    globals: true
  }
});

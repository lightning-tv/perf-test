import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import hexColorTransform from "@lightningtv/vite-hex-transform";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    hexColorTransform(),
    vueJsx({
      isCustomElement: (tag) => ['node', 'view', 'text'].includes(tag),
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['node', 'view', 'text'].includes(tag),
        },
      },
    }),
  ],
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    dedupe: [
      "vue",
      "@vue/shared",
      "@vue/runtime-core",
      "@vue/reactivity",
      "@lightningjs/renderer",
      "@lightningtv/vue",
    ],
  },
});

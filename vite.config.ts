import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths({ root: './' }), solid()],
  server: {
    host: true,
    port: 3000,
    proxy: {},
    hmr: {
      protocol: "http",
      host: 'localhost',
      port: 3000,
    }
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        compact: true,
      }
    },
  }
})

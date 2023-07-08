const { resolve } = require("path");
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  css: { devSourcemap: true, },

  root: resolve("./static"), // {% vite_asset '<root>/src/css/css.js'%}
  base: "/static/",
  server: {
    host: "localhost",
    port: 3000,
    open: false,
    watch: { usePolling: true, disableGlobbing: false },
  },

  resolve: { extensions: [".js", ".json"] },
  build: {
    sourcemap: false,
    outDir: resolve("./static/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve("./static/src/js/main.js"),
        global: resolve("./static/src/js/utils/GLOBAL.js"),
        index: resolve("./static/src/index.js"),
      },
      output: {
        chunkFileNames: null,
      },
    },
  },
});

/* 

const config = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
  ],
}

*/

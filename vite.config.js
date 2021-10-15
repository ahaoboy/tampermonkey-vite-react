// const path = require('path');
// const { defineConfig } = require('vite');
// const styleImport = require('vite-plugin-style-import');
// const reqUMDInject = require('./plugins/require-umd-inject');

// // https://vitejs.dev/config/
// module.exports = defineConfig({
//   plugins: [
//     styleImport.default({
//       libs: [
//         {
//           libraryName: 'zent',
//           esModule: true,
//           resolveStyle: name => {
//             return `zent/css/${name}.css`;
//           },
//         },
//       ],
//     }),
//     reqUMDInject(),
//   ],
//   resolve: {
//     alias: [
//       {
//         find: '@',
//         replacement: path.resolve(__dirname, 'src'),
//       },
//     ],
//     // or here
//   },
//   server: {
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost',
//     },
//   },
//   build: {
//     write: false,
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         format: 'iife',
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";

// import path from "path";
// import styleImport from "vite-plugin-style-import";
// import reqUMDInject from "./plugins/require-umd-inject";
const path = require("path");
const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
// https://vitejs.dev/config/
// export default defineConfig({
module.exports = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      // "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  build: {
    write: true,
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
});

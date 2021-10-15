const path = require('path');
const { defineConfig } = require('vite');
const styleImport = require('vite-plugin-style-import');
const reqUMDInject = require('./plugins/require-umd-inject');
const vue =  require('@vitejs/plugin-vue')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    vue(),
    styleImport.default({
      libs: [
        {
          libraryName: 'zent',
          esModule: true,
          resolveStyle: name => {
            return `zent/css/${name}.css`;
          },
        },
      ],
    }),
    reqUMDInject(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src-vue'),
      },
    ],
    // or here
  },
  // server: {
  //   hmr: {
  //     protocol: 'ws',
  //     host: 'localhost',
  //   },
  // },
  build: {
    write: false,
    rollupOptions: {
      // external: ['react', 'react-dom'],
      output: {
        format: 'iife',
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
      },
    },
  },
});

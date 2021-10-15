const vite = require('vite');
const fse = require('fs-extra');
const path = require('path');

const viteConf = require('../vite.config');
const usPrefixGenerate = require('./prefix-mix');
const conf = require('../config/tamper');

const distPath = path.resolve(__dirname, '../dist');

fse.ensureDirSync(distPath);

vite.build(viteConf).then(({ output }) => {
  for (const file of output) {
    if (file.fileName.includes('js')) {
      const prefix = usPrefixGenerate();

      fse.writeFileSync(path.join(distPath, conf.name + '.user.js'), prefix + file.code);
      break;
    }
  }
});

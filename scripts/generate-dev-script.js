const clipboardy = require('clipboardy');
const usPrefixGenerate = require('./prefix-mix');
const config = require('../config/tamper');

const generateDevScript = () => {
  const str = `
(() => {
    unsafeWindow.React = React;
    unsafeWindow.ReactDOM = ReactDOM;
    // inject grant
    ${config.grant.map(i => `  unsafeWindow.${i} = ${i};`).join('\n')}
    const injectScript = (url) => {
      var xxx = document.createElement('script');
      xxx.type = 'module';
      xxx.src = url;
      document.body.append(xxx);
    }
    injectScript('http://localhost:3000/src/main.ts');
    injectScript('http://localhost:3000/@vite/client');
})()`;

  const prefix = usPrefixGenerate();
  const s = prefix + str;
  clipboardy.writeSync(s);
  console.log();
  console.log('generate inject script success!');
  console.log('copied to clipboard, now you can go to tampermonkey and paste it')
};

generateDevScript();

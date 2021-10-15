const config = require('../config/tamper');

const prefixGenerate = () => {
  const str = `
// ==UserScript==
${prefixGee()}
// ==/UserScript==
`;
  return str;
};

const prefixGee = () => {
  return Object.keys(config)
    .map(key => {
      const item = config[key];
      if (Array.isArray(item)) return item.map(v => `// @${key}`.padEnd(17) + v).join('\n');
      return `// @${key}`.padEnd(17) + item;
    })
    .join('\n');
};

module.exports = prefixGenerate;

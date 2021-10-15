const config = require('../config/tamper');

const generateScript = () => {
  return config.require?.map(v => `<script src="${v}"></script>`).join('\n') ?? '';
};

const htmlPlugin = () => {
  return {
    name: 'html-require-inject',
    transformIndexHtml(html) {
      return html.replace(/<script class="inject-block"><\/script>/, generateScript());
    },
  };
};

module.exports = htmlPlugin;

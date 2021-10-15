const config = {
  name: 'tv-demo',
  version: '0.3.1',
  description: 'hello world!',
  author: 'flasco',
  grant: ['GM_xmlhttpRequest', 'GM_setValue', 'GM_getValue', 'unsafeWindow'],
  match: ['*'],
  include: ['*'],
  require: [
    'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
  ],
};

module.exports = config;

import ReactDOM from 'react-dom';

import App from './index';
import { inject } from './utils/dom-inject';
console.log('-====111122222222')
inject(
  () => {
    console.log('-====1111')
    const group = document.querySelector('body');
    if (group == null) return null;

    const ct = document.createElement('div');
    ct.id = 'react'
    group.append(ct);
    return ct;
  },
  el => {
    console.log('-====11133331')
    ReactDOM.render(React.createElement(App), el);
  }
);

import ReactDOM from 'react-dom';

import App from './index';
import { inject } from './utils/dom-inject';

inject(
  () => {
    const group = document.querySelector('body');
    if (group == null) return null;

    const ct = document.createElement('div');
    group.append(ct);
    return ct;
  },
  el => {
    ReactDOM.render(React.createElement(App), el);
  }
);

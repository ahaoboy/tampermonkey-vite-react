import ReactDOM from 'react-dom';
import React from 'react'
import App from './index';
import { inject } from './utils/dom-inject';
import styles from './style.module.scss';

inject(
  () => {
    const group = document.querySelector('body');
    if (group == null) return null;
    const ct = document.createElement('div');
    ct.id = 'react';
    console.error('react', styles.react);
    ct.classList.add(styles.react)
    group.append(ct);
    return ct;
  },
  el => {
    ReactDOM.render(React.createElement(App), el);
  }
);

import { createApp } from "vue";
import App from "./index";
import { inject } from "./utils/dom-inject";
import styles from './style.module.scss';

console.log('app', App, styles)
inject(
  () => {
    const group = document.querySelector("body");
    if (group == null) return null;

    const ct = document.createElement("div");
    ct.id = 'vue'
    ct.classList.add(styles.app)
    group.append(ct);
    return ct;
  },
  (el) => {
    const app = createApp(App);
    app.mount(el);
  }
);

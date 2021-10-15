import { createApp } from "vue";
import App from "./App.vue";
import styles from "./main.scss";

import { sample } from "lodash-es";
console.log("styles222233333", styles, App);

window.addEventListener("load", () => {
  console.log(sample([1, 2, 3]));
  const div = document.createElement("div");
  div.id = "vue";
  document.body.appendChild(div);
  console.log("styles2222", styles, div);
  createApp(App).mount(div);
});

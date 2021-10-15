import { createApp } from "vue";
import App from "./App.vue";

import { sample } from "lodash-es";

window.addEventListener("load", () => {
  console.error("===111 load");
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "vue";
  createApp(App).mount(div);
  console.log(sample([1, 2, 3]));
});

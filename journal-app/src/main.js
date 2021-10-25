import { createApp } from "vue";
import App from "./App.vue";

// Styles
import "./styles/main.scss";

// FontAwesome
import { default as FontAwesomeIcon } from '@/plugins/FontAwesome'

import router from "./router";
import store from "./store";

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

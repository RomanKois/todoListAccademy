import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "../src/store"

const app = createApp(App)
  .use(store)
  .mount("#app")



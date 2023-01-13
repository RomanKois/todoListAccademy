import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import w from "./plugins/w/w";
import mocks from "./plugins/w/moxios";
import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      items: [],
      text: "",
      buttonName: "See History",
      visibility: true,
    };
  },
  mutations: {
    getLength(state) {
      state.count = state.items.length;
    },
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    changeText(state, text) {
      state.text = text;
    },
    appendToList(state) {
      state.items.push(state.text);
      state.text = "";
    },
    seeRemoved(state) {
      if (state.visibility) {
        state.visibility = false;
        state.buttonName = "See toDo";
      } else {
        state.visibility = true;
        state.buttonName = "See Removed";
      }
    },
    getItems(state, temp){
        state.items = temp.data;
    },
    change(state, changeText){
        let index = state.items.indexOf(changeText[0])
        state.items[index] = changeText[1]
    }
  },
  actions: {
    async get(state) {
      let temp = await axios.get("./public/mock/mocks/api/items/1.json");
      this.commit('getItems', temp)
    },
    async post(state) {
      axios.post(
        "./public/mock/mocks/api/items/1.json",
        JSON.stringify(state.items)
      );
    },
  },
});

const app = createApp(App)
  .use(store)
  .use(w)
  .mount("#app")
  .use(mocks, {
    routes: {
      "GET comments/project/(id)": true,
      "GET api/items/(id)": true,
      "POST api/items/(id)": true,
    },
  });
// app.use(store)

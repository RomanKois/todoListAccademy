import { remove } from "@vue/shared";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      items: [],
      deleted: [],
      array: [],
      text: "",
      buttonName: "See History",
      visibility: true,
    };
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getArray: (state) => {
      return state.array;
    },
    getVisibility: (state) => {
      return state.visibility;
    },
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
        state.array = state.deleted;
        state.buttonName = "See toDo";
      } else {
        state.visibility = true;
        state.array = state.items;
        state.buttonName = "See Removed";
      }
    },
    getItems(state) {
      let temp = JSON.parse(localStorage.getItem("items"));
      if (!temp) {
        temp = [];
      }

      state.items = temp;

      let tempD = JSON.parse(localStorage.getItem("deleted"));
      if (!tempD) {
        tempD = [];
      }

      state.deleted = tempD;
    },
    change(state, changeText) {
      if (state.array == state.items) {
        let index = state.items.indexOf(changeText[0]);
        state.items[index] = changeText[1];
        state.array = state.items;
      } else {
        let index = state.deleted.indexOf(changeText[0]);
        state.deleted[index] = changeText[1];
        state.array = state.deleted;
      }
    },
    postItems(state) {
      localStorage.setItem("items", JSON.stringify(state.items));
      console.log(state.items);
      localStorage.setItem("deleted", JSON.stringify(state.deleted));
    },
    remove(state, name) {
      let index = state.items.indexOf(name);
      if (index > -1) {
        let temp = state.items[index];
        state.items.splice(index, 1);
        state.deleted.push(temp);
      }
    },
    removeFromDelAddToItem(state, name) {
      let index = state.deleted.indexOf(name);
      if (index > -1) {
        let temp = state.deleted[index];
        state.deleted.splice(index, 1);
        state.items.push(temp);
      }
      state.count++;
    },
    init(state) {
      state.array = state.items;
    },
  },
  actions: {
    init(state) {
      this.commit("getItems");
      this.commit("getLength");
      this.commit("init");
    },
    async get(state) {
      this.commit("getItems");
    },
    async post(state) {
      this.commit("postItems");
    },
    add(state, text) {
      this.commit("changeText", text);
      this.commit("appendToList");
      this.commit("increment");
    },
    remove(state, name) {
      this.commit("remove", name);
      this.commit("postItems");
      this.commit("decrement");
    },
    addRemoved(state, name) {
      this.commit("removeFromDelAddToItem", name);
      this.commit("postItems");
    },
    changeName(state, names) {
      this.commit("change", names);
      this.commit("postItems");
    },
  },
});

export default store;

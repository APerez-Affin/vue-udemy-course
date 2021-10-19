import { createStore } from "vuex";

// Stores
import counterStore from "./counter";

export default createStore({
  modules: {
    counter: counterStore,
  },
});

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    users: [
      { id: 1, name: "赤石 悟", age: 35 },
      { id: 2, name: "井上 翠", age: 22 }
    ],
    nextID: 3
  },
  getters,
  mutations,
  actions
};

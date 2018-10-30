import * as types from "../mutationType";
import router from "../../router";

export default {
  addUser: ({ state, commit }, value) => {
    value.id = state.nextID;
    commit(types.addUser, value);
    router.push("/");
  },

  deleteUser: ({ state, commit }, id) => {
    const users = state.users.filter(user => {
      return user.id !== id;
    });
    commit(types.deleteUser, users);
  },

  updateUser: ({ state, commit }, value) => {
    commit(types.updateUser, value);
    router.push("/");
  }
};

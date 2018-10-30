import * as types from "../mutationType";

export default {
  [types.addUser](state, payload) {
    state.nextID++;
    state.users.push(payload);
  },
  [types.deleteUser](state, payload) {
    state.users = payload;
  },
  [types.updateUser](state, payload) {
    const pos = state.users
      .map(user => {
        return user.id;
      })
      .indexOf(payload.id);
    state.users[pos] = payload;
  }
};

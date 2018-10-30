export default {
  getUsers: state => {
    return state.users;
  },
  getUser: state => id => {
    const user = state.users.filter(user => {
      return user.id === Number(id);
    });
    return user[0];
  }
};

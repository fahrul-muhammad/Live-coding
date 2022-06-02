export const setUsers = (users) => {
  return {
    type: "GET_USERS_FULFFILLED",
    payload: users,
  };
};

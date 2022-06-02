const initialState = {
  users: [],
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_FULFFILLED":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userData;

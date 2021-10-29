import * as actions from "./actionsTypes";

const initialState = {
  isAuth: false,
  user: {
    userId: null,
    email: null,
    username: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        user: {
          userId: action.userId,
          email: action.email,
          username: action.username,
        },
      };
    }
    default:
      return state;
  }
};

export default rootReducer;

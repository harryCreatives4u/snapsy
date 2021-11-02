import * as actions from "./actionsTypes";

const initialState = {
  isAuth: false,
  user: {
    userId: null,
    email: null,
    username: null,
  },
  loading: false,
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
    case actions.START_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};

export default rootReducer;

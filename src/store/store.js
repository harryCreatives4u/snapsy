import * as actions from "./actionsTypes";

const initialState = {
  isAuth: false,
  user: {
    userId: null,
    email: null,
    actualName: null,
    username: null,
    userDP: null,
  },
  isNewUser: false,
  tempDetails: {
    userDetails: null,
    email: null,
    actualName: null,
  },
  loading: false,
  posts: [],
  users: [],
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
          actualName: action.actualName,
          username: action.username,
          userDP: action.userDP,
        },
        isNewUser: false,
        tempDetails: {
          userDetails: null,
          email: null,
          actualName: null,
        },
      };
    }
    case actions.STORE_TEMP_DETAILS: {
      return {
        ...state,
        tempDetails: {
          userId: action.userId,
          email: action.email,
          actualName: action.actualName,
        },

        isNewUser: true,
      };
    }
    case actions.START_LOADING: {
      return { ...state, loading: true };
    }
    case actions.STOP_LOADING: {
      return { ...state, loading: false };
    }
    case actions.SET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case actions.SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};

export default rootReducer;

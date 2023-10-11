import { LOGIN_USER, LOGOUT_USER } from "../actionTypes";

const initialState = {
  // usuario
  isLoggedIn: false,
  user: null,
  accessToken: null,
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        accessToken: action.accessToken,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducerUser;

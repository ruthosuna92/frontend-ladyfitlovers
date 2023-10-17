import { LOGIN_USER, LOGOUT_USER, SAVE_EMAIL } from "../actionTypes";

const initialState = {
  // usuario
  isLoggedIn: false,
  user: null,
  accessToken: null,
  email: "",
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
    case SAVE_EMAIL:
      console.log(action.payload);
      return {
        ...state,
        email: action.payload,
      }  
    default:
      return {
        ...state,
      };
  }
};

export default reducerUser;

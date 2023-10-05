import { LOGIN_USER, LOGOUT_USER, AUTH_USER, USER_BY_ID } from "../Actions/actionTypes";

const initialState = {
  // usuario
  isLoggedIn: false,
  userId: [],
  user: [],
  token: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("login");
      // console.log("Token:", action.payload.message);
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.id,
        token: action.payload.token,
      };

    case USER_BY_ID:
      console.log("User by ID:", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_USER:
      console.log("User authenticated with Google", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload,
      };
    case LOGOUT_USER:
      console.log("logout");
      return {
        ...state,
        isLoggedIn: false,
        user: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;

import { LOGOUT_USER } from "../actionTypes";

const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };
};

export default logoutUser;

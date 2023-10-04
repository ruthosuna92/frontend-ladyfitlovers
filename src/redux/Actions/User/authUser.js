import { AUTH_USER } from "../../actionTypes";
import axios from "axios";
const endpoint =
  "https://pf-back-production-4255.up.railway.app/user/loginGoogle";
const endpoint2 = "https://pf-back-production-4255.up.railway.app/user/";

const authUser = (profileObj, accessToken) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { profileObj, accessToken });
      const id = data.idUser;

      console.log(profileObj);
      console.log(accessToken);
      console.log(response.data);
      const response = await axios.get(endpoint2 + id);
      return dispatch({
        type: AUTH_USER,
        payload: response.data,
        idUser: response.data.id,
      });
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
};

export default authUser;

import { AUTH_USER } from "../actionTypes";
import axios from "axios";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
// const endpoint = `${API_URL_BASE}/`;
const endpoint = `${API_URL_BASE}/user/loginGoogle`;
const endpoint2 = `${API_URL_BASE}/user/`;

const authUser = (profileObj, accessToken) => {
  console.log(profileObj, accessToken);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { profileObj, accessToken });
      console.log(data.token)
      const id = data.idUser;
      const config = {
        headers: {
          authorization: `Bearer ${data.token}`
        }
      }
      const response = await axios.get(endpoint2 + id, config);

      return dispatch({
        type: AUTH_USER,
        payload: response.data,
        idUser: response.data.id,
        accessToken: data.token,
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

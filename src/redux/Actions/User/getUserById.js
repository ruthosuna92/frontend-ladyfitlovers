import axios from "axios";
import { USER_BY_ID } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/`;

const userById = (id, accessToken) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const response = await axios.get(endpoint + id, config);
      
      return dispatch({
        type: USER_BY_ID,
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

export default userById;

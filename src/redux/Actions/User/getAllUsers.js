import axios from "axios";
import { GET_ALL_USERS} from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/allUsers`;

const getAllUsers = (accessToken) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const response = await axios.get(endpoint, config);
      return dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
    
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

export default getAllUsers;

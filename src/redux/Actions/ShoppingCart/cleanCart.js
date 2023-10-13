import axios from "axios";
import { CLEAN_CART } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/cart/clean`;

const cleanCart = ({ userId, accessToken }) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.put(endpoint, { userId }, config);
      return dispatch({
        type: CLEAN_CART,
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

export default cleanCart;

// payload: response.data,
// idUser: response.data.id,

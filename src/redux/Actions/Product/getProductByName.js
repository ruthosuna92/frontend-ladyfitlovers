import axios from "axios";
import { GET_PRODUCT_BY_NAME } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/product/name?name=`;

const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      // const response = await axios.get(`${endpoint}?name=${name}`);
      // const response = await axios.get(`${endpoint}?name_like=${name}`);
      const response = await axios.get(endpoint + name);
      dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: response.data,
      });
      //   console.log(response.data);
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

export default getProductByName;

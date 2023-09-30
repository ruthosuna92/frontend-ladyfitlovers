import axios from "axios";
import { GET_PRODUCT_BY_NAME } from "../actionTypes";

const endpoint =
  "https://pf-back-production-4255.up.railway.app/product/allProducts";

const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      // const response = await axios.get(`${endpoint}?name=${name}`);
      const response = await axios.get(`${endpoint}?name_like=${name}`);
      //   const response = await axios.get(endpoint);
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

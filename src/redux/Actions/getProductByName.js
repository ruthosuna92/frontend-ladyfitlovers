import axios from "axios";
import { GET_PRODUCT_BY_NAME } from "../actionTypes";

const endpoint = "https://pf-back-production-4255.up.railway.app/product/";

const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      // const response = await axios.get(`${endpoint}?name=${name}`);
      const response = await axios.get(`${endpoint}?name_like=${name}`);
      dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: response.data, // Assuming the response contains the filtered products
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error filtering products by name:", error);
    }
  };
};

export default getProductByName;

import axios from "axios";
import { GET_ALL_PRODUCTS } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/product/allProducts`;

const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getAllProducts;

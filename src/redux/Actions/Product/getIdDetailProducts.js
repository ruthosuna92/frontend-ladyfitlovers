import axios from "axios";
import { GET_ID_DETAIL_PRODUCTS } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/product/`;

const getIdDetailProducts = (id) => {
  return async (dispatch) => {
    try {
      if (id === "none") {
        return dispatch({
          type: GET_ID_DETAIL_PRODUCTS,
          payload: null,
        });
      } else {
        const { data } = await axios(endpoint + id);
        return dispatch({
          type: GET_ID_DETAIL_PRODUCTS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default getIdDetailProducts;

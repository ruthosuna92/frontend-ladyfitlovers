import axios from "axios";
import { GET_ORDERS } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/order/allOrders`;

const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ORDERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getAllOrders;

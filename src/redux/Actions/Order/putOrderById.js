import axios from "axios";
import { PUT_ORDER } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/order/update`;

const putOrderById = (order, status, accessToken) => {
  return async (dispatch) => {

    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const { data } = await axios.put(endpoint, {id: order.id,status: status} , config);
      
    } catch (error) {
      console.log(error);
    }
  };
};

export default putOrderById;

import axios from "axios";
import { GET_ORDERID } from "../actionTypes";
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/order/user/`;
const getOrdersByUser = (idUser) => {
    return async (dispatch) => {
        try {
            const userId = idUser;
            const { data } = await axios.get(endpoint + userId);
            console.log(data);
            return dispatch({
                type: GET_ORDERID,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export default getOrdersByUser
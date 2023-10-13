import axios from "axios";
import { GET_ORDERID } from "../actionTypes";
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/order/user/`;
const getOrdersByUser = (idUser, accessToken) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                  authorization: `Bearer ${accessToken}`
                }
            }
            const userId = idUser;
            const { data } = await axios.get(endpoint + userId, config);
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
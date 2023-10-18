import axios from "axios";
import { GET_FAVORITES_BY_ID_USER } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/favorite/`;

const getFavoritesByIdUser = (id) => {
    // console.log("llegue");
    // console.log(id);
    return async(dispatch) => {
        try {
            const {data} = await axios.get(`${endpoint}${id}`)
            console.log("fovoritos del usuario",{data});
            return dispatch({
                type: GET_FAVORITES_BY_ID_USER,
                payload: data
            })
        } catch (error) {
            
        }
    }

}

export default getFavoritesByIdUser

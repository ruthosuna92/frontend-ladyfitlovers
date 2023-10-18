import axios from "axios"
import { DELETE_FAV } from "../actionTypes";


const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE; 
const endpoint = `${API_URL_BASE}/favorite/remove`;



const deleteFav = (productId, userId, accessToken) => {

    return async(dispatch) => {
        try {
            const config = {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            }

            const {data} = await axios.put(endpoint, {productId, userId}, config)
            // console.log(data);
            return dispatch({
                type: DELETE_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default   deleteFav

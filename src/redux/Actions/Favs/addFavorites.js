import axios from "axios";
import { ADD_FAVS } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/favorite/add/`;

const addFavs = (productId, userId, accessToken)=> {

    console.log("user", userId);
 console.log(productId, "productId")

    return async(dispatch) => {

    try {
        const config = {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }
        const {data} = await axios.post(endpoint, {productId, userId}, config)
        console.log(data);
            return dispatch({
                type: ADD_FAVS,
                payload: data
            })
        } catch (error) {
    
        }
    }

}

export default addFavs
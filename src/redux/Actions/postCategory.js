import axios from "axios"
import { POST_CATEGORY } from "../actionTypes"

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE
const endpoint = `${API_URL_BASE}/product/category`

const postCategory = (category) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, category)
           
            return dispatch({
                type: POST_CATEGORY,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export default postCategory
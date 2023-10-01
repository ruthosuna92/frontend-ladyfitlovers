import axios from "axios"
import { POST_CATEGORY } from "../actionTypes"
const endpoint = " https://pf-back-production-4255.up.railway.app/product/category"

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
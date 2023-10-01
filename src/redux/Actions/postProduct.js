import axios from "axios"
import { POST_PRODUCT } from "../actionTypes"
const endpoint = "https://pf-back-production-4255.up.railway.app/product/create"

const postProduct = (product) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, [product])
           
            return dispatch({
                type: POST_PRODUCT,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export default postProduct
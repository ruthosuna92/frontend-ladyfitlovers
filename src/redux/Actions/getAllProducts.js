import axios from "axios"
import { GET_ALL_PRODUCTS } from "../actionTypes"
const endpoint = 'https://pf-back-production-4255.up.railway.app/product'

const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint)
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export default getAllProducts
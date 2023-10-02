import axios from "axios"
import { GET_CATEGORIES } from "../actionTypes"
const endpoint = 'https://pf-back-production-4255.up.railway.app/product/allCategories'

const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint)
            return dispatch({
                type: GET_CATEGORIES,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export default getAllCategories
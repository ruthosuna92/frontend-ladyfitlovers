import axios from "axios"
import { GET_ID_DETAIL_PRODUCTS } from "../actionTypes"
const endpoint = 'https://pf-back-production-4255.up.railway.app/product/'

const getIdDetailProducts = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint+id)
            return dispatch({
                type: GET_ID_DETAIL_PRODUCTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export default getIdDetailProducts
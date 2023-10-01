import axios from "axios"
import { POST_PRODUCT } from "../actionTypes"
const endpoint = "https://pf-back-production-4255.up.railway.app/product/create"

const postProduct = (product) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, [product])
           
            return {message: 'Producto creado correctamente'}
        } catch (error) {
            return {message: 'Producto no pudo ser creado'}
        }

    }
}

export default postProduct
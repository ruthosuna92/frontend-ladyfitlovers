import { CLEAN_CART_REDUCER } from "../actionTypes"
const cleanCartReducer = () => {

    return {
        type: CLEAN_CART_REDUCER,
        payload: []
    }
}

export default cleanCartReducer
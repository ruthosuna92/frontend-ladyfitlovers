import { REMOVING_PRODUCT } from "../actionTypes"
const removingProduct = (index) => {
    return {
        type: REMOVING_PRODUCT,
        payload: index
    }
}

export default removingProduct
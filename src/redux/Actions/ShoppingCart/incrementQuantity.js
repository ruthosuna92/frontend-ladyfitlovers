import { INCREMENT_QUANTITY } from "../actionTypes";

const incrementQuantity = (index) => {

    return {
        type: INCREMENT_QUANTITY,
        payload: index
    }
}

export default incrementQuantity
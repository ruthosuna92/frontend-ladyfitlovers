import { INCREMENT_QUANTITY } from "../actionTypes";

const incrementQuantity = (index, top) => {

    return {
        type: INCREMENT_QUANTITY,
        payload: {index, top}
    }
}

export default incrementQuantity
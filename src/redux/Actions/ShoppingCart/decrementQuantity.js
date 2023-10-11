import { DECREMENT_QUANTITY } from "../actionTypes"

const decrementQuantity = (index) => {

    return {
        type: DECREMENT_QUANTITY,
        payload: index
    }
}

export default decrementQuantity
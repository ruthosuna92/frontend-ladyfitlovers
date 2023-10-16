import { SHIPPING_COST } from "../actionTypes";

const shippingCost = (amount) => {
    return {
        type: SHIPPING_COST,
        payload: amount
    }

}

export default shippingCost
import { SHIPPING_TYPE } from "../actionTypes";

const shippingType = (type) => {
    return {
        type: SHIPPING_TYPE,
        payload: type
    }
}

export default shippingType
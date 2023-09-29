import { GET_ALL_PRODUCTS, GET_ID_DETAIL_PRODUCTS } from "../actionTypes";

const initialState = {
    allProducts: null,
    products: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        case GET_ID_DETAIL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
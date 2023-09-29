import { GET_ALL_PRODUCTS } from "../actionTypes";

const initialState = {
    allProducts: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default reducer
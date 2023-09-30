import { FILT_BY_CATEGORY, GET_ALL_PRODUCTS, GET_ID_DETAIL_PRODUCTS } from "../actionTypes";

const initialState = {
    allProducts: null,
    saveProducts: null,
    products: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                saveProducts: action.payload
            }
        case GET_ID_DETAIL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILT_BY_CATEGORY:
            return {
                ...state,
                allProducts:  action.payload === "T" ? state.saveProducts :  state.saveProducts.filter(product => product.Category.name === action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
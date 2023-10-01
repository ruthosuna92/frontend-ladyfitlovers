import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS, SET_PAGE, PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_NAME, GET_CATEGORIES, POST_CATEGORY,
} from "../actionTypes";

const initialState = {
  allProducts: [],
  productDetail: null,
  //   filteredProducts: null,
    currentPage: 1,
    productsPerPage: [],
    totalButtons: null,
    quantity: 8,
    allCategories: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                productsPerPage: action.payload.slice(0, 8),
                totalButtons: Math.ceil(action.payload.length / state.quantity)
            }
        case GET_ID_DETAIL_PRODUCTS:
            return {
                ...state,
                productDetail: action.payload
            }
            case GET_PRODUCT_BY_NAME:
              return {
                ...state,
                allProducts: action.payload,
              };
            // case CLEAN:
    //   return {
    //     allProducts: null,
    //     products: null,
    //     //   filteredProducts: null,
    //   };
    case SET_PAGE:
            const startIndex = (action.payload - 1) * state.quantity
            const endIndex = startIndex + state.quantity
            const slice = state.allProducts.slice(startIndex, endIndex)
            return {
                ...state,
                currentPage: action.payload,
                productsPerPage: slice
            }
        case PRODUCTS_PER_PAGE:
            return {
                ...state,
                productsPerPage: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload
            }
            case POST_CATEGORY:
                return {
                    ...state,
                    allCategories: [...state.allCategories, action.payload],
                };
        default:
            return {
                ...state
            }
    }
}

export default reducer;

//  console.log(filteredProducts)

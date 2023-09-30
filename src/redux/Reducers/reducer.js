import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  FILT_BY_CATEGORY,
} from "../actionTypes";

const initialState = {
  allProducts: null,
  productDetail: null,
  allProducts: null,
  saveProducts: null,
    
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        saveProducts: action.payload
      };
    case GET_ID_DETAIL_PRODUCTS:
      return {
        ...state,
        productDetail: action.payload,
      };
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
    case FILT_BY_CATEGORY:
      return {
          ...state,
          allProducts:  action.payload === "T" ? state.saveProducts :  state.saveProducts.filter(product => product.Category.name === action.payload)
      }
    default:
      console.log(state);
      return {
        ...state,
      };
  }
};

export default reducer;

//  console.log(filteredProducts)

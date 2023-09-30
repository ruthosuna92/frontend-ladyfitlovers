import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
} from "../actionTypes";

const initialState = {
  allProducts: null,
  productDetail: null,
  //   filteredProducts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
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
    default:
      console.log(state);
      return {
        ...state,
      };
  }
};

export default reducer;

//  console.log(filteredProducts)

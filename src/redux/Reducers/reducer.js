import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
} from "../actionTypes";

const initialState = {
  allProducts: null,
  products: null,
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
        products: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      // busqueda parcial
      const { name } = action.payload;
      const filteredProducts = state.allProducts.filter((product) =>
        product.name.includes(name)
      );
      return {
        ...state,
        products: filteredProducts,
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

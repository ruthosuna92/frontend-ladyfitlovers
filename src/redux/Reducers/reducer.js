
import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  FILT_BY_CATEGORY,
  FILT_BY_COLOR,
  FILT_BY_SIZE,
} from "../actionTypes";

const initialState = {
  allProducts: null,
  productDetail: null,
  saveProducts: null,
  savePivot: [],
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
        allProducts: action.payload === "T" ? state.saveProducts : state.saveProducts.filter(product => product.Category.name === action.payload),

        savePivot: state.saveProducts.filter(product => product.Category.name === action.payload)
      }
    case FILT_BY_COLOR:
      let filteredProducts;
      let filteredColor;

      if (action.payload === "C") {
        filteredProducts = state.saveProducts;
      } else {
        filteredProducts = state.savePivot.length > 0 ? state.savePivot.filter((product) =>
        product.stock.some((stockItem) => stockItem.color === action.payload)) : state.saveProducts.filter((product) =>
          product.stock.some((stockItem) => stockItem.color === action.payload)
        );
        filteredColor =  state.savePivot.length > 0 ? state.savePivot.filter((product) =>
        product.stock.some((stockItem) => stockItem.color === action.payload)) : state.saveProducts.filter((product) =>
          product.stock.some((stockItem) => stockItem.color === action.payload))
      }
      return {
        ...state,
        allProducts: filteredProducts,
        savePivot: filteredColor
      };
    case FILT_BY_SIZE:
      let filteredSize;
      console.log(action.payload)
      if (action.payload === "TA") {
        filteredSize = state.savePivot.length > 0 ? state.savePivot : state.saveProducts;
      } else {
        filteredSize = state.allProducts.filter((product) =>
          product.stock.some((stockItem) =>
            stockItem.sizeAndQuantity.some(
              (sizeItem) => sizeItem.size === action.payload)))
      }
      return {
        ...state,
        allProducts: filteredSize,
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

//  console.log(filteredProducts)

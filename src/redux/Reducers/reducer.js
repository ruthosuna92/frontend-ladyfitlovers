import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  SET_PAGE,
  PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_NAME,
  FILT_BY_CATEGORY,
  FILT_BY_COLOR,
  FILT_BY_SIZE,
  GET_CATEGORIES,
  POST_CATEGORY,
  SET_NAME,
  LOGIN_USER,
  LOGOUT_USER,
  USER_BY_ID,
  SAVE_FILTERS,
  AUTH_USER,
  ADDING_PRODUCT,
  GET_ALL_USERS,
} from "../Actions/actionTypes";

const initialState = {
  allProducts: [],
  allUsers: [],
  productDetail: null,
  //   filteredProducts: null,
  saveProducts: [],
  currentPage: 1,
  productsPerPage: [],
  totalButtons: null,
  quantity: 8,
  savePivot: [],
  allCategories: null,
  name: null,
  // usuario
  isLoggedIn: false,
  userId: [],
  user: [],
  token: [],
  saveFilters: {
    category: [],
    color: [],
    selectCategory: "",
    selectColor: "",
    selectSize: "",
  },
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        saveProducts: action.payload,
        allProducts: action.payload,
        productsPerPage: action.payload.slice(0, 4),
        totalButtons: Math.ceil(action.payload.length / state.quantity),
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
    case SET_PAGE:
      const startIndex = (action.payload - 1) * state.quantity;
      const endIndex = startIndex + state.quantity;
      const slice = state.allProducts.slice(startIndex, endIndex);
      return {
        ...state,
        currentPage: action.payload,
        productsPerPage: slice,
        totalButtons: Math.ceil(state.allProducts.length / state.quantity),
      };
    case PRODUCTS_PER_PAGE:
      return {
        ...state,
        productsPerPage: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: !state.name ? action.payload : action.payload,
      };
    case FILT_BY_CATEGORY:
      return {
        ...state,
        allProducts:
          action.payload === "T"
            ? state.saveProducts
            : state.saveProducts.filter(
                (product) => product.Category.name === action.payload
              ),

        savePivot: state.saveProducts.filter(
          (product) => product.Category.name === action.payload
        ),
      };
    case FILT_BY_COLOR:
      let filteredProducts;
      let filteredColor;

      if (action.payload === "C") {
        filteredProducts = state.saveProducts;
      } else {
        filteredProducts =
          state.savePivot.length > 0
            ? state.savePivot.filter((product) =>
                product.stock.some(
                  (stockItem) => stockItem.color === action.payload
                )
              )
            : state.saveProducts.filter((product) =>
                product.stock.some(
                  (stockItem) => stockItem.color === action.payload
                )
              );
        filteredColor =
          state.savePivot.length > 0
            ? state.savePivot.filter((product) =>
                product.stock.some(
                  (stockItem) => stockItem.color === action.payload
                )
              )
            : state.saveProducts.filter((product) =>
                product.stock.some(
                  (stockItem) => stockItem.color === action.payload
                )
              );
      }
      return {
        ...state,
        allProducts: filteredProducts,
        savePivot: filteredColor,
      };
    case FILT_BY_SIZE:
      let filteredSize;

      if (action.payload === "TA") {
        filteredSize =
          state.savePivot.length > 0 ? state.savePivot : state.saveProducts;
      } else {
        filteredSize = state.allProducts.filter((product) =>
          product.stock.some((stockItem) =>
            stockItem.sizeAndQuantity.some(
              (sizeItem) => sizeItem.size === action.payload && sizeItem.quantity > 0)))
      }
      return {
        ...state,
        allProducts: filteredSize,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case POST_CATEGORY:
      return {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      };
      case LOGIN_USER:
  
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.id,
        token: action.payload.token,
      };

    case USER_BY_ID:
      console.log("User by ID:", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_USER:
      console.log("User authenticated with Google", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload,
      };
    case LOGOUT_USER:
      console.log("logout");
      return {
        ...state,
        isLoggedIn: false,
        user: [],
      };
    case SAVE_FILTERS:
      let newSaveFilters = { ...state.saveFilters };

      if (
        state.saveFilters.category.length < action.payload.category.length ||
        state.saveFilters.color.length < action.payload.color.length
      ) {
        newSaveFilters = action.payload;
      } else if (
        action.payload.selectCategory ||
        action.payload.selectColor ||
        action.payload.selectSize
      ) {
        newSaveFilters = {
          ...newSaveFilters,
          selectCategory: action.payload.selectCategory,
          selectColor: action.payload.selectColor,
          selectSize: action.payload.selectSize,
        };
      }

      return {
        ...state,
        saveFilters: newSaveFilters,
      };
      case ADDING_PRODUCT:
        console.log(action.payload);
      const productDontMatch = state.cart.filter((prod) => {
        return prod.name !== action.payload.name || prod.color !== action.payload.color || prod.size !== action.payload.size})
        console.log(productDontMatch);
        if(productDontMatch.length){
          return {
            ...state,
            cart: [...state.cart, action.payload]
          }
        } 
        else {
          const productFound = state.cart.find((prod) => {
            console.log(prod);
            return prod.name === action.payload.name})
          console.log(action.payload);
          console.log(productFound);
          console.log(state.cart);
          //productFound.quantity += action.payload.quantity
          return {
            ...state,
            cart: [...state.cart]
          }
        }
      case GET_ALL_USERS:
        return {
          ...state,
          allUsers: action.payload,

        };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

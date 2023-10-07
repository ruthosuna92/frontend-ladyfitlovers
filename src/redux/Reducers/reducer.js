import {
  //users
  LOGIN_USER,
  LOGOUT_USER,
  USER_BY_ID,
  AUTH_USER,
  GET_ALL_USERS,
  //products
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS,
  SET_PAGE,
  PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_NAME,
  SET_NAME,
  //filter
  FILT_BY_CATEGORY,
  FILT_BY_COLOR,
  FILT_BY_SIZE,
  SAVE_FILTERS,
  //category
  GET_CATEGORIES,
  POST_CATEGORY,
  //cart
  ADDING_PRODUCT,
  CLEAN_CART,
  GET_CART,
  //favorites
  //purchase
  DECREMENT_QUANTITY
} from "../Actions/actionTypes";

const initialState = {
  //products
  allProducts: [],
  allUsers: [],
  productDetail: null,
  saveProducts: [],
  currentPage: 1,
  productsPerPage: [],
  totalButtons: null,
  quantity: 8,
  savePivot: [],
  allCategories: null,
  name: null,
  // user
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
  //cart
  cart: [],
  //favorites
  //purchase
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        saveProducts: action.payload,
        allProducts: action.payload,
        productsPerPage: action.payload.slice(0, state.quantity),
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
        allProducts: state.name.length <2 ? state.saveProducts : action.payload,
      };
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
          action.payload === "TA"
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

      if (action.payload === "") {
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

      if (action.payload === "") {
        filteredSize =
          state.savePivot.length > 0 ? state.savePivot : state.saveProducts;
      } else {
        filteredSize = state.allProducts.filter((product) =>
          product.stock.some((stockItem) =>
            stockItem.sizeAndQuantity.some(
              (sizeItem) =>
                sizeItem.size === action.payload && sizeItem.quantity > 0
            )
          )
        );
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
        if (!state.cart.length) {
          console.log("no hay nada, guardo por primera vez");
          return {
            ...state,
            cart: [action.payload],
          };
        } else {
          console.log(action.payload);
          let productDontMatch = [];
          //console.log(productDontMatch);
          productDontMatch = state.cart.filter(
            (prod) =>
              prod.name !== action.payload.name ||
              prod.color !== action.payload.color ||
              prod.size !== action.payload.size
          );
          //console.log(productDontMatch);
          if (
            productDontMatch.length &&
            productDontMatch.length === state.cart.length
          ) {
            productDontMatch = [];
            //console.log(productDontMatch)
            console.log("es diferente, agrego como otro producto");
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          } else {
            console.log(action.payload);
            let productDontMatch = []
            //console.log(productDontMatch);
            productDontMatch = state.cart.filter((prod) => prod.name !== action.payload.name || prod.color !== action.payload.color || prod.size !== action.payload.size)
              //console.log(productDontMatch);
              if(productDontMatch.length && productDontMatch.length === state.cart.length){
                productDontMatch = []
                //console.log(productDontMatch)
                console.log('es diferente, agrego como otro producto')
                return {
                  ...state,
                  cart: [...state.cart, action.payload]
                }
              } 
              else {
                console.log('ya existe el producto, lo encuentro y le sumo la cantidad');
                let productFound = state.cart.find((prod) => prod.name === action.payload.name && prod.color === action.payload.color && prod.size === action.payload.size)
                productFound.quantity += action.payload.quantity
                productFound.price = action.payload.price + productFound.price
                return {
                  ...state,
                  cart: [...state.cart]
                }
              }
  
          }
        }
        case DECREMENT_QUANTITY: 
        console.log(action.payload);
        let product = state.cart[action.payload]
        if(product.quantity > 1){
          console.log('la cantidad es mayor que 1, disminuyo 1');
          product.price = product.price - (product.price / product.quantity)
          product.quantity = product.quantity - 1
          return {
            ...state,
            cart: [...state.cart]
          }
        } else {
          console.log('no se cumple la primera condición, elimino el producto');
          let product = state.cart[action.payload]
          console.log(product);
          return {
            ...state,
            cart: state.cart.filter((prod) => prod !== product)
            //&& prod.color !== product.color && prod.size !== product.size)
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

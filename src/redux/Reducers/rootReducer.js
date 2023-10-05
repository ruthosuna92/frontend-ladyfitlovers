import { combineReducers } from "redux";

//importamos los reducers de los modelos/tablas que tenemos en el back
import userReducer from "../Reducers/userReducer";
import categoryReducer from "../Reducers/categoryReducer";
import productReducer from "../Reducers/productReducer";
//aca importamos los sub-reducers y los combinamos con combineReducers

// recuerden colocar las llaves al importar sub reducers
const combinedReducers = combineReducers({
  userReducer,
  categoryReducer,
  productReducer,
});
//exportamos una constante con el resultado
const rootReducer = combinedReducers;
//exportamos el root reducer
export default rootReducer;

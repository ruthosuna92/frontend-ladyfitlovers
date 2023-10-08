// import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./Reducers/reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

// const store = createStore(
//   reducer,
//   composeEnhacer(applyMiddleware(thunkMiddleware))
// ); // Esta linea nos permite hacer peticiones a un servidor

// // hello!
// export default store;




import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./Reducers/reducer";
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from '../utils/localStorage';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
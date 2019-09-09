import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import modalReducer from "./reducers/modalReducer";
import seoReducer from "./reducers/seoReducer";
import snackbarReducer from "./reducers/snackbarReducer";

const windowGlobal = typeof window !== `undefined` && window;
const reduxDevTools = windowGlobal
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : false;

export const store = createStore(
  combineReducers({
    modalReducer,
    seoReducer,
    snackbarReducer
  })
  //reduxDevTools
);

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}>{element}</Provider>;

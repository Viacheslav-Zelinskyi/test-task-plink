import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import selectedProduct from "./reducers/selectedProduct";

const rootReducers = combineReducers({
  user: user,
  selectedProduct: selectedProduct,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;

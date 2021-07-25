import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const selectProduct = createAction("SELECT_PRODUCT");

export default createReducer(initialState, {
  [selectProduct]: function (state, action) {
    if (action.payload) {
      state.product = action.payload.product;
      state.sku = action.payload.sku;
      state.ram = action.payload.ram;
      state.hdd = action.payload.hdd;
      state.price = action.payload.price;
    }
  },
});

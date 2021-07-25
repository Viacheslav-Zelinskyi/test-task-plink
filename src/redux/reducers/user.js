import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const selectUser = createAction("SELECT_USER");

export default createReducer(initialState, {
  [selectUser]: function (state, action) {
    if (action.payload) {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.address = action.payload.address;
    }
  },
});

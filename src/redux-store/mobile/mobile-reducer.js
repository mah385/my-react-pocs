import { createSlice } from "@reduxjs/toolkit";

import { mobileList } from "./mobile-data.js";

const initialState = {
  updatedMobile: {},
  mobileList: mobileList,
};

const mobileSlice = createSlice({
  name: "useMobileReducer",
  initialState: initialState,
  reducers: {
    addNewMobile: (state, action) => {
      state.mobileList.push(action.payload.newMobile);
    },
    deleteMobile: (state, action) => {
      state.mobileList = state.mobileList.filter((mobile) => {
        return mobile.id !== action.payload.mobileId;
      });
    },
    loadMobile: (state, action) => {
      state.updatedMobile = action.payload.mobileToBeUpdated;
    },
    resetMobile: (state) => {
      state.updatedMobile = {};
    },
    updateMobile: (state, action) => {
      const foundIndex = state.mobileList.findIndex((mobile) => {
        return mobile.id === action.payload.updatedMobile.id;
      });
      state.mobileList[foundIndex] = action.payload.updatedMobile;
    },
  },
});

export const mobileAction = mobileSlice.actions;

export default mobileSlice;

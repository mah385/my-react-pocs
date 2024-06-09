import { createSlice } from "@reduxjs/toolkit";

import { bikeList } from "./bike-data.js";

const initialState = {
  updatedBike: {},
  bikeList: bikeList,
};

const bikeSlice = createSlice({
  name: "useBikeReducer",
  initialState: initialState,
  reducers: {
    addNewBike: (state, action) => {
      state.bikeList.push(action.payload.newBike);
    },
    deleteBike: (state, action) => {
      state.bikeList = state.bikeList.filter((bike) => {
        return bike.id !== action.payload.bikeId;
      });
    },
    loadBike: (state, action) => {
      state.updatedBike = action.payload.bikeToBeUpdated;
    },
    resetBike: (state) => {
      state.updatedBike = {};
    },
    updateBike: (state, action) => {
      const foundIndex = state.bikeList.findIndex((bike) => {
        return bike.id === action.payload.updatedBike.id;
      });
      state.bikeList[foundIndex] = action.payload.updatedBike;
    },
  },
});

export const bikeAction = bikeSlice.actions;

export default bikeSlice;

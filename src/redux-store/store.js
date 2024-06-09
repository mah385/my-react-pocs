import { configureStore } from "@reduxjs/toolkit";

import bikeSlice from "./bike/bike-reducer.js";
import mobileSlice from "./mobile/mobile-reducer.js";

const store = configureStore({
  reducer: {
    [bikeSlice.name]: bikeSlice.reducer,
    [mobileSlice.name]: mobileSlice.reducer,
  },
});

export default store;

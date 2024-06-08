import bikeReducer from "./bike/bike-reducer.js";
import mobileReducer from "./mobile/mobile-reducer.js";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  useBikeReducer: bikeReducer,
  useMobileReducer: mobileReducer,
});

const store = createStore(rootReducer);

export default store;

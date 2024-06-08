import { bikeList } from "./bike-data.js";
import * as bikeActionType from "./bike-action-type.js";

const initialState = {
  updatedBike: {},
  bikeList: bikeList,
};

const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case bikeActionType.ADD_NEW_BIKE: {
      return {
        ...state,
        bikeList: state.bikeList.concat(action.payload.newBike),
      };
    }
    case bikeActionType.DELETE_BIKE: {
      const bikeListFiltered = [...state.bikeList].filter((bike) => {
        return bike.id !== action.payload.bikeId;
      });
      return {
        ...state,
        bikeList: bikeListFiltered,
      };
    }
    case bikeActionType.LOAD_BIKE: {
      return {
        ...state,
        updatedBike: action.payload.bikeToBeUpdated,
      };
    }
    case bikeActionType.RESET_BIKE: {
      return {
        ...state,
        updatedBike: {},
      };
    }
    case bikeActionType.UPDATE_BIKE: {
      let bikeListTemp = [...state.bikeList];
      const foundIndex = bikeListTemp.findIndex((bike) => {
        return bike.id === action.payload.updatedBike.id;
      });
      bikeListTemp[foundIndex] = action.payload.updatedBike;
      return {
        ...state,
        bikeList: bikeListTemp,
      };
    }
    default: {
      return state;
    }
  }
};

export default bikeReducer;

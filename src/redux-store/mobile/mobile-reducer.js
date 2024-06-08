import { mobileList } from "./mobile-data.js";
import * as mobileActionType from "./mobile-action-type.js";

const initialState = {
  updatedMobile: {},
  mobileList: mobileList,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case mobileActionType.ADD_NEW_MOBILE: {
      return {
        ...state,
        mobileList: state.mobileList.concat(action.payload.newMobile),
      };
    }
    case mobileActionType.DELETE_MOBILE: {
      const mobileListFiltered = [...state.mobileList].filter((mobile) => {
        return mobile.id !== action.payload.mobileId;
      });
      return {
        ...state,
        mobileList: mobileListFiltered,
      };
    }
    case mobileActionType.LOAD_MOBILE: {
      return {
        ...state,
        updatedMobile: action.payload.mobileToBeUpdated,
      };
    }
    case mobileActionType.RESET_MOBILE: {
      return {
        ...state,
        updatedMobile: {},
      };
    }
    case mobileActionType.UPDATE_MOBILE: {
      let mobileListTemp = [...state.mobileList];
      const foundIndex = mobileListTemp.findIndex((mobile) => {
        return mobile.id === action.payload.updatedMobile.id;
      });
      mobileListTemp[foundIndex] = action.payload.updatedMobile;
      return {
        ...state,
        mobileList: mobileListTemp,
      };
    }
    default: {
      return state;
    }
  }
};

export default mobileReducer;

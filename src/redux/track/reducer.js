import {
  FETCH_TRACK_FAIL,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_DATA,
} from "./types";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACK_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_TRACK_FAIL:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

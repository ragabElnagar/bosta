import { FETCH_TRACK_DATA, FETCH_TRACK_FAIL, FETCH_TRACK_SUCCESS } from "./types";
import BOSTA_API from "../../apis/BostaAPI";

export const fetchTrack = () => {
  return {
    type: FETCH_TRACK_DATA,
  };
};

export const fetchTrackSuccess = (data) => {
  return {
    type: FETCH_TRACK_SUCCESS,
    payload: data,
  };
};

export const fetchTrackFail = (error) => {
  return {
    type: FETCH_TRACK_FAIL,
    payload: error,
  };
};

export const fetchTrackData = (trackId) => {
  return(dispatch) => {
    dispatch(fetchTrack());
    BOSTA_API.get(`/shipments/track/${trackId}`)
      .then((res) => {
        dispatch(fetchTrackSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchTrackFail(error?.response?.data?.error));
      });
  };
};



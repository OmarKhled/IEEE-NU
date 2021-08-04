import axios from "axios";

import {
  REQUEST_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
} from "../types/eventsTypes";

export const getEvents = () => async (dispatch) => {
  dispatch({
    type: REQUEST_EVENTS,
  });
  const res = await axios.get("/api/events");
  const events = res.data;

  if (res.data.msg) {
    dispatch({
      type: GET_EVENTS_FAIL,
      payload: res.data.msg,
    });
  } else if (events.events) {
    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: events.events,
    });
  }
};

import {
  REQUEST_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
} from "../types/eventsTypes";

export const getEventsReducer = (
  state = { events: [], loading: false, alerts: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_EVENTS:
      return {
        ...state,
        loading: true,
        events: [],
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: payload,
        alerts: [],
      };
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        events: [],
        alerts: [payload],
      };

    default:
      return state;
  }
};

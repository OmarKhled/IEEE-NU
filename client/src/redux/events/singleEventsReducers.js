import {
  DELETE_EVENTS,
  EVENTS_UPDATE,
  EVENTS_UPDATE_SUCCESS,
  EVENTS_UPDATE_FAIL,
  GET_SINGLE_EVENTS,
  GET_SINGLE_EVENTS_SUCCESS,
  GET_SINGLE_EVENTS_FAIL,
  ADD_EVENTS,
  ADD_EVENTS_SUCCESS,
  ADD_EVENTS_FAIL,
  SET_ALERT,
} from "../types/eventsTypes";

export const singleEventsReducer = (
  state = {
    events: {
      title: "",
      img: "",
      place: "",
      date: "",
    },
    loading: false,
    alerts: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_EVENTS:
      return {
        ...state,
        events: {
          title: "",
          img: "",
          place: "",
          date: "",
        },
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [...payload],
      };
    case ADD_EVENTS:
    case EVENTS_UPDATE:
    case GET_SINGLE_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case EVENTS_UPDATE_SUCCESS:
    case ADD_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: {
          title: "",
          img: "",
          place: "",
          date: "",
        },
        alerts: [],
      };
    case GET_SINGLE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: payload,
      };
    case EVENTS_UPDATE_FAIL:
    case GET_SINGLE_EVENTS_FAIL:
    case ADD_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        alerts: [payload],
      };

    default:
      return state;
  }
};

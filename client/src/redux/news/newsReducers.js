import {
  REQUEST_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
} from "../types/newsTypes";

export const getNewsReducer = (
  state = { news: [], loading: false, alerts: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_NEWS:
      return {
        ...state,
        loading: true,
        news: [],
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: payload,
        alerts: [],
      };
    case GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        news: [],
        alerts: [payload],
      };

    default:
      return state;
  }
};

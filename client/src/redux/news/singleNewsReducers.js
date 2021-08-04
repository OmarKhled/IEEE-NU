import {
  DELETE_NEWS,
  NEWS_UPDATE,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  GET_SINGLE_NEWS,
  GET_SINGLE_NEWS_SUCCESS,
  GET_SINGLE_NEWS_FAIL,
  ADD_NEWS,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_FAIL,
  SET_ALERT,
} from "../types/newsTypes";

export const singleNewsReducer = (
  state = {
    news: {
      title: "",
      url: "",
      description: "",
      date: "",
    },
    loading: false,
    alerts: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_NEWS:
      return {
        ...state,
        news: {
          title: "",
          url: "",
          description: "",
          date: "",
        },
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [...payload],
      };
    case ADD_NEWS:
    case NEWS_UPDATE:
    case GET_SINGLE_NEWS:
      return {
        ...state,
        loading: true,
      };
    case NEWS_UPDATE_SUCCESS:
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: {
          title: "",
          url: "",
          description: "",
          date: "",
        },
      };
    case GET_SINGLE_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: payload,
      };
    case NEWS_UPDATE_FAIL:
    case GET_SINGLE_NEWS_FAIL:
    case ADD_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        alerts: [payload],
      };

    default:
      return state;
  }
};

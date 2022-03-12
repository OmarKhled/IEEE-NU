import {
  CLEAR_SUBSCRIBER_ALERTS,
  POST_SUBSCRIBER,
  POST_SUBSCRIBER_FAIL,
  POST_SUBSCRIBER_SUCCESS,
} from "../types/newsLetterTypes";

export const newsLetterReducer = (
  state = { loading: false, alerts: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case POST_SUBSCRIBER:
      return {
        ...state,
        loading: true,
      };
    case POST_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        loading: false,
        alerts: [{ msg: "Thanks for subscribing!", color: "success" }],
      };
    case POST_SUBSCRIBER_FAIL:
      return {
        ...state,
        loading: false,
        alerts: [{ msg: payload, color: "danger" }],
      };

    case CLEAR_SUBSCRIBER_ALERTS: {
      return {
        ...state,
        loading: false,
        alerts: [],
      };
    }

    default:
      return state;
  }
};

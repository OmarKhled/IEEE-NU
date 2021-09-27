import axios from "axios";
import {
  CLEAR_SUBSCRIBER_ALERTS,
  POST_SUBSCRIBER,
  POST_SUBSCRIBER_FAIL,
  POST_SUBSCRIBER_SUCCESS,
} from "../types/newsLetterTypes";
import validator from "validator";

export const postSubscriber = (email) => async (dispatch) => {
  dispatch({
    type: POST_SUBSCRIBER,
  });

  if (validator.isEmail(email)) {
    try {
      const res = await axios.post("/api/newsletter", { email });
      const { newsLetter } = res.data;

      if (res.data.msg) {
        dispatch({
          type: POST_SUBSCRIBER_FAIL,
          payload: res.data.msg,
        });
        setTimeout(() => {
          dispatch({
            type: CLEAR_SUBSCRIBER_ALERTS,
          });
        }, 1500);
      } else if (newsLetter) {
        dispatch({
          type: POST_SUBSCRIBER_SUCCESS,
        });
        setTimeout(() => {
          dispatch({
            type: CLEAR_SUBSCRIBER_ALERTS,
          });
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: POST_SUBSCRIBER_FAIL,
        payload: err.message,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAR_SUBSCRIBER_ALERTS,
        });
      }, 1500);
    }
  } else {
    dispatch({
      type: POST_SUBSCRIBER_FAIL,
      payload: "Enter a valid Email",
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_SUBSCRIBER_ALERTS,
      });
    }, 1500);
  }
};

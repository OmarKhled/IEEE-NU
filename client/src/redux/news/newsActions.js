import axios from "axios";

import {
  REQUEST_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
} from "../types/newsTypes";

export const getNews = () => async (dispatch) => {
  dispatch({
    type: REQUEST_NEWS,
  });

  try {
    const res = await axios.get("/api/news");
    const news = res.data;

    if (res.data.msg) {
      dispatch({
        type: GET_NEWS_FAIL,
        payload: res.data.msg,
      });
    } else if (news.news) {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: news.news,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_NEWS_FAIL,
      payload: err.message,
    });
  }
};

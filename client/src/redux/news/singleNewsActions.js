import axios from "axios";

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

export const deleteNews = (id) => async (dispatch) => {
  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const res = await axios.delete(`/api/news/${id}`, config);
  const news = res.data.news;

  dispatch({
    type: DELETE_NEWS,
    payload: news,
  });
};

export const setAlerts = (alerts) => async (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: Array.isArray(alerts) ? alerts : [alerts],
  });

  setTimeout(() => {
    dispatch({
      type: SET_ALERT,
      payload: [],
    });
  }, 3000);
};

export const updateNews = (id, news) => async (dispatch) => {
  dispatch({
    type: NEWS_UPDATE,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (news.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", news.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
    }
  }

  try {
    const res = await axios.put(`/api/news/${id}`, news, config);

    if (res.data.msg) {
      dispatch({
        type: NEWS_UPDATE_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: NEWS_UPDATE_SUCCESS,
      payload: res.data.news,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNews = (news) => async (dispatch) => {
  dispatch({
    type: ADD_NEWS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (news.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", news.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
    }
  }
  try {
    const res = await axios.post(`/api/news`, news, config);

    if (res.data.msg) {
      dispatch({
        type: ADD_NEWS_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: ADD_NEWS_SUCCESS,
      payload: res.data.news,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleNews = (id, news) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_NEWS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const res = await axios.get(`/api/news/${id}`);

  if (res.data.msg) {
    dispatch({
      type: GET_SINGLE_NEWS_FAIL,
      payload: res.data.msg,
    });
  }

  dispatch({
    type: GET_SINGLE_NEWS_SUCCESS,
    payload: res.data.news,
  });
};

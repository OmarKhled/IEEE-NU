import axios from "axios";

import {
  REQUEST_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CLEAR_USER_ALERTS,
  LOGOUT_USER,
} from "../types/usersTypes";

export const getUser = (user) => async (dispatch, getState) => {
  dispatch({
    type: REQUEST_USER,
  });

  const res = await axios.post("/api/users", user);
  const data = res.data;

  if (data.msg) {
    dispatch({
      type: GET_USER_FAIL,
      payload: data.msg,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_USER_ALERTS,
      });
    }, 3000);
  } else if (data.user) {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.user,
    });

    const token = getState().user.user.token;
    localStorage.setItem("token", token);
  }
};

export const logOutUser = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

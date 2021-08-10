import axios from "axios";

import {
  REQUEST_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
} from "../types/membersTypes";

export const getMembers = () => async (dispatch) => {
  dispatch({
    type: REQUEST_MEMBERS,
  });
  try {
    const res = await axios.get("/api/members");
    const members = res.data;
    if (res.data.msg) {
      dispatch({
        type: GET_MEMBERS_FAIL,
        payload: res.data.msg,
      });
    } else if (members.members) {
      dispatch({
        type: GET_MEMBERS_SUCCESS,
        payload: members.members,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_MEMBERS_FAIL,
      payload: err.message,
    });
  }
};

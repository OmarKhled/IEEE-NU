import axios from "axios";

import {
  DELETE_MEMBERS,
  MEMBERS_UPDATE,
  MEMBERS_UPDATE_SUCCESS,
  MEMBERS_UPDATE_FAIL,
  GET_SINGLE_MEMBERS,
  GET_SINGLE_MEMBERS_SUCCESS,
  GET_SINGLE_MEMBERS_FAIL,
  ADD_MEMBERS,
  ADD_MEMBERS_SUCCESS,
  ADD_MEMBERS_FAIL,
  SET_ALERT,
} from "../types/membersTypes";

export const deleteMembers = (id) => async (dispatch) => {
  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`/api/members/${id}`, config);
    const members = res.data.members;

    dispatch({
      type: DELETE_MEMBERS,
      payload: members,
    });
  } catch (err) {
    console.log(err);
  }
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

export const updateMember = (id, member) => async (dispatch) => {
  dispatch({
    type: MEMBERS_UPDATE,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (member.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", member.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
      dispatch({
        type: MEMBERS_UPDATE_FAIL,
        payload: err.message,
      });
    }
  }

  try {
    const res = await axios.put(`/api/members/${id}`, member, config);

    if (res.data.msg) {
      dispatch({
        type: MEMBERS_UPDATE_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: MEMBERS_UPDATE_SUCCESS,
      payload: res.data.member,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: MEMBERS_UPDATE_FAIL,
      payload: err.message,
    });
  }
};

export const addMembers = (members) => async (dispatch) => {
  dispatch({
    type: ADD_MEMBERS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (members.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", members.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
    }
  }
  try {
    const res = await axios.post(`/api/members`, members, config);

    if (res.data.msg) {
      dispatch({
        type: ADD_MEMBERS_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: ADD_MEMBERS_SUCCESS,
      payload: res.data.members,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_MEMBERS_FAIL,
      payload: err.message,
    });
  }
};

export const getSingleMembers = (id, members) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_MEMBERS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get(`/api/members/${id}`);

    if (res.data.msg) {
      dispatch({
        type: GET_SINGLE_MEMBERS_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: GET_SINGLE_MEMBERS_SUCCESS,
      payload: res.data.members,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_SINGLE_MEMBERS_FAIL,
      payload: err.message,
    });
  }
};

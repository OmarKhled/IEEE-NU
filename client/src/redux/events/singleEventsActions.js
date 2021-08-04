import axios from "axios";

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

export const deleteEvents = (id) => async (dispatch) => {
  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const res = await axios.delete(`/api/events/${id}`, config);
  const events = res.data.events;

  dispatch({
    type: DELETE_EVENTS,
    payload: events,
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

export const updateEvent = (id, event) => async (dispatch) => {
  dispatch({
    type: EVENTS_UPDATE,
  });
  console.log(event);

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (event.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", event.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
    }
  }

  try {
    const res = await axios.put(`/api/events/${id}`, event, config);

    if (res.data.msg) {
      dispatch({
        type: EVENTS_UPDATE_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: EVENTS_UPDATE_SUCCESS,
      payload: res.data.event,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEvents = (events) => async (dispatch) => {
  dispatch({
    type: ADD_EVENTS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  if (events.file !== null) {
    try {
      const formData = new FormData();
      formData.append("file", events.file);
      const res = await axios.post("/api/upload", formData, config);
      console.log(res);
    } catch (err) {
      if (err) console.log(err, err.message);
    }
  }
  try {
    const res = await axios.post(`/api/events`, events, config);

    if (res.data.msg) {
      dispatch({
        type: ADD_EVENTS_FAIL,
        payload: res.data.msg,
      });
    }

    dispatch({
      type: ADD_EVENTS_SUCCESS,
      payload: res.data.events,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleEvents = (id, events) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_EVENTS,
  });

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const res = await axios.get(`/api/events/${id}`);

  if (res.data.msg) {
    dispatch({
      type: GET_SINGLE_EVENTS_FAIL,
      payload: res.data.msg,
    });
  }

  dispatch({
    type: GET_SINGLE_EVENTS_SUCCESS,
    payload: res.data.events,
  });
};

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

export const singleMembersReducer = (
  state = {
    members: {
      name: "",
      img: "",
      role: "",
      faculty: "",
      facebook: "",
      linkedin: "",
      position: "",
      description: "",
    },
    loading: false,
    alerts: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_MEMBERS:
      return {
        ...state,
        members: {
          name: "",
          img: "",
          role: "",
          faculty: "",
          facebook: "",
          linkedin: "",
          position: "",
          description: "",
        },
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [...payload],
      };
    case ADD_MEMBERS:
    case MEMBERS_UPDATE:
    case GET_SINGLE_MEMBERS:
      return {
        ...state,
        loading: true,
      };
    case MEMBERS_UPDATE_SUCCESS:
    case ADD_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: {
          name: "",
          img: "",
          role: "",
          faculty: "",
          facebook: "",
          linkedin: "",
          position: "",
          description: ""
        },
        alerts: [],
      };
    case GET_SINGLE_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: payload,
      };
    case MEMBERS_UPDATE_FAIL:
    case GET_SINGLE_MEMBERS_FAIL:
    case ADD_MEMBERS_FAIL:
      return {
        ...state,
        loading: false,
        alerts: [payload],
      };

    default:
      return state;
  }
};

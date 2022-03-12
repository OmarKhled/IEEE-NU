import {
  REQUEST_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
} from "../types/membersTypes";

export const getMembersReducer = (
  state = { members: [], loading: false, alerts: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_MEMBERS:
      return {
        ...state,
        loading: true,
        members: [],
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: payload,
        alerts: [],
      };
    case GET_MEMBERS_FAIL:
      return {
        ...state,
        loading: false,
        members: [],
        alerts: [payload],
      };

    default:
      return state;
  }
};

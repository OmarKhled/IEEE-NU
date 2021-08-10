import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userAuthReducer } from "./users/usersReducers";

import { getNewsReducer } from "./news/newsReducers";
import { singleNewsReducer } from "./news/singleNewsReducers";

import { getEventsReducer } from "./events/eventsReducers";
import { singleEventsReducer } from "./events/singleEventsReducers";

import { getMembersReducer } from "./members/membersReducers";
import { singleMembersReducer } from "./members/singleMembersReducers";

const reducers = combineReducers({
  user: userAuthReducer,
  news: getNewsReducer,
  singleNews: singleNewsReducer,
  events: getEventsReducer,
  singleEvent: singleEventsReducer,
  members: getMembersReducer,
  singleMember: singleMembersReducer,

});

const middleWares = [thunk];

var initialState = {
  user: {
    user: {},
    loading: false,
    alerts: [],
    isAuthenticated: false,
  },
};

const token = localStorage.getItem("token");

const store = async () => {
  if (token !== null) {
    const config = {
      headers: {
        auth: token,
      },
    };
    try {
      const res = await axios.get("/api/users/auth", config);
      const user = res.data.user;
      if (user) {
        initialState = {
          user: {
            user: user,
            loading: false,
            alerts: [],
            isAuthenticated: true,
          },
        };
      }
    } catch (err) {
      console.log(err);
    }
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middleWares))
    );
  } else {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middleWares))
    );
  }
};

export default store;

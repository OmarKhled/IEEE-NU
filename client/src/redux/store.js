import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { userAuthReducer } from "./users/usersReducers";

import { getNewsReducer } from "./news/newsReducers";
import { singleNewsReducer } from "./news/singleNewsReducers";

import { getEventsReducer } from "./events/eventsReducers";
import { singleEventsReducer } from "./events/singleEventsReducers";

import { getMembersReducer } from "./members/membersReducers";
import { singleMembersReducer } from "./members/singleMembersReducers";
import os from "os";
import platform from "platform";
import { newsLetterReducer } from "./newsLetter/newsLetterReducer";

const reducers = combineReducers({
  user: userAuthReducer,
  news: getNewsReducer,
  singleNews: singleNewsReducer,
  events: getEventsReducer,
  singleEvent: singleEventsReducer,
  members: getMembersReducer,
  singleMember: singleMembersReducer,
  newsLetter: newsLetterReducer,
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

    try {
      const geoRes = await axios.get(
        "http://www.geoplugin.net/json.gp?ip=%3Cyour%20ip%20here%3E&jsoncallback"
      );
      const clientName = os.hostname();
      const platformDetails = {
        name: platform.name,
        os: platform.os,
        product: platform.product,
        manufacture: platform.manufacture,
      };
      const data = {
        geoData: geoRes.data,
        clientName,
        platform: platformDetails,
      };
      await axios.post("/api/geoData", data);
    } catch (err) {
      // console.log("Err");
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

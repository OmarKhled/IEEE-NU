import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

store().then((str) => {
  setTimeout(() => {
    ReactDOM.render(
      <Provider store={str}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  }, 700);
});

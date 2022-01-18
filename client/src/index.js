import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";

import App from "./App";

// reducers index export
import reducers from "./reducers";

// create store, give store reducers, apply thunk middleware
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // wrap provider around app and give store to everything in app
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

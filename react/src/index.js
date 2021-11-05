import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { App } from "./App";
import { rootReducer } from "./store/reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunk } from "./store/middleware";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

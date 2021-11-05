import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { ConnectedCounter } from "./App";
import { rootReducer } from "./reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunk } from "./middleware";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  </React.StrictMode>,
  rootElement
);

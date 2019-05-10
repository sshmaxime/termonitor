import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider as ReduxProvider } from "react-redux";

import configureStore from "./modules/store";
// Create Redux store
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ReduxProvider store={reduxStore}>
      <App />
    </ReduxProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

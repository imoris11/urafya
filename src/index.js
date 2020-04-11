import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import createSagaMiddleware from "redux-saga";

import "./assets/css/mytvm.css";
import "./assets/css/sb-admin-2.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/react-tabs.css";
import rootSagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, ReduxPromise, sagaMiddleware];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleWares))
);
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginForm from "./components/LoginForm";
import UserPanel from "./components/UserPanel";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} history={history} />
        <Route path="/userpanel" component={UserPanel} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

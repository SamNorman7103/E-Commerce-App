import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Root } from "./components/Root";
import { Provider } from "react-redux";
import fetchPosts from "./Api"

import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from "./Store/Reducer";
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import "./index.css"



export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));



store.dispatch(fetchPosts()) 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="ui menu">
              <Root />
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";

import store from "./data/store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        handlePlayer1={() => store.dispatch({ type: "PLAYER_1" })}
        handlePlayer2={() => store.dispatch({ type: "PLAYER_2" })}
        handleReset={() => store.dispatch({ type: "RESET" })}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

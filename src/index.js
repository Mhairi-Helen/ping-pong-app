import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";



const initialState = {
  player1: 0,
  player2: 0,
  player1Serve: true,
};


const setServer = (state, action) => {
  let changeServer = (state.player1 >= 20 && state.player2 >= 20 ? 2 : 5);
  return { ...state, player1Serve: (state.player1 + state.player2) % changeServer === 0 ? !state.player1Serve : state.player1Serve };
};

const player1 = (state, action) => {
  return { ...state, player1: state.player1 + 1 };
};

const player2 = (state, action) => {
  return { ...state, player2: state.player2 + 1 }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1": return setServer(player1(state));
    case "PLAYER_2": return setServer(player2(state));
    case "RESET": return initialState;
    default: return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={state.player1}
        player2={state.player2}
        player1Serve={state.player1Serve}
        handlePlayer1={() => store.dispatch({ type: "PLAYER_1" })}
        handlePlayer2={() => store.dispatch({ type: "PLAYER_2" })}
        handleReset={() => store.dispatch({ type: "RESET" })}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

};

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

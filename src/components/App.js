import React from "react";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Winner from "./Winner";
import Buttons from "./Reset";
import Settings from "./Settings";
import History from "./History";
import NavSet from "./Nav/NavSet";
import NavScore from "./Nav/NavScore";

const App = ({ handlePlayer1, handlePlayer2, handleReset, winner }) => (
  <React.Fragment>
    <Router>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
        <h1>PongPing</h1>
      </header>

      <Route exact path="/">
        {/* navbar */}
        <NavScore />

        {/* scores */}
        <div className="row mb-4">
          <Player1 handleClick={handlePlayer1} />
          <Player2 handleClick={handlePlayer2} />
        </div>

        { /* winner message */}
        <div>
          <Winner winner={winner} />
        </div>

        < hr />
        { /* reset button */}
        <div>
          <Buttons handleClick={handleReset} />
        </div>

        <div>
          <History />
        </div>
      </Route>

      <Route exact path="/settings">

        {/* navbar */}
        <NavSet />

        {/* form */}
        <div className="row mb-4">
          <Settings />
        </div>
      </Route>
    </Router>


  </React.Fragment >
);

export default App;
